import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import gridReducer from '../components/grid/reducers';

export default combineReducers({
    routing: routerReducer,
    grid: gridReducer
});
