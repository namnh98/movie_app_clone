import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import rootSaga from '@redux-app/sagas/rootSaga';
import rootReducer from '@redux-app/reducers/rootReducer';

const bindMiddleware = (middleware?: any) => applyMiddleware(...middleware);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0,
  stateReconciler: autoMergeLevel1
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();
  if (__DEV__) {
    const loggerMiddleware = createLogger({
      collapsed: (getState?: any, action?: any, logEntry?: any) => !logEntry.error
    });
    middlewares.push(loggerMiddleware);
  }
  middlewares.push(sagaMiddleware);
  const store: any = createStore(persistedReducer, bindMiddleware(middlewares));
  const persistor = persistStore(store);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return { store, persistor };
}

const storeConfig = configureStore();

export const store = storeConfig.store;
export const persistor = storeConfig.persistor;
export default storeConfig;