import React, { Component, Fragment } from 'react';
import PantallaSecundaria from './PantallaSecundaria';

class PantallaPrincipal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			secondarys: [
				{ id: 1, name: 'Componente 1' },
				{ id: 2, name: 'Componente 2' },
				{ id: 3, name: 'Componente 3' },
				{ id: 4, name: 'Componente 4' }
			],
			show: true
		};
	}

	handleOnClick = () => {
		this.setState((prevState) => {
			return { show: !prevState.show };
		});
	};

	render() {
		const styles = {
			margin: '10px',
			padding: '10px',
			borderStyle: 'solid',
			width: '200px'
		};

		return (
			<Fragment>
				<div style={styles}>
					<h2>Componente Principal</h2>
					<button onClick={this.handleOnClick}>Mostrar / Ocultar</button>
				</div>
				{this.state.secondarys.map((secondary) => (
					<PantallaSecundaria
						key={secondary.id}
						data={secondary}
						show={this.state.show}
						handleOnClickSecundario={this.handleOnClick}
					/>
				))}
			</Fragment>
		);
	}
}

export default PantallaPrincipal;
