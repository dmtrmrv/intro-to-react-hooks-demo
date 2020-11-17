import React, { useState, useEffect } from 'react'

const App = (props) => {
	const [count, setCount] = useState(0);

	// Similar to componentDidMount()
	useEffect(() => console.log('I just mounted!'), []);

	// Similar to componentDidUpdate()
	useEffect(() => console.log('The counter was updated'));

	return (
		<div>
			<h1>{`Counter: ${count}`}</h1>
			<p>Click the button below to increment the counter</p>
			<button onClick={() => setCount(count + 1)}>Click Me</button>
		</div>
	)
}

export default App;
