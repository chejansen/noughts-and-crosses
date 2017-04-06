import React from 'react';
import { Link } from 'react-router';
import Header from '../header';
import Counter from '../interactive';

const Home = () => (
	<div className='page'>
		<Header title='Hi Lounge Buddy' />
		<Link to='/page'>
			<button>Go to page</button>
		</Link>
		<Counter />
	</div>
);

export default Home;
