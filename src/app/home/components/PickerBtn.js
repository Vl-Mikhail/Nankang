import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./style/Picker";

const Picker = ({state, action}) => (

    <View style={styles.PinItem}>
        <View style={styles.PinIconItem}>
            <Icon name="logo-codepen" size={30} color="white"/>
        </View>
        <View style={styles.PinNameItem}>
            <TouchableOpacity onPress={action}>
                <Text style={{fontSize: 20, color: 'white'}}>{state}</Text>
            </TouchableOpacity>
        </View>
    </View>

);

Picker.propTypes = {
    state: PropTypes.string,
    action: PropTypes.func
};

export default Picker;