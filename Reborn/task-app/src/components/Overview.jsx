import React from "react";

const Overview = (props) => {

    const { tasks, onDeleteTask } = props;
    
    const onDelete = (id) => {
        const filtered = tasks.filter((task) => task.id != id);
        onDeleteTask(filtered);
    }
    
    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.id}>{task.id} : {task.text} <button onClick={() => onDelete(task.id)}>Delete</button></li>
            })}
        </ul>
    );
};

export default Overview;