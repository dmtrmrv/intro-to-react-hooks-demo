import React from 'react'

const Counter = (props) => {
	const { count, handleClick } = props;

	return (
		<div>
			<h1>{`Counter: ${count}`}</h1>
			<p>Click the button below to increment the counter</p>
			<button onClick={handleClick}>Click Me</button>
		</div>
	)
}

export default Counter;
