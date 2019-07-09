/**
 * @format
 */

import React from "react"
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ApiProvider } from '@utils/ApiContext';

const Root = () => <ApiProvider><App /></ApiProvider>;

AppRegistry.registerComponent(appName, () => Root);
