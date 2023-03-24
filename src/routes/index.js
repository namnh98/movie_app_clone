import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import { SCREEN_NAMES } from './../constants/screenNames';
import Home from './../screens/home/index';
import Detail from './../screens/detail/index';

const MainStack = createNativeStackNavigator();

const defaultOptions = {
  headerShown: false
};

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ ...defaultOptions }}>
        <MainStack.Screen name={SCREEN_NAMES.HOME} component={Home} />
        <MainStack.Screen name={SCREEN_NAMES.DETAIL} component={Detail} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
