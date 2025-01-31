import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import { TaskItem } from './components'
import './App.scss'

function App() {
	const mounted = useRef(false)

	useEffect(() => {
		if (!mounted.current) {
			console.log('Component was mounted')
			mounted.current = true
		} else {
			console.log('Component was updated')
		}
	})

	const [task, setTask] = useState([])

	useEffect(() => {
		fetchTasks()
	}, [])

	const fetchTasks = async () => {
		try {
			const { data } = await axios.get(
				'https://task-manager-api-cvfg.onrender.com/tasks'
			)
			setTask(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			{task.map((task) => (
				<TaskItem key={task.id} task={task} />
			))}
			<button onClick={fetchTasks}>Clean tasks</button>
		</>
	)
}

export default App
