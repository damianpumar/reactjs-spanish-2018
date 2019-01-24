import React, { Component, Fragment } from 'react';
import ComponenteMounting from './ComponenteMounting';
import ComponenteUpdating from './ComponenteUpdating';
import ComponenteUnmounting from './ComponenteUnmounting';
import ComponenteError from './ComponenteError';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true
		};
	}

	handleOnClickUnmount = () => {
		this.setState((prevState) => {
			return { show: !prevState.show };
		});
	};

	render() {
		const tdStyle = {
			paddingLeft: '50px',
			paddingRight: '50px',
			borderStyle: 'solid'
		};

		return (
			<Fragment>
				<table>
					<tbody>
						<tr>
							<td style={tdStyle}>
								<ComponenteMounting />
							</td>
							<td style={tdStyle}>
								<ComponenteUpdating />
							</td>
							<td style={tdStyle}>
								{this.state.show && <ComponenteUnmounting />}
								<button onClick={this.handleOnClickUnmount}>UNMOUNT</button>
							</td>
						</tr>
						<tr>
							<td style={tdStyle}>
								<ErrorBoundary>
									<ComponenteError />
								</ErrorBoundary>
							</td>
						</tr>
					</tbody>
				</table>
			</Fragment>
		);
	}
}

export default App;
