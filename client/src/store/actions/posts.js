import * as api from '../../api'
import * as actions from '../../constans/actionTypes'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: actions.FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: actions.CREATE_POST, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: actions.UPDATE_POST, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = id => async dispatch => {
    try {
        await api.deletePost(id)

        dispatch({ type: actions.DELETE_POST, payload: id })
    } catch (error) {
        console.log(error)
    }
}

export const likePost = id => async dispatch => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: actions.LIKE_POST, payload: data })
    } catch (error) {
        console.log(error)
    }
}