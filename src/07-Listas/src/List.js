import React, { Component, Fragment } from 'react';
import ListItem from './ListItem';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			datos: [
				{ id: 1, nombre: 'Julian', edad: 20 },
				{ id: 2, nombre: 'Cristian', edad: 25 },
				{ id: 3, nombre: 'Francisco', edad: 30 },
				{ id: 4, nombre: 'Matías', edad: 35 }
			]
		};
	}
	render() {
		return (
			<Fragment>
				<ul>{this.state.datos.map((dato) => <ListItem key={dato.id} data={dato} />)}</ul>
			</Fragment>
		);
	}
}

export default List;
