import React from 'react';
import { connect } from 'react-redux'
import Header from '../header';
import Grid from '../grid';

const calculateCurrentPlayer = cp => cp === 1 ? 'o' : 'x'

const calculateHeading = ( currentPlayer, comboMap ) => {
  if ( comboMap.winner )
    return 'Winner!'
  else if ( comboMap.eliminated.length === 8 )
    return 'No more winning combinations'

  return `Current Player- ${calculateCurrentPlayer(currentPlayer)}`
}

const PlayArea = ({ reset, comboMap, currentPlayer }) =>
  (
    <div className='playArea'>
      <Header title= {calculateHeading(currentPlayer, comboMap)} />
      <Grid/>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )

const mapStateToProps = ({ grid }) => grid

const mapDispatchToProps = dispatch => ({
  reset: () => {
    dispatch({ type: 'RESET' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayArea)