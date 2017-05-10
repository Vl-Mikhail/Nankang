import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./style/AboutNanlang";


export default class AboutNankang extends Component {

    static navigationOptions = {
        title: 'О компании Nankang',
    };

    render () {
        return (
            <View style={styles.container}>
                <Text style={{padding: 50, lineHeight: 20, fontFamily: 'Avenir'}}>
                    Компания «Nankang Rubber Tire». Nankang Rubber Tire – крупнейший завод по производству авторезины в
                    Тайване, имеющий богатую историю развития, занимающий лидирующее положение по уровню качества
                    предлагаемой продукции, хорошей репутации и развитию технологий. Компании «Nankang Rubber Tire»
                    доверяют потребители дистрибьюторы по всему миру. Постоянно делая упор на улучшения качества
                    продукции и инновационные введения, Компания надеется оставаться ведущей в сфере качества продукции,
                    технологии производства, обеспечения комфортного обслуживания, оперативности и безопасности
                    коммуникации и транспортировки.
                </Text>
                <Text style={{padding: 50, lineHeight: 20, fontFamily: 'Avenir'}}>
                    ТЕЛ: 886-3-5592102
                    FAX: 886-3-5592671
                </Text>
            </View>
        )
    }
}