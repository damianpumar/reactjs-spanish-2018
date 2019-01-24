import React, { Component, Fragment } from 'react';
import HolaMundo from './HolaMundo';

class App extends Component {
	render() {
		return (
			<Fragment>
				<HolaMundo name="Mundo" />
				<HolaMundo name="Universo" />
			</Fragment>
		);
	}
}

export default App;
