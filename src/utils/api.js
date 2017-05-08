import * as firebase from 'firebase';
import {
    Alert,
} from 'react-native';


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

function getData (field, data) {
    return firebase.database().ref().child(field).once('value').then(snap => {
        snap.forEach(item => {
            data.push(item.val().code);
        });
    });
}

export { checkParams, getData };