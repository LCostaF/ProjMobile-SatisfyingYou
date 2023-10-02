/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import {name as appName} from './app.json';
import NovaConta from './src/screens/NovaConta';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import RecuperarSenha from './src/screens/RecuperarSenha';
import Coleta from './src/screens/Coleta';

AppRegistry.registerComponent(appName, () => App);
