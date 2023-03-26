import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@screens/home';
import Detail from '@screens/detail';
import { MainStackParams, SCREEN_NAMES } from './types';

const MainStack = createNativeStackNavigator<MainStackParams>();

const defaultOptions = {
  headerShown: false
};

const MainRoutes = () => {
  return (
    <MainStack.Navigator screenOptions={{ ...defaultOptions }}>
      <MainStack.Screen name={SCREEN_NAMES.HOME} component={Home} />
      <MainStack.Screen name={SCREEN_NAMES.DETAIL} component={Detail} />
    </MainStack.Navigator>
  );
};

export default MainRoutes;
