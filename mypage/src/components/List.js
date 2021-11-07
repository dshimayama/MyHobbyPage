import React from 'react';
import axios from 'axios';

const ROOT_ENDPOINT = 'http://localhost:3001';


class List extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.fetchData();
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    fetchData = () => {
        this.props.requestData();
        axios.get(ROOT_ENDPOINT + '/user')
        .then(res => {
            const _users = res.data;
            this.props.receiveDataSuccess(_users);
        })
        .catch(err => {
            console.log(err);
            this.props.receiveDataFailed();
        })
    }

    updateUser = (id) => {
        if(this.state[`${id}`].length > 10) {
            alert('文字数が多いです');
        } else {
            this.props.requestData();
            axios({
              method: 'put',
              url: ROOT_ENDPOINT + '/user/update',
              data: {
                id: id,
                status: this.state[`${id}`]
              }
            })
            .then(res => {
              const _users = res.data;
              this.props.receiveDataSuccess(_users);
            })
            .catch(err => {
              console.log(err);
              alert('更新に失敗しました');
              this.props.receiveDataFailed();
            })
        }
    }

    deleteUser = (id) => {
        this.props.requestData();
        axios({
            method: 'delete',
            url: ROOT_ENDPOINT + '/user/delete',
            data: {
                id: id
            }
        })
        .then(res => {
            const _users = res.data;
            this.props.receiveDataSuccess(_users);
        })
        .catch(err => {
            console.log(err);
            alert('削除に失敗しました');
            this.props.receiveDataFailed();
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.isFetching
                        ? <h2>Now Loading...</h2>
                        : <div>
                            <ul>
                                {this.props.users.map(user => (
                                    <li key={user.id}>
                                        {`${user.name}: ${user.status}`}
                                        <input  onChange={this.handleChange(`${user.id}`)} />
                                        <button onClick={() => this.updateUser(user.id)}>update</button>
                                        <button onClick={() => this.deleteUser(user.id)}>delete</button>
                                    </li>
                                ))}
                            </ul>
                          </div>
                }
            </div>
        )
    }
}

export default List;