import { useState } from 'react';
import * as classes from './Counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	const decrement = () => {
		setCount((prev) => prev - 1);
	};

	const reset = () => {
		setCount(0);
	};

	return (
		<div>
			<h1 className={classes.title}>{count}</h1>

			<button onClick={decrement}>-</button>
			<button onClick={reset} className={classes.button}>
				0
			</button>
			<button onClick={increment}>+</button>
		</div>
	);
};

export default Counter;
