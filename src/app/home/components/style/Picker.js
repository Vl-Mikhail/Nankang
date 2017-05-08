import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    PinItem: {
        marginTop: 10,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: .5,
        borderBottomColor: 'white'
    },
    PinIconItem: {
        flex: .5,
        marginLeft: 30
    },
    PinNameItem: {
        flex: 5,
        // marginLeft: 5,
        alignItems: 'center'
    }
});

export default styles;