import React, { useState } from "react";

const Home = () => {
	const [task, setTask] = useState("")
	const [array, setArray] = useState([])
	const addTask = () => {
		setArray(prev => [...prev, task])
		console.log(array);
	}
	return (
		<div className="text-center">
			<h1>Valeria ToDo List</h1>
			<input
				type="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<div>
				<button onClick={() => addTask()} >Agregar Task</button>
			</div>


			{
				array.map((tarea) => {
					return (
						<div>
							<ul className="list-group">
								<li class="list-group-item">{tarea}</li>
							</ul>
						</div>
					)
				})
			}


		</div>
	);
};

export default Home;