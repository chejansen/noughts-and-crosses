import React, { Component } from 'react';

const log = () =>
  console.log('Logging')

const Toggle = state =>
  <span onClick={() => log()}>Click to log</span>

export default Toggle