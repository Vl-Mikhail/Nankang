import React, { Component } from "react";
import { ActivityIndicator, Image, Linking, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SocialIcon } from "react-native-elements";
import Picker from "react-native-picker";
import { PickerBtn } from "./components";
import styles from "./style/HomeScreen";
import * as api from "../../utils/api";
import PropTypes from "prop-types";

import { fetchTypes } from "./actions";
import { connect } from "react-redux";


const url_mail = 'http://www.nankang.ru/contacts.htm';

@connect(state => ({home: state.home}), {fetchTypes})
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
        this.props.fetchTypes();
    }

    onSearchPressed = () => {
        const {navigate} = this.props.navigation;
        api.checkParams(navigate, {...this.state});
    };

    showTypePicker = () => {
        this._pickerProps('Тип шин', this.props.home.data.types, 'type');
    };

    showWidthPicker = () => {
        this._pickerProps('Ширина', this.props.home.data.widths, 'width');
    };

    showSeriesPicker = () => {
        this._pickerProps('Профиль', this.props.home.data.serieses, 'series');
    };

    showDiameterPicker = () => {
        this._pickerProps('Диаметр', this.props.home.data.diameters, 'diameter');
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
        const {navigation: {navigate}, home: {isFetched, error}} = this.props;

        if (!isFetched) {
            return (
                <Image source={require('../../img/background.png')} style={styles.container}>
                    <ActivityIndicator
                        animating={this.state.animating}
                        style={[styles.centering]}
                        size="large"
                    />
                </Image>
            )
        } else if (error) {
            return (
                <View>
                    <Text>{error}</Text>
                </View>
            )
        }


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
                <View style={styles.PinItems}>
                    <PickerBtn state={this.state.type} action={this.showTypePicker}/>
                    <PickerBtn state={this.state.width} action={this.showWidthPicker}/>
                    <PickerBtn state={this.state.series} action={this.showSeriesPicker}/>
                    <PickerBtn state={this.state.diameter} action={this.showDiameterPicker}/>
                </View>

                <TouchableOpacity style={styles.PinButton}
                                  onPress={this.onSearchPressed}>
                    <Text style={styles.PinButtonText}>Найти шины</Text>
                </TouchableOpacity>

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

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    fetchTypes: PropTypes.func,
    home: PropTypes.shape({
        data: PropTypes.object,
        isFetched: PropTypes.bool,
        error: PropTypes.string
    })
};