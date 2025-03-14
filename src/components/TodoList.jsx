import TodoItem from './TodoItem'

function ToDoList({ tasks, toggleTask, deleteTask}) {
    return (
        <ul>
            {tasks.map(task => (
                <ToDoItem 
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}

export default ToDoList;