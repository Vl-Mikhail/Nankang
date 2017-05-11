import * as firebase from "firebase";
import { Alert } from "react-native";


function checkParams (navigate, state) {
    if (state.type === 'Тип шин') {
        Alert.alert("Выберите тип шин");
    } else if (state.width === 'Ширина') {
        Alert.alert("Выберите ширину");
    } else if (state.series === 'Профиль') {
        Alert.alert("Выберите профиль");
    } else if (state.diameter === 'Диаметр') {
        Alert.alert("Выберите диаметр");
    } else {
        navigate('Tires', {...state});
    }
}

async function fetchType () {
    try {
        const data = {types: [], widths: [], serieses: [], diameters: []};

        await getData('type', data.types);
        await getData('width', data.widths);
        await getData('series', data.serieses);
        await getData('diameter', data.diameters);

        return data;
    } catch (e) {
        console.log(e)
    }
}

async function fetchTires () {
    try {
        let tires = [];
        await getTire(tires);
        return tires;
    } catch (e) {
        console.log(e)
    }
}

async function getTire (tires) {
    return await firebase.database().ref().child('tires').once('value', snap => {
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
    });
}

async function getData (field, data) {
    return await firebase.database().ref().child(field).once('value', snap => {
        snap.forEach(item => {
            data.push(item.val().code);
        });
    });
}

export { checkParams, fetchType, fetchTires };