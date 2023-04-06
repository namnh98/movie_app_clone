import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREEN_NAME } from '../constants/screenNames';
import Home from '../screens/home';
import Detail from '../screens/detail';
import SelectSeat from '../screens/SelectSeat/SelectSeat';

const MainStack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name={SCREEN_NAME.HOME} component={Home} />
        <MainStack.Screen name={SCREEN_NAME.DETAIL} component={Detail} />
        <MainStack.Screen name={SCREEN_NAME.SELECT_SEATS} component={SelectSeat} />
      </MainStack.Navigator>
    </NavigationContainer>
    
  );
};

export default MainRoutes;
