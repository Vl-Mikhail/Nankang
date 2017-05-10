import React, { Component, PropTypes } from "react";
import { Linking, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from "react-native-elements";
import styles from "./style/TireInfo";
import { LocalImage } from "../list/components";


export default class TireInfo extends Component {

    static navigationOptions = {
        header: null
    };

    static propTypes = {
        name: PropTypes.string,
        price: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
        navigation: PropTypes.object
    };

    render () {

        const {navigation} = this.props;
        const {name, price, description, url} = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <LocalImage source={require('../../img/one.jpg')}
                            style={styles.PinImage}
                            originalWidth={640}
                            originalHeight={480}
                            navigation={navigation}
                />
                <View style={styles.PinInfo}>
                    <View style={styles.PinAbout}>
                        <View style={styles.PinIcon}>
                            <Icon name="ios-arrow-back" size={32} color="black" onPress={() => navigation.goBack()}
                                  style={{flex: 1, marginLeft: 20}}/>
                            <View style={styles.PinTitle}>
                                <Text style={styles.PinTextTitle}>{name}</Text>
                                <Text style={styles.PinTextPrice}>{price}</Text>
                            </View>
                        </View>
                        <View style={styles.AboutTire}>
                            <View style={styles.AboutTireText}>
                                <Text style={{lineHeight: 20}}>{description}</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <Button title='Купить' borderRadius={5} buttonStyle={{width: 200}}
                                        onPress={() => Linking.openURL(`${url}`)}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}