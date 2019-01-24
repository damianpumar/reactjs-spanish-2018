import React, { Component, Fragment } from 'react';

class App extends Component {
	ejecutarEvento(e) {
		alert(e.type);
	}
	render() {
		return (
			<Fragment>
				<button onClick={this.ejecutarEvento.bind(this)}>Evento Click</button>
				<br />

				<input placeholder="Ingrese una letra" type="text" onChange={(e) => this.ejecutarEvento(e)} />
			</Fragment>
		);
	}
}

export default App;
