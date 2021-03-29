import boxReducer from './boxes';
import playerReducer from './players';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    boxes: boxReducer,
    player: playerReducer
});

export default rootReducers;