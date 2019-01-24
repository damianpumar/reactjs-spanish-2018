import React, { Component } from 'react';

class Card extends Component {
	render() {
		const cardStyle = {
			border: ' 1px solid blue',
			width: '300px'
		};

		return (
			<div style={cardStyle}>
				<h3>{this.props.Name}</h3>
				<h3>{this.props.Contacto}</h3>
			</div>
		);
	}
}

export default Card;
