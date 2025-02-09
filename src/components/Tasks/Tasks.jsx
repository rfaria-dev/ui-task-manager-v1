import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

import './Tasks.scss';
import { AddTask } from '../AddTask/AddTask';
import { TaskItem } from '../TaskItem/TaskItem';

const Tasks = () => {
	const [tasks, setTasks] = useState([]);

	const toastCommonProps = {
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: 'dark',
		transition: Bounce,
		position: 'bottom-center',
	};

	const fetchTasks = async () => {
		try {
			const { data } = await axios.get(
				'https://task-manager-api-cvfg.onrender.com/tasks'
			);

			setTasks(data);
		} catch {
			toast.error('Error fetching tasks :(', { ...toastCommonProps });
		}
	};
	const lastTasks = useMemo(() => {
		return tasks.filter((task) => task.isCompleted === false);
	}, [tasks]);

	const completedTasks = useMemo(() => {
		return tasks.filter((task) => task.isCompleted == true);
	}, [tasks]);

	useEffect(() => {
		fetchTasks();
	}, []);

	return (
		<div className="tasks-container">
			<h2>My Tasks</h2>

			<div className="last-tasks">
				<h3>Last Tasks</h3>
				<AddTask fetchTasks={fetchTasks} />
				<div className="tasks-list">
					{lastTasks.map((lastTask) => (
						<TaskItem
							key={lastTask._id}
							task={lastTask}
							fetchTasks={fetchTasks}
						/>
					))}
				</div>
			</div>

			<div className="completed-tasks">
				<h3>Completed Tasks</h3>
				<div className="tasks-list">
					{completedTasks.map((completedTask) => (
						<TaskItem
							fetchTasks={fetchTasks}
							key={completedTask._id}
							task={completedTask}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export { Tasks };
