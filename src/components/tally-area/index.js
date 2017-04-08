import React from 'react';
import { connect } from 'react-redux'

const TallyArea = ({ comboMap }) => (
  <div className='tally'>
  <h2>Tally</h2>
    Noughts: {comboMap.tally[1]}<br/>
    Crosses: {comboMap.tally[2]}
  </div>
);

const mapStateToProps = ({ grid }) => grid

export default connect(mapStateToProps)(TallyArea)
