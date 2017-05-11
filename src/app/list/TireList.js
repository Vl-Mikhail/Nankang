import React, { Component } from "react";
import { ActivityIndicator, Image, ListView, Text, View } from "react-native";
import { List, ListItem } from "react-native-elements";
import styles from "./style/TireList";
import { LocalImage } from "./components";
import PropTypes from "prop-types";
import { fetchTire } from "./actions";
import { connect } from "react-redux";


const text = 'Шин Nankang данного размера нет в наличии';

@connect(state => ({tires: state.tires}), {fetchTire})
export default class TireList extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        alertText: '',
    };

    async componentDidMount () {
        try {
            await this.props.fetchTire();
            this._loadInitialState();
        } catch (e){
            console.log(e);
        }
    }

    _loadInitialState = () => {
        const {type, width, series, diameter} = this.props.navigation.state.params;

        let sortTask = this.props.tires.tires.filter(item =>
            item.type === type &&
            item.width === width &&
            item.series === series &&
            item.diameter === diameter
        );

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(sortTask)
        });
    };

    _rowPressed (rowId) {
        const {tires} = this.props.tires;
        this.props.navigation.navigate('Info', tires[rowId])
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
        const {navigation, tires: {isFetched, error}} = this.props;
        const {dataSource} = this.state;

        if (!isFetched) {
            return (
                <View>
                    <Image source={require('../../img/one.jpg')} style={styles.PinImage}/>
                    <ActivityIndicator
                        animating={!isFetched}
                        style={[styles.centering]}
                        size="large"
                    />
                </View>
            )
        } else if (error) {
            return (
                <View>
                    <Text>{error}</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <LocalImage source={require('../../img/one.jpg')}
                            style={styles.PinImage}
                            originalWidth={640}
                            originalHeight={480}
                            navigation={navigation}
                            title="МОДЕЛЬ ШИН"
                            icon="ios-arrow-back"
                />
                {dataSource._cachedRowCount === 0 ?
                    <Text style={{margin: 10, fontSize: 20}}>
                        {text}
                    </Text> :
                    <View style={styles.PinList}>
                        <List containerStyle={{borderBottomWidth: 0, borderTopWidth: 0}}>
                            <ListView
                                renderRow={this.renderRow}
                                dataSource={dataSource}
                            />
                        </List>
                    </View>
                }
            </View>
        );
    }
}

TireList.propTypes = {
    navigation: PropTypes.object.isRequired,
    tires: PropTypes.shape({
        tires: PropTypes.object,
        isFetched: PropTypes.bool,
        error: PropTypes.string
    })
};