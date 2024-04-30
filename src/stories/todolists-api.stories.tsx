import React, {useEffect, useState} from 'react'
import {todolistAPI} from '../api/todolist-api';

export default {
    title: 'API',
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodoLists()
            .then(res => {
                setState(res)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'REACT'
        todolistAPI.createTodoLists(title)
            .then(res => {
                setState(res)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'c654274a-df40-4c9a-bc72-cbe01fc630f7';
        todolistAPI.deleteTodoLists(todoId)
            .then(res => {
                setState(res)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'cbb2c163-1c5e-410f-b6ce-1b6fcb3685c5';
        const title = 'REDUX'
        todolistAPI.updateTodoLists(todoId, title)
            .then(res => {
                setState(res)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}