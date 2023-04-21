import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import { SCREEN_NAMES } from './../constants/screenNames';
import Home from './../screens/home/index';
import Detail from './../screens/detail/index';
import splash from '../screens/splash';
import session from '../screens/sessions';
import login from '../screens/login';
import Authencation from '../screens/authencation';
import overview from '../screens/OverView';
import select_seat from '../screens/select_seats';
import pay from '../screens/pay';
import ticket from '../screens/ticket';
import profile from '../screens/profile';

const MainStack = createNativeStackNavigator();

const defaultOptions = {
  headerShown: false
};

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ ...defaultOptions }}>
        <MainStack.Screen name={SCREEN_NAMES.SPLASH} component={splash} />
        <MainStack.Screen name={SCREEN_NAMES.HOME} component={Home} />
        <MainStack.Screen name={SCREEN_NAMES.DETAIL} component={Detail} />
        <MainStack.Screen name={SCREEN_NAMES.SESSION} component={session} />
        <MainStack.Screen name={SCREEN_NAMES.LOGIN} component={login} />
        <MainStack.Screen name={SCREEN_NAMES.AUTHENCATION} component={Authencation} />
        <MainStack.Screen name={SCREEN_NAMES.SELECT_SEAT} component={select_seat} />
        <MainStack.Screen name={SCREEN_NAMES.OVERVIEW} component={overview} />
        <MainStack.Screen name={SCREEN_NAMES.PAY} component={pay} />
        <MainStack.Screen name={SCREEN_NAMES.PROFILE} component={profile} />
        <MainStack.Screen name={SCREEN_NAMES.TICKET} component={ticket} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
