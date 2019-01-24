import React, { Component, Fragment } from 'react';
import List from './List';

class App extends Component {
	render() {
		return (
			<Fragment>
				<h1>{'Lists & keys'}</h1>
				<List />
			</Fragment>
		);
	}
}

export default App;
