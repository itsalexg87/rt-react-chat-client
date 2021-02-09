import React from 'react';

// dependencies
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

const App = () => (
	<BrowserRouter>
		<Route path='/' exact component={Join} />
		<Route path='/chat' component={Chat} />
	</BrowserRouter>
);

export default App;
