import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName, changeStatus, initializeForm, requestData, receiveDataSuccess, receiveDataFailed } from '../actions';
import Form from './Form';
import List from './List';

class App extends Component {
    render() {
        return (
            <div>
              <Form 
                changeName={this.props.changeName} 
                changeStatus={this.props.changeStatus} 
                initializeForm={this.props.initializeForm}
                requestData={this.props.requestData}
                receiveDataSuccess={this.props.receiveDataSuccess}
                receiveDataFailed={this.props.receiveDataFailed}
                name={this.props.name}
                status={this.props.status}
                />
              <List
                initializeForm={this.props.initializeForm}
                requestData={this.props.requestData}
                receiveDataSuccess={this.props.receiveDataSuccess}
                receiveDataFailed={this.props.receiveDataFailed}
                isFetching={this.props.isFetching}
                ustatus={this.props.ustatus}
                users={this.props.users}
                />
            </div>
        )
    }
} 

const mapDispatchToProps = ({ changeName, changeStatus, initializeForm, requestData, receiveDataSuccess, receiveDataFailed });

const mapStateToProps = state => ({ name: state.form.name, status: state.form.status,  users: state.users.users, isFetching: state.users.isFetching });

export default connect(mapStateToProps,mapDispatchToProps)(App)