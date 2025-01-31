const TaskItem = ({ task }) => {
	return (
		<div id="todo">
			<h1>{task.description}</h1>
			<p>{task.isCompleted ? 'Completed' : 'Incompleted'}</p>
		</div>
	)
}

export { TaskItem }
