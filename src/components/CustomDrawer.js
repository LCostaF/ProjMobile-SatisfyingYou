import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { globalStyles } from '../style/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector } from 'react-redux';

const CustomDrawer = (props) => {

    const email = useSelector((state) => state.login.email)

    return (
        <View style={styles.drawerContainer}>
            <DrawerContentScrollView {...props} >
                <View style={styles.userEmail}>
                    <Text style={globalStyles.label}>{email}</Text>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem 
                icon={() => (
                    <Icon name="logout" size={30} color={'#ffffff'}/>
                )} 
                style={{marginTop: '80%'}} labelStyle={{fontFamily: 'AveriaLibre-Regular', color: '#ffffff'}} label="Sair" onPress={() => {props.navigation.push('Login'); props.navigation.closeDrawer() }} />
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#2B1F5C', // Set the background color here
    },
    userEmail: {
        alignSelf: 'center',
    },
})

export default CustomDrawer;