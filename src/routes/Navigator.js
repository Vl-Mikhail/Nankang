import { StackNavigator } from "react-navigation";
import { AboutNankang, HomeScreen, TireInfo, TireList } from "../app";


export default StackNavigator({
    Home: {screen: HomeScreen},
    Tires: {screen: TireList},
    Info: {screen: TireInfo},
    About: {screen: AboutNankang}
}, {
    mode: 'modal',
});

