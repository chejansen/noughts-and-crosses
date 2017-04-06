import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../header';

export default () =>
  <div className='page'>
    <Header title='Page'/>
    <Link to='/'>
      <button>Go to home</button>
    </Link>
  </div>
