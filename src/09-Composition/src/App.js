import React, { Component, Fragment } from 'react';
import CardWithChildren from './CardWithChildren';
import CardWithProps from './CardWithProps';

class App extends Component {
	render() {
		return (
			<Fragment>
				<h1>Tarjeta usando children</h1>
				<CardWithChildren>
					<h3>Matias</h3>
					<h3>Contacto: matias.lifschitz@neoris.com</h3>
				</CardWithChildren>
				<h1>Tarjeta usando props</h1>
				<CardWithProps Name={'Francisco'} Contacto={'francisco.suarez@neoris.com'} />
			</Fragment>
		);
	}
}

export default App;
