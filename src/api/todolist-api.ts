import axios from 'axios';


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true
})

export const todolistAPI = {
    getTodoLists() {
        return instance.get<TodolistsType[]>('todo-lists')
    },
    createTodoLists(title: string) {
        return instance.post<ResponseType<{item: TodolistsType}>>('todo-lists', {title})
    },
    updateTodoLists(todoId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todoId}`, {title})
    },
    deleteTodoLists(todoId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoId}`)
    }
}

type TodolistsType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<T = {}> = {
    resultCode: number
    fieldsErrors: string[]
    messages: string[],
    data: T
}