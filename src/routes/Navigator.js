import { StackNavigator } from 'react-navigation';
import { HomeScreen, TireList, TireInfo, AboutNankang } from '../app';


export default StackNavigator({
    Home: {screen: HomeScreen},
    Tires: {screen: TireList},
    Info: {screen: TireInfo},
    About: {screen: AboutNankang}
}, {
    mode: 'modal',
});

