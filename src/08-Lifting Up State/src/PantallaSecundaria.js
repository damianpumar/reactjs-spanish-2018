import React, { Component, Fragment } from 'react';

class PantallaSecundaria extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	handleOnClick = () => {
		this.props.handleOnClickSecundario();
	};

	render() {
		const data = this.props.data;
		const show = this.props.show;

		const styles = {
			margin: '10px',
			padding: '10px',
			borderStyle: 'solid',
			width: '200px'
		};

		return (
			<Fragment>
				{show && (
					<div style={styles}>
						<h3>{data.name}</h3>
						<button onClick={this.handleOnClick}>Cerrar</button>
					</div>
				)}
			</Fragment>
		);
	}
}

export default PantallaSecundaria;
