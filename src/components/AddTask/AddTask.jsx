import { useState } from 'react';
import { CustomInput } from '../CustomInput/CustomInput';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import './AddTask.scss';
import { CustomButton } from '../CustomButton';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {
    const [task, setTask] = useState('');

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const notifyAnError = () =>
        toast.error('Error: The task needs a description to be added.', {
            position: 'bottom-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'dark',
            transition: Bounce,
        });

    const notifyOnSuccess = () =>
        toast.success('Sucess', {
            position: 'bottom-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'dark',
            transition: Bounce,
        });

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return notifyAnError();
            }

            await axios.post(
                'https://task-manager-api-cvfg.onrender.com/tasks',
                {
                    description: task,
                    isCompleted: false,
                }
            );
            return notifyOnSuccess();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='add-task-container'>
            <CustomInput
                label='Adicionar tarefa...'
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color='#fff' />
            </CustomButton>
            <ToastContainer />
        </div>
    );
};

export { AddTask };
