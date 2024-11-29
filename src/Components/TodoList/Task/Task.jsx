import { useDispatch } from 'react-redux';
import './Task.css';
import { changeTaskState, deleteTask } from '../../../Redux/TodoListReducer';

const Task = ({task}) => {

    let dispatch = useDispatch();

    const onDeleteTaskHandler = () => {
        dispatch(deleteTask(task.id));
    }

    const onChangeTaskHandler = () => {
        dispatch(changeTaskState(task.id));
    }

    return(
        <div className={task.completed ? 'TaskCompleted' : 'Task'} onClick={onChangeTaskHandler}>
            <input type="checkbox" defaultChecked={task.completed}/>
            <p>{task.text}</p>
            <button onClick={onDeleteTaskHandler}>Remove</button>
        </div>
    );
}

export default Task;