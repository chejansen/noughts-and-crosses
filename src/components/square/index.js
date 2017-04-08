import React from 'react';
import r from 'ramda';

const filledSquare = v =>
  <div className={ v === 1 ? 'nought' : 'cross'}/>

const calculateClassName = (comboMap, i) => [
  'square',
  comboMap.eliminated.length === 8 && 'grey',
  comboMap.winner && r.indexOf(i, comboMap.winningCombo) != -1 && 'green'
]

const canClick = ({ eliminated, winner }, v) => {
  if (eliminated.length === 8)
    return false;
  else if (winner)
    return false;
  else if (v)
    return false;
  return true;
}

const Square = (v, i, setSquare, comboMap) => {
  return <div
    onClick={() => canClick(comboMap, v) && setSquare(i)}
    key={i}
    className={r.join(' ', calculateClassName(comboMap, i))}
  >
    { v && filledSquare(v)}
  </div>
}

export default Square
