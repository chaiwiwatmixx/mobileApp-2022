/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Greeting from './screens/Greeting';
import CounterState from './screens/CounterState';
import {name as appName} from './app.json';
import ColumnItems from './screens/ColumnItems';
import RowsItems from './screens/RowsItems';
import AlertComponent from './screens/AlertComponent';
import TextInputDemo from './screens/TextInputDemo';
import SwitchDemo from './screens/SwitchDemo';
import ImageDemo from './screens/ImageDemo';
import App from './App';

AppRegistry.registerComponent(appName, () => SwitchDemo);
