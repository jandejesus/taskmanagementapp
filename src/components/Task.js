import React from 'react';

const Task = ({task, onclick}) => {
    return (
        <div className='task' onClick={onclick}>
            <p>{task.title}</p>
        </div>
    );
};

export default Task;