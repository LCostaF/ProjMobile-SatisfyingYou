import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from "../components/CustomDrawer";

const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {

    return (
        <DrawerNavigator.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
            <DrawerNavigator.Screen options={{
                drawerLabelStyle: {fontFamily: 'AveriaLibre-Regular', color: '#ffffff'},
                drawerIcon: () => (
                    <Icon name="description" size={30} color={'#ffffff'} />
                ),
                }} name="Pesquisas" component={Home} />
        </DrawerNavigator.Navigator>
    )

}

export default Drawer