import { createStore, combineReducers } from 'redux';
import gameReducer from './reducers/gameReducer';

const rootReducer = combineReducers({
  gameReducer: gameReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;