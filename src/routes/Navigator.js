import { StackNavigator } from 'react-navigation';
import { HomeScreen } from '../app/home/HomeScreen';
import TireList from '../app/list/TireList';
import TireInfo from '../app/info/TireInfo';
import AboutNankang from '../app/about/AboutNankang';

export default StackNavigator({
    Home: {screen: HomeScreen},
    Tires: {screen: TireList},
    Info: {screen: TireInfo},
    About: {screen: AboutNankang}
}, {
    mode: 'modal',
});

