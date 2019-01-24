import React, { Component, Fragment } from 'react';

class ComponenteUpdating extends Component {
	constructor(props) {
		super(props);
		this.state = {
			word: ''
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.word !== nextState.word;
	}

	componentDidUpdate(prevState) {
		if (this.state.word !== prevState.word) {
			console.log('ComponenteUpdating - componentDidUpdate');
		}
	}

	handleOnClickUpdate = () => {
		this.setState((prevState) => {
			return { word: prevState.word + 'a' };
		});
	};

	handleOnClickNoUpdate = () => {
		this.setState((previousState) => {
			return { word: previousState.word };
		});
	};

	render() {
		return (
			<Fragment>
				{console.log('ComponenteUpdating - render')}
				<h1>Componente Updating</h1>
				<table>
					<tbody>
						<tr>
							<td>
								<button onClick={this.handleOnClickUpdate}>Update</button>
							</td>
							<td>
								<button onClick={this.handleOnClickNoUpdate}>NO Update</button>
							</td>
							<td>
								<h2>State:</h2>
							</td>
							<td>{this.state.word}</td>
						</tr>
					</tbody>
				</table>
			</Fragment>
		);
	}
}

export default ComponenteUpdating;
