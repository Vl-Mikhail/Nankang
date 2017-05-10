import { StyleSheet } from "react-native";

/**
 * Стили для главного экрана
 * @type {Object}
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'transparent',
        resizeMode: 'cover'
    },
    PinIcon: {
        flexDirection: 'row',
        marginLeft: 20,
        height: 60,
        alignItems: 'flex-end',
    },
    PinTitle: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 30,
    },
    PinTitleText: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'Avenir',
        fontWeight: '100'
    },
    PinItems: {
        flex: 5,
    },
    PinButton: {
        flex: 0.7,
        backgroundColor: '#FF3366',
        justifyContent: 'center',
        alignItems: 'center'
    },
    PinButtonText: {
        color: 'white',
    },
    PinEngineer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    PinEngineerText: {
        flex: 1,
        color: 'white',
        fontSize: 10,
        margin: 20
    },
    PinEngineerTextBold: {
        color: 'white',
        fontWeight: 'bold'
    },
    PinEngineerIcon: {
        flex: 1,
        alignItems: 'flex-end',
        margin: 20
    },
    centering: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    }
});

export default styles;