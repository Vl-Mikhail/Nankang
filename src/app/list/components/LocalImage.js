import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../style/TireList";
import { Dimensions, Image, Text, View } from "react-native";

const LocalImage = ({source, originalWidth, originalHeight, navigation, title, icon}) => {
    let window = Dimensions.get('window').width;
    let newHeight = originalHeight * window / originalWidth - 70;
    return (
        <Image source={source} style={{width: window, height: newHeight}}>
            <View style={styles.PinIcon}>
                {icon &&
                <Icon name={icon} size={32} color="white" onPress={() => navigation.goBack()}/>
                }
            </View>
            <View style={styles.PinTitle}>
                <Text style={styles.PinTitleText}>{title}</Text>
            </View>
        </Image>
    )
};

LocalImage.propTypes = {
    originalWidth: PropTypes.number.isRequired,
    originalHeight: PropTypes.number.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    navigation: PropTypes.object.isRequired
};

export default LocalImage;