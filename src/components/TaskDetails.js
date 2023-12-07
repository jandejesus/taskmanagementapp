import React from 'react';
import './TaskDetails.css'

const TaskDetails = ({task}) => {
    return (
        <div className="task-details">
            <h2>{task.title}</h2>
            <p>Task ID: {task.id}</p>
            <p>Status: {task.completed ? 'Completed': 'Incomplete'}</p>
        </div>
    )
}
export default TaskDetails;