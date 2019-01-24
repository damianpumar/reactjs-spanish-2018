import React, { Component, Fragment } from 'react';

class ComponenteUnMounting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true
		};
	}

	componentWillUnmount() {
		console.log('ComponenteUnMounting - componentWillUnmount');
	}

	render() {
		return (
			<Fragment>
				<h1>Componente Unmounting</h1>
			</Fragment>
		);
	}
}

export default ComponenteUnMounting;
