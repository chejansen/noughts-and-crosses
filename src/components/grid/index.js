import React from 'react';
import r from 'ramda';
import { connect } from 'react-redux'

const mapIndexed = r.addIndex(r.map);

const filledSquare = v =>
  <div className = { v === 1 ? 'nought' : 'cross'}/>

const Square = ( v, i, setSquare) => {
  return <div
    onClick = {() => setSquare(i)}
    key = {i}
    className = 'square'
  >
    { v && filledSquare(v)}
  </div>
}


const Grid = ({ grid, setSquare }) => {
  return (
    <div className = 'container'>
      {mapIndexed((v, i) => Square(v, i, setSquare), grid)}
    </div>
  )
}

const mapStateToProps = ({ grid }) => grid

const setSquare = index =>
  ({
    type: 'SET_SQUARE',
    value: 1,
    index: index
  })

const mapDispatchToProps = dispatch => ({
    setSquare: index => {dispatch(setSquare(index))}
  })

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
