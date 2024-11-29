const CHAHGE_TASK_TEXT = 'CHAHGE_TASK_TEXT';
const ADD_TASK = 'ADD_TASK';
const DELETE_ALL = 'DELETE_ALL';
const CHANGE_TASK_STATE = 'CHANGE_TASK_STATE';
const DELETE_TASK = 'DELETE_TASK';

let initialState = {
    tasks: [
        {id: 1, text: 'Complete daily workout', completed: true},
        {id: 2, text: 'Read two chapters of a book', completed: false},
        {id: 3, text: 'Update professional LinkedIn profile', completed: true},
        {id: 4, text: 'Plan healthy neals for the week', completed: false}
    ],
    taskText: '',
};


const TodoListReducer = (state = initialState, action, taskText) => {
    switch(action.type) {
        case CHAHGE_TASK_TEXT:
            return {
                ...state,
                taskText: action.payload,

            }
        case ADD_TASK:
            if (state.taskText == '') {
                return state;
            } else {
                return {
                    ...state,
                    tasks: [
                        ...state.tasks,
                        {
                            id: new Date(),
                            text: state.taskText,
                            completed: false,
                        }
                    ],
                    taskText: '',
                }
            }
        case DELETE_ALL:
            return {
                ...state,
                tasks: [],
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case CHANGE_TASK_STATE:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task)
            }
        default: return state;
    }
}

export const ChangeTaskText = (text) => {
    return {
        type: CHAHGE_TASK_TEXT,
        payload: text,
    }
}

export const addTask = () => {
    return {
        type: ADD_TASK,

    }
}

export const deleteAll = () => {
    return {
        type: DELETE_ALL,
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const changeTaskState = (id) => {
    return {
        type: CHANGE_TASK_STATE,
        payload: id,
    }
}

export default TodoListReducer;