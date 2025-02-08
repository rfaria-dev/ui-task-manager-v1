import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

import './TaskItem.scss';

const TaskItem = ({ task, fetchTasks }) => {
	const API_URL = 'https://task-manager-api-cvfg.onrender.com/tasks/';
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

	const notifyAnError = () =>
		toast.error('Err: New Err in the task list', {
			toastId: 'fgrd',
			...toastCommonProps,
		});

	// const notifyOnSuccess = () =>
	// 	toast.success('Sucess: Task deleted', {
	// 		...toastCommonProps,
	// 	});

	const handleTaskDeletion = async () => {
		try {
			await toast.promise(
				(async () => {
					await axios.delete(`${API_URL}${task._id}`);
					await fetchTasks(); // Executado após a exclusão
				})(),
				{
					pending: 'Removendo a tarefa...',
					success: 'Tarefa removida com sucesso!',
					error: 'Erro ao remover a tarefa!',
				},
				{ ...toastCommonProps }
			);
		} catch (error) {
			notifyAnError();
			console.log(error);
		}
	};

	const handleTaskCompletionChange = async (e) => {
		try {
			await toast.promise(
				async () => {
					await axios.patch(`${API_URL}${task._id}`, {
						isCompleted: e.target.checked,
					});
					await fetchTasks();
				},
				{
					pending: 'Atualizando tarefa...',
					success: 'Tarefa atualizada com sucesso!',
					error: 'Erro ao adicionar a tarefa!',
				},
				{ ...toastCommonProps }
			);
		} catch (error) {
			notifyAnError();
			console.log(error);
		}
	};

	return (
		<div className="task-item-container">
			<div className="task-description">
				<label
					className={
						task.isCompleted
							? 'checkbox-container-completed'
							: 'checkbox-container'
					}
				>
					{task.description}
					<input
						type="checkbox"
						defaultChecked={task.isCompleted}
						onChange={(e) => handleTaskCompletionChange(e)}
					/>
					<span
						className={
							task.isCompleted
								? 'checkmark completed'
								: 'checkmark'
						}
					></span>
				</label>
			</div>

			<div className="delete">
				<AiFillDelete
					size={18}
					color="#F97474"
					onClick={handleTaskDeletion}
				/>
			</div>
		</div>
	);
};

export { TaskItem };
