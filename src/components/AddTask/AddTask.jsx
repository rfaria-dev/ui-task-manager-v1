import { useState } from 'react';
import { CustomInput } from '../CustomInput/CustomInput';
import { FaPlus } from 'react-icons/fa';

import './AddTask.scss';
import { CustomButton } from '../CustomButton';

const AddTask = () => {
    const [task, setTask] = useState('');

    const onChange = (e) => {
        setTask(e.target.value);
    };

    return (
        <div className='add-task-container'>
            <CustomInput
                label='Adicionar tarefa...'
                value={task}
                onChange={onChange}
            />
            <CustomButton>
                <FaPlus size={14} color='#fff' />
            </CustomButton>
        </div>
    );
};

export { AddTask };
