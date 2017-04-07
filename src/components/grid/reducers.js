import initialValues from './initialValues';
import r from 'ramda';

const reducers = (state = initialValues, action) =>
action.type === 'SET_SQUARE' &&
{
  ...state,
  grid: r.update(action.index, state.currentPlayer, state.grid),
  currentPlayer: state.currentPlayer === 1 ? 2 : 1
} ||

state

export default reducers