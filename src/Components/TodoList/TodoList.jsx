import { useDispatch, useSelector } from 'react-redux';
import './TodoList.css';
import Task from './Task/Task';
import { ChangeTaskText, addTask, deleteAll} from '../../Redux/TodoListReducer';

const TodoList = () => {

    const tasks = useSelector((state) => state.tasks);
    const taskText = useSelector((state) => state.taskText);

    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        dispatch(ChangeTaskText(e.target.value));
    }

    const onClickHandler = () => {
        dispatch(addTask());
    }

    const onDeleteAllHandler = () => {
        dispatch(deleteAll());
    }

    return (
        <div className="TodoList">
            <div className="inputPanel">
                <input type="text" onChange={(e) => onChangeHandler(e)} value={taskText}/>
                <button onClick={onClickHandler}>Add Task</button>
                <button onClick={onDeleteAllHandler}>Delete All Tasks</button>
            </div>
            <div>
                {
                    tasks.map(task => <Task task={task} key={task.id}/>)
                }
            </div>
        </div>
    );
}

export default TodoList;