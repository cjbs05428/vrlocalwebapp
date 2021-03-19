import { CREATE, FETCH_ALL, UPDATE, DELETE} from '../constants/actionTypes';

import * as api from '../api';

//Action creators

export const getUsers = () => async (dispatch) => {
    
    try {
        const {data} = await api.fetchUsers();

        dispatch({type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);    
    }
    
}

export const createUser = (post) => async (dispatch) => {
    try {
        const {data} = await api.createUser(post);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = (id, user) => async (dispatch) => {
    try {
        const {data} = await api.updateUser(id, user);
        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);
        dispatch({type: DELETE, payload: id   });
    } catch (error) {
        console.log(error);
    }
}