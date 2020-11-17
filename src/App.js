import React from 'react';
import Counter from './Counter';

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
			<Counter count={this.state.count} handleClick={this.handleClick} />
		);
	}
}

export default App;