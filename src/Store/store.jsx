import { createStore } from 'redux';
import rootReducer from './Reducers/index'

export const store = createStore(rootReducer);
