/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';

import {createAppContainer, createStackNavigator} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

type Props = {};

const AppNavigator = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;

