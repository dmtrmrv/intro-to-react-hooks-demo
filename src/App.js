import React, { useState } from 'react'

const App = (props) => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>{`Counter: ${count}`}</h1>
			<p>Click the button below to increment the counter</p>
			<button onClick={() => setCount(count + 1)}>Click Me</button>
		</div>
	)
}

export default App;
