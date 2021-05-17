import { Dispatch } from 'redux';
import { TodoActionTypes, TodoAction } from './../../types/todo'
import axios from 'axios'

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispath: Dispatch<TodoAction>) => {
        try {
            dispath({ type: TodoActionTypes.FETCH_TODOS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: { _page: page, _limit: limit }
            })
            dispath({
                type: TodoActionTypes.FETCH_TODOS_SUCCESS,
                payload: response.data
            })
        } catch (e) {
            dispath({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Прозошла ошибка при загрузке списка дел'
            })
        }
    }
}
export const setTodoPage = (page: number): TodoAction => {
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page
    }
}