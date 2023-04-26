<<<<<<< HEAD
import { createStore } from 'redux'
import rootReducers from './reducers'

const store = createStore(rootReducers)

export default store
=======
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const composedEnhancers = composeWithDevTools();

const store = createStore(reducers, composedEnhancers);

export default store;
>>>>>>> c8e67687e9d1ef82d11d01612d7d09260ebaef63
