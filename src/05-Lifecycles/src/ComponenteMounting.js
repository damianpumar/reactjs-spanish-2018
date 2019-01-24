import React, { Component, Fragment } from 'react';

class ComponenteMounting extends Component {
	constructor(props) {
		super(props);
		console.log('ComponenteMounting - constructor');
		this.state = {
			show: true
		};
	}

	componentDidMount() {
		console.log('ComponenteMounting - (componentDidMount) El componente está disponible en el DOM');
	}

	render() {
		return (
			<Fragment>
				{console.log('ComponenteMounting - render')}
				<h1>Componente Mounting</h1>
			</Fragment>
		);
	}
}

export default ComponenteMounting;
