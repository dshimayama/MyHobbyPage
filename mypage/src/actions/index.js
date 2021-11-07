export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_USTATUS = 'CHANGE_USTATUS';
export const INITIALIZE_FORM = 'INITIALIZE_FORM';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS';
export const RECEIVE_DATA_FAILED = 'RECEIVE_DATA_FAILED';

export const changeName = (name) => ({
    type: CHANGE_NAME,
    name
})

export const changeStatus = (status) => ({
    type: CHANGE_STATUS,
    status
})

export const initializeForm = () => ({
    type: INITIALIZE_FORM
})

export const requestData = () => ({
    type: REQUEST_DATA
})

export const receiveDataSuccess = (users) => ({
    type: RECEIVE_DATA_SUCCESS,
    users
})

export const receiveDataFailed = () => ({
    type: RECEIVE_DATA_FAILED
})