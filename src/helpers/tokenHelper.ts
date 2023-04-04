import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppAuthConfig } from 'configs/auth.config';
import { KEY_STORAGE } from 'constants/string';
import { refresh } from 'react-native-app-auth';

export const setToken = async token => {
  await AsyncStorage.setItem(KEY_STORAGE.ACCESS_TOKEN, JSON.stringify(token));
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem(KEY_STORAGE.ACCESS_TOKEN);
  return JSON.parse(token);
};

export const setIdToken = async idToken => {
  await AsyncStorage.setItem(KEY_STORAGE.ID_TOKEN, JSON.stringify(idToken));
};

export const getIdToken = async () => {
  const idToken = await AsyncStorage.getItem(KEY_STORAGE.ID_TOKEN);
  return JSON.parse(idToken);
};

export const setRefreshToken = async token => {
  await AsyncStorage.setItem(KEY_STORAGE.REFRESH_TOKEN, JSON.stringify(token));
};

export const getRefreshToken = async () => {
  const token = await AsyncStorage.getItem(KEY_STORAGE.REFRESH_TOKEN);
  return JSON.parse(token);
};

export const setTokenExpireTime = async date => {
  await AsyncStorage.setItem(KEY_STORAGE.ACCESS_TOKEN_EXPIRED_TIME, JSON.stringify(date));
};

export const getTokenExpireTime = async () => {
  const date = await AsyncStorage.getItem(KEY_STORAGE.ACCESS_TOKEN_EXPIRED_TIME);
  return JSON.parse(date);
};

export const callRefreshToken = async () => {
  const refreshToken = await getRefreshToken();
  const response = await refresh(AppAuthConfig, {
    refreshToken
  });
  setToken(response?.accessToken);
  setRefreshToken(response?.refreshToken);
  setTokenExpireTime(response?.accessTokenExpirationDate);
  setIdToken(response?.idToken);
  return response?.accessToken;
};
