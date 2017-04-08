import initialValues from './initialValues';
import r from 'ramda';

const combos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]
]

const combosByNumber = {
  0: [0, 3, 5],
  1: [0, 6],
  2: [0, 4, 7],
  3: [1, 5],
  4: [1, 3, 4, 6],
  5: [1, 7],
  6: [2, 4, 5],
  7: [2, 6],
  8: [2, 3, 7]
}

const calculateOtherPlayer = cp => cp === 1 ? 2 : 1

const addPossibilityToPlayer = (acc, cp, v) => {
  //Work out how many noughts or crosses this possibility has
  const tally = acc[cp][v] ? ++acc[cp][v] : 1

  return (
    {
      ...acc,
      //Add tally to possibility under currentPlayer
      [cp]: {
        ...acc[cp],
        [v]: tally
      },
      //Do we have a winner?
      winner: tally === 3 ? cp : acc.winner,
      winningCombo: tally === 3 ? combos[v] : acc.winningCombo,
      tally: tally === 3 ? { ...acc.tally, [cp]: ++acc.tally[cp] } : acc.tally
    })
}

const removePossibilityFromPlayers = (acc, cp, op, v) => ({
  ...acc,
  //Remove possibility from both players, and add to eliminated
  [cp]: r.dissoc(v, acc[cp]),
  [op]: r.dissoc(v, acc[op]),
  eliminated: acc.eliminated.concat(v)
})

const calculateComboMap = ({ index }, { currentPlayer, comboMap }) => {

  //Get the possibilities for this index
  const possibilities = combosByNumber[index];
  const otherPlayer = calculateOtherPlayer(currentPlayer);

  return r.reduce((acc, v) => {

    //If the other player already has covered this possibility, remove from both
    if (acc[otherPlayer][v])
      return removePossibilityFromPlayers(acc, currentPlayer, otherPlayer, v)

    //Otherwise, add to this players possibilities
    return addPossibilityToPlayer(acc, currentPlayer, v)
  }, comboMap, possibilities)

}


const reducers = (state = initialValues, action) =>
action.type === 'SET_SQUARE' &&
{
  ...state,
  grid: r.update(action.index, state.currentPlayer, state.grid),
  currentPlayer: calculateOtherPlayer(state.currentPlayer),
  comboMap: calculateComboMap(action, state)
} ||

action.type === 'RESET' &&
initialValues ||

state

export default reducers