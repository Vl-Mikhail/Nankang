import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    Linking,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SocialIcon } from 'react-native-elements';
import Picker from 'react-native-picker';
import { PickerBtn } from './components';
import styles from './style/HomeScreen';
import * as api from '../../utils/api'


const url_mail = 'http://www.nankang.ru/contacts.htm';
export class HomeScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor () {
        super();
        this.state = {
            type: 'Тип шин',
            width: 'Ширина',
            series: 'Профиль',
            diameter: 'Диаметр',
            animating: true,
            data: {}
        };
    }

    componentDidMount () {
        this._fetchData();
    }

    _fetchData = () => {
        const data = {types: [], widths: [], serieses: [], diameters: []};
        const rootType = api.getData('type', data.types);
        const rootWidth = api.getData('width', data.widths);
        const rootSeries = api.getData('series', data.serieses);
        const rootDiameter = api.getData('diameter', data.diameters);

        Promise.all([rootType, rootWidth, rootSeries, rootDiameter]).then(() => {
            this.setState({animating: false});
            this.setState({data: data});
        });


    };

    onSearchPressed = () => {
        const {navigate} = this.props.navigation;
        api.checkParams(navigate, {...this.state});
    };

    showTypePicker = () => {
        this._pickerProps('Тип шин', this.state.data.types, 'type');
    };

    showWidthPicker = () => {
        this._pickerProps('Ширина', this.state.data.widths, 'width');
    };

    showSeriesPicker = () => {
        this._pickerProps('Профиль', this.state.data.serieses, 'series');
    };

    showDiameterPicker = () => {
        this._pickerProps('Диаметр', this.state.data.diameters, 'diameter');
    };

    _pickerProps (title, data, state) {
        Picker.init({
            pickerTitleText: `Выберите ${title}`,
            pickerFontSize: 25,
            pickerConfirmBtnText: 'Принять',
            pickerCancelBtnText: 'Отмена',
            pickerData: data,
            onPickerConfirm: pickedValue => {
                switch (state) {
                    case 'type':
                        this.setState({type: pickedValue[0]});
                        break;
                    case 'width':
                        this.setState({width: pickedValue[0]});
                        break;
                    case 'series':
                        this.setState({series: pickedValue[0]});
                        break;
                    case 'diameter':
                        this.setState({diameter: pickedValue[0]});
                        break;
                }
            }
        });
        return Picker.show();
    }

    render () {
        const {animating} = this.state;
        const {navigate} = this.props.navigation;

        const spinner = animating ?
            <ActivityIndicator
                animating={this.state.animating}
                style={[styles.centering]}
                size="large"
            /> : <View/>;

        return (
            <Image source={require('../../img/background.png')} style={styles.container}>
                <View style={styles.PinIcon}>
                    <View style={{flex: 1}}>
                        <Icon name="ios-mail"
                              size={32}
                              color="white"
                              onPress={() => Linking.openURL(url_mail)}
                        />
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end', marginRight: 20}}>
                        <Icon name="ios-briefcase"
                              size={32}
                              color="white"
                              onPress={() => navigate('About')}
                        />
                    </View>
                </View>

                <View style={styles.PinTitle}>
                    <Text style={styles.PinTitleText}>NANKANG</Text>
                </View>
                {spinner}
                {!animating &&
                <View style={styles.PinItems}>
                    <PickerBtn state={this.state.type} action={this.showTypePicker}/>
                    <PickerBtn state={this.state.width} action={this.showWidthPicker}/>
                    <PickerBtn state={this.state.series} action={this.showSeriesPicker}/>
                    <PickerBtn state={this.state.diameter} action={this.showDiameterPicker}/>
                </View>
                }

                {!animating &&
                <TouchableOpacity style={styles.PinButton}
                                  onPress={this.onSearchPressed}>
                    <Text style={styles.PinButtonText}>Найти шины</Text>
                </TouchableOpacity>
                }

                <View style={styles.PinEngineer}>
                    <Text style={styles.PinEngineerText}>Best app <Text
                        style={styles.PinEngineerTextBold}>Ivanov</Text></Text>
                    <View style={styles.PinEngineerIcon}>
                        <SocialIcon type='instagram'
                                    onPress={() => Linking.openURL('https://www.instagram.com/nankang_ru/')}/>
                    </View>
                </View>
            </Image>
        )
    }
}