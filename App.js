import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import NovaConta from "./src/screens/NovaConta";
import AcoesPesquisa from "./src/screens/AcoesPesquisa";
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao";
import Drawer from "./src/screens/Drawer";

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerTintColor: '#FFFFFF', headerStyle: {backgroundColor: '#2B1D62'}}}>
                <Stack.Screen options={{headerShown: false}} name = "Login" component={Login} />
                <Stack.Screen name="Nova Conta" component={NovaConta} />
                <Stack.Screen options={{headerShown: false}} name="Drawer" component={Drawer} />
                <Stack.Screen name="Carnaval" component={AcoesPesquisa} />
                <Stack.Screen name="Agradecimento" component={AgradecimentoParticipacao} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App