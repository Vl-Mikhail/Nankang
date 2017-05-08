import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './style/AboutNanlang';


export default class AboutNankang extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>О компании</Text>
            </View>
        )
    }
}