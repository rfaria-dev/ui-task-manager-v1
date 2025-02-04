import { useState } from 'react'
import { CustomInput } from '../CustomInput/CustomInput'

import './AddTask.scss'

const AddTask = () => {
	const [task, setTask] = useState('')

	const onChange = (e) => {
		setTask(e.target.value)
	}

	return (
		<div className="add-task-container">
			<CustomInput
				label="Adicionar tarefa..."
				value={task}
				onChange={onChange}
			/>
		</div>
	)
}

export { AddTask }
