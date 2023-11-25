import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import NovaConta from "./src/screens/NovaConta";
import AcoesPesquisa from "./src/screens/AcoesPesquisa";
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao";
import RecuperarSenha from "./src/screens/RecuperarSenha";
import Drawer from "./src/screens/Drawer";
import NovaPesquisa from "./src/screens/NovaPesquisa";
import ModificarPesquisa from "./src/screens/ModificarPesquisa";
import Relatorio from "./src/screens/Relatorio";
import Coleta from './src/screens/Coleta';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const Stack = createStackNavigator()

const App = () => {
    return (

        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Relatório" screenOptions={{headerTintColor: '#FFFFFF', headerStyle: {backgroundColor: '#2B1D62'}}}>
                    <Stack.Screen options={{headerShown: false}} name = "Login" component={Login} />
                    <Stack.Screen name="Nova Conta" component={NovaConta} />
                    <Stack.Screen options={{headerShown: false}} name="Drawer" component={Drawer} />
                    <Stack.Screen name="Acoes Pesquisa" component={AcoesPesquisa} />
                    <Stack.Screen name="Nova pesquisa" component={NovaPesquisa} />
                    <Stack.Screen name="Modificar pesquisa" component={ModificarPesquisa} />
                    <Stack.Screen options={{headerShown: false}} name="Coleta" component={Coleta} />
                    <Stack.Screen name="Relatório" component={Relatorio} />
                    <Stack.Screen name="Recuperação de senha" component={RecuperarSenha} />
                    <Stack.Screen options={{headerShown: false}} name="Agradecimento" component={AgradecimentoParticipacao} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App