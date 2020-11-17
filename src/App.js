import React from 'react';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { count: 0 }
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			count: this.state.count + 1
		});
	}

	componentDidMount() {
		console.log('I just mounted!');
	}

	componentDidUpdate() {
		console.log('The counter was updated');
	}

	render() {
		return (
			<div>
				<h1>{`Counter: ${this.state.count}`}</h1>
				<p>Click the button below to increment the counter</p>
				<button onClick={this.handleClick}>Click Me</button>
			</div>
		);
	}
}

export default App;