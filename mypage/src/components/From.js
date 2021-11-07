import React from 'react';
import axios from 'axios';

const ROOT_ENDPOINT = 'http://localhost:3001';

const Form = ({ name, status, changeName, changeStatus, initializeForm, requestData, receiveDataSuccess, receiveDataFailed }) => {
   const createUser = e => {
       if(name.length > 10 || status.length > 10) {
           alert('文字数が多いです');
       } else {
           e.preventDefault();
           axios({
             method: 'post',
             url: ROOT_ENDPOINT + '/user/create',
             data: {
                name: name,
                status: status
             }
           })
           .then(res => {
             initializeForm();
             const _users = res.data;
             console.log(_users);
             receiveDataSuccess(_users);
           })
           .catch(err => {
             console.log(err);
             alert('登録に失敗しました')
             receiveDataFailed();
           })
       }
    }

    return (
        <div>
            <form onSubmit={e => createUser(e)}>
                <label>
                    name:
                    <input value={name} onChange={e => changeName(e.target.value)} />
                </label>
                <label>
                    status:
                    <input value={status} onChange={e => changeStatus(e.target.value)} />
                </label>
                <button type="submit">register</button>
            </form>
        </div>
    )
}

export default Form;