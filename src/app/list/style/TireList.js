import { StyleSheet, PixelRatio } from 'react-native';

/**
 * Стили для списка
 * @type {Object}
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    PinImage: {
        flex: 1,
        resizeMode: 'stretch',
        width: PixelRatio.get() * 190,
    },
    PinTitle: {
        flex: 3,
        alignItems:'center',
    },
    PinTitleText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Avenir',
        fontWeight: '100',
    },
    PinIcon: {
        flex:1,
        marginLeft: 20,
        alignItems: 'flex-start',
        justifyContent:'flex-end',
    },
    PinList: {
        flex: 2.5,
        marginTop: -20
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    avatarStyle: {
        width: 120,
        height: 100,
        margin: -10,
    }
});

export default styles;