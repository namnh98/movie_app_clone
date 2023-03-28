import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import system from './system';
import setting from './setting';
import loading from './loading';
import movieReducer from './movie';

const systemPersistConfig = {
  key: 'system',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};

const masterDataPersistConfig = {
  key: 'masterData',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0
};

const settingPersistConfig = {
  key: 'setting',
  storage: AsyncStorage,
  whitelist: ['lang'],
  version: 1.0
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage
};

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['user'],
  version: 1.0
};

const employeePersistConfig = {
  key: 'employee',
  storage: AsyncStorage,
  whitelist: ['employee'],
  version: 1.0
};

export default combineReducers({
  system: persistReducer(systemPersistConfig, system),
  loading,
  setting: persistReducer(settingPersistConfig, setting),
  movieReducer
});
