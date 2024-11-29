import {createStore} from 'redux';
import TodoListReducer from './TodoListReducer';


let store = createStore(TodoListReducer);


export default store;