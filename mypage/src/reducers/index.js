import { combineReducers } from 'redux'
import {
    CHANGE_NAME, CHANGE_STATUS, INITIALIZE_FORM,
    REQUEST_DATA, RECEIVE_DATA_SUCCESS, RECEIVE_DATA_FAILED
} from '../actions';

const initialState = {
    form: {
        name: '',
        status: '',
        ustatus: ''
    },
    users: {
        isFetching: false,
        users: []
    }
}

const formReducer = (state = initialState.form, action) => {
    switch(action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.name
            }
        case CHANGE_STATUS: 
            return {
                ...state,
                status: action.status
            }
        case INITIALIZE_FORM:
            return initialState.form
        default:
            return state
    }
}

const usersReducer = (state = initialState.users, action) => {
    switch(action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: action.users
            }
        case RECEIVE_DATA_FAILED:
            return {
                ...state,
                isFetching: false
            }
        default: 
            return state;
    }
}

const rootReducer = combineReducers({
    form: formReducer,
    users: usersReducer
})

export default rootReducer;