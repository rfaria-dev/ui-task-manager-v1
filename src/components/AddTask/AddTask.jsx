import { useState } from 'react';
import { CustomInput } from '../CustomInput/CustomInput';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import './AddTask.scss';
import { CustomButton } from '../CustomButton';
import { Bounce, toast } from 'react-toastify';

const AddTask = ({ fetchTasks }) => {
	const [task, setTask] = useState('');

	const onChange = (e) => {
		setTask(e.target.value);
	};
	const commonToastProps = {
		position: 'bottom-center',
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: 'dark',
		transition: Bounce,
	};

	const notifyAnError = () =>
		toast.error('Error: The task needs a description to be added.', {
			...commonToastProps,
		});

	const handleTaskAddition = async () => {
		try {
			if (task.length === 0) {
				return notifyAnError();
			}

			await toast.promise(
				async () => {
					await axios.post(
						'https://task-manager-api-cvfg.onrender.com/tasks',
						{
							description: task,
							isCompleted: false,
						}
					);
					await fetchTasks();
				},
				{
					pending: 'Adicionando tarefa...',
					success: 'Tarefa adicionada com sucesso!',
					error: 'Erro ao adicionar a tarefa!',
				},
				{
					...commonToastProps,
				}
			);

			setTask('');
		} catch (error) {
			console.error(error);
			notifyAnError();
		}
	};

	return (
		<div className="add-task-container">
			<CustomInput
				label="Adicionar tarefa..."
				value={task}
				onChange={onChange}
				onEnterPress={handleTaskAddition}
			/>
			<CustomButton
				onClick={() => {
					handleTaskAddition();
				}}
			>
				<FaPlus size={14} color="#fff" />
			</CustomButton>
		</div>
	);
};

export { AddTask };
