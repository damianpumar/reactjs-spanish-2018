import React, { Component } from 'react';

class App extends Component {
	state = { isShowingText: true };

	showText = () => {
		this.setState((prevState) => ({
			isShowingText: !prevState.isShowingText
		}));
	};

	render() {
		return (
			<div>
				{this.state.isShowingText && <h1>Hello World!!!</h1>}
				<button name="show" onClick={this.showText}>
					Show Text
				</button>
			</div>
		);
	}
}

export default App;
