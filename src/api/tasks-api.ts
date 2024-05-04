import {instance} from './todolist-api';

export const tasksAPI = {
    getTasks(todoId: string) {
        return instance.get(`/todo-lists/${todoId}/tasks`)
    },
    createTasks(todoId: string, title: string) {
        return instance.post(`/todo-lists/${todoId}/tasks`, {title})
    },
    updateTasks(todoId: string, taskId: string, title: string) {
        return instance.put(`/todo-lists/${todoId}/tasks/${taskId}`, {title})
    },
    deleteTasks(todoId: string, taskId: string) {
        return instance.delete(`/todo-lists/${todoId}/tasks/${taskId}`)
    }
}