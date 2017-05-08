import React, { Component } from 'react';
import {
    Alert,
    Image,
    ListView,
    View,
    ActivityIndicator,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { List, ListItem } from 'react-native-elements';
import * as firebase from 'firebase';
import styles from './style/TireList';


const text = 'Шин Nankang данного размера нет в наличии';
export default class TireList extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        animating: true,
        alertText:'',
        models: [],
    };

    componentDidMount () {
        this._fetchData();
    }

    _fetchData = () => {
        const {type, width, series, diameter} = this.props.navigation.state.params;
        const rootRef = firebase.database().ref().child('tires');

        rootRef.on('value', snap => {
            let tires = [];
            snap.forEach(item => {
                tires.push({
                    name: item.val().name,
                    type: item.val().type,
                    width: item.val().width,
                    series: item.val().series,
                    diameter: item.val().diameter,
                    price: item.val().price,
                    subtitle: item.val().subtitle,
                    description: item.val().description,
                    avatar_url: item.val().avatar_url,
                    url: item.val().url
                });
            });

            let sortTask = tires.filter(item =>
                item.type === type &&
                item.width === width &&
                item.series === series &&
                item.diameter === diameter
            );

            if(sortTask.length === 0){
                Alert.alert(text);
                this.setState({alertText: text});
                this.setState({animating: false});
                return;
            }

            this.setState({
                animating: false,
                models: sortTask,
                dataSource: this.state.dataSource.cloneWithRows(sortTask)
            });
        });
    };

    _rowPressed (rowId) {
        let property = this.state.models[rowId];
        this.props.navigation.navigate('Info', property)
    }

    renderRow = (rowData, sectionID, rowId) => {
        return (
            <ListItem
                key={sectionID}
                title={rowData.name}
                subtitle={rowData.subtitle}
                avatar={{uri: rowData.avatar_url,}}
                avatarStyle={styles.avatarStyle}
                onPress={() => this._rowPressed(rowId)}
            />
        )
    };

    render () {
        const {navigation} = this.props;
        const {models, alertText} = this.state;

        const spinner = this.state.animating ?
            <ActivityIndicator
                animating={this.state.animating}
                style={[styles.centering, {height: 80}]}
                size="large"
            /> : <View/>;

        return (
            <View style={styles.container}>
                <Image source={require('../../img/one.jpg')} style={styles.PinImage}>
                    <View style={styles.PinIcon}>
                        <Icon name="ios-arrow-back" size={32} color="black" onPress={() => navigation.goBack()}/>
                    </View>
                    <View style={styles.PinTitle}>
                        <Text style={styles.PinTitleText}>МОДЕЛИ ШИН</Text>
                    </View>
                </Image>
                {spinner}
                {models.length === 0 &&
                <Text style={{margin: 10, fontSize: 20}}>
                    {alertText}
                </Text>
                }
                <View style={styles.PinList}>
                    <List containerStyle={{borderBottomWidth: 0, borderTopWidth: 0}}>
                        <ListView
                            renderRow={this.renderRow}
                            dataSource={this.state.dataSource}
                        />
                    </List>
                </View>
            </View>
        );
    }
}

