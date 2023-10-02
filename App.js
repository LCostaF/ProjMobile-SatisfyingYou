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

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerTintColor: '#FFFFFF', headerStyle: {backgroundColor: '#2B1D62'}}}>
                <Stack.Screen options={{headerShown: false}} name = "Login" component={Login} />
                <Stack.Screen name="Nova Conta" component={NovaConta} />
                <Stack.Screen options={{headerShown: false}} name="Drawer" component={Drawer} />
                <Stack.Screen name="Carnaval" component={AcoesPesquisa} />
                <Stack.Screen name="Nova pesquisa" component={NovaPesquisa} />
                <Stack.Screen name="Modificar pesquisa" component={ModificarPesquisa} />
                <Stack.Screen options={{headerShown: false}} name="Coleta" component={Coleta} />
                <Stack.Screen name="Relatório" component={Relatorio} />
                <Stack.Screen name="Recuperação de senha" component={RecuperarSenha} />
                <Stack.Screen options={{headerShown: false}} name="Agradecimento" component={AgradecimentoParticipacao} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App