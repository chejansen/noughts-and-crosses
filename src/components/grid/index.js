import React from 'react';
import r from 'ramda';
import { connect } from 'react-redux'
import Square from '../square';

const mapIndexed = r.addIndex(r.map);

const Grid = ({ grid, setSquare, comboMap,  }) => {
  return (
      <div className='container'>
        {mapIndexed((v, i) => Square(v, i, setSquare, comboMap), grid)}
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
  setSquare: index => {
    dispatch(setSquare(index))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
