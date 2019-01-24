import React, { Component, Fragment } from 'react';

class ComponenteError extends Component {
	constructor(props) {
		super(props);
		this.state = {
			releaseBugs: false
		};
	}

	handleClick = () => {
		this.setState(() => {
			return { releaseBugs: true };
		});
	};

	render() {
		if (this.state.releaseBugs) {
			throw new Error('I crashed!');
		}
		return (
			<Fragment>
				<h1>Componente Error</h1>
				<button className="btn" onClick={this.handleClick}>
					BREAKS
				</button>
			</Fragment>
		);
	}
}

export default ComponenteError;
