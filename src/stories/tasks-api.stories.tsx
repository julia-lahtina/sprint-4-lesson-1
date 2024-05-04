import {useEffect, useState} from 'react';
import {tasksAPI} from '../api/tasks-api';
import {log} from 'node:util';


export default {
    title: 'Tasks-API',
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'cbb2c163-1c5e-410f-b6ce-1b6fcb3685c5';
        tasksAPI.getTasks(todoId)
            .then(res => setState(res))
    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const todoId = 'cbb2c163-1c5e-410f-b6ce-1b6fcb3685c5';
    const title = 'Learn hard React'
    useEffect(() => {
        tasksAPI.createTasks(todoId, title)
            .then(res => setState(res))
    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const todoId = 'cbb2c163-1c5e-410f-b6ce-1b6fcb3685c5';
    const taskId = '9ec3a964-45ee-4ab9-ae34-971cf5f2c686';
    useEffect(() => {
        tasksAPI.deleteTasks(todoId, taskId)
            .then(res => setState(res))
    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const todoId = 'cbb2c163-1c5e-410f-b6ce-1b6fcb3685c5';
    const taskId = '55c3ecaa-3f6e-4346-af96-bdc149db4ecd';
    const title = 'watch a film'
    useEffect(() => {
        tasksAPI.updateTasks(todoId, taskId, title)
            .then(res => setState(res))
    }, []);
    return <div>{JSON.stringify(state)}</div>
}