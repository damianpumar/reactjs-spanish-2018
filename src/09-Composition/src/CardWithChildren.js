import React, { Component } from 'react';

class Card extends Component {
	render() {
		const cardStyle = {
			border: ' 1px solid red',
			width: '300px'
		};

		return <div style={cardStyle}>{this.props.children}</div>;
	}
}

export default Card;
