import { PixelRatio, StyleSheet } from "react-native";

/**
 * Стили для информации
 * @type {Object}
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    PinImage: {
        flex: 1,
        flexDirection: 'column',
        resizeMode: 'cover',
        width: PixelRatio.get() * 190,
    },
    PinAbout: {
        backgroundColor: '#f1f1f1',
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: -25,
        shadowColor: 'black',
        shadowRadius: 40,
        shadowOpacity: 80,
        shadowOffset: {width: 0, height: 0}
    },
    PinIcon: {
        flex: 1,
        margin: 15,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#8d8d8d'
    },
    PinTitle: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginRight: 20
    },
    PinTextTitle: {
        color: 'black',
        marginLeft: 30,
        fontSize: PixelRatio.get() * 10,
        // fontFamily: 'Avenir',
        // fontWeight: '100'
    },
    PinTextPrice: {
        color: 'black',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
    },
    PinInfo: {
        flex: 2
    },
    AboutTire: {
        flex: 6,
        alignItems: 'center'
    },
    AboutTireText: {
        marginRight: 30,
        marginLeft: 30,
        flex: 3
    }
});

export default styles;