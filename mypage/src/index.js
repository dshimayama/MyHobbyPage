import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

//Presentational Components
class AppComponents extends React.Component {

  send(e){
    this.props.onClick(this.refs.inputText.value);
  }


  render() {
    return (
      <div>
        <input type="text" defaultValue="" ref="inputText" /> { /* 入力フォーム */ }
        <button onClick={this.send.bind(this)}>計算</button>  { /* ボタン */ }
        <br />
        {this.props.price}  { /* 表示させる税込の金額 */ }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    price: state.price
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(price){
      dispatch(addTax(price));
    }
  };
}

let AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponents);



// ActionCreator
const ADDTAX = 'ADDTAX';
function addTax(price) {
  return {
    type: ADDTAX,
    price
  };
}


// Reducer
function appReducer(state, action) {
  switch (action.type) {
    case 'ADDTAX':
      return (
        Object.assign({}, state, {price: action.price * 1.08})
      );
    default:
      return state
  }
}


//state初期化
const initialState = {
  price: ''
};

//store作成
const store = createStore(appReducer, initialState);

//レンダリング
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);