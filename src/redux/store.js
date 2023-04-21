import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const composedEnhancers = composeWithDevTools();

const store = createStore(reducers, composedEnhancers);

export default store;
