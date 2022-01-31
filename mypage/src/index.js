// React関連
import './index.css'
import App from './App';
import React from 'react'
import ReactDOM from 'react-dom'
// Redux関連
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

// Presentational Componentsに渡すstateとしてpriceを指定
function mapStateToProps(state) {
  return {
    price: state.price
  };
}

// Presentational Componentsに渡す関数としてonClickを指定
function mapDispatchToProps(dispatch) {
  return {
    onClick(price){
      dispatch(addTax(price));  // dispatch(関数)でreducerが実行
    }
  };
}

// connectでreactとreduxを繋げている
// stateを返す関数と変更する関数を指定
// classの名前を指定
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
// stateとactionを引数に指定する
// Actionのpriceを1.08倍してStateにマージし新しいStateとして返す
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

// store作成
// reducerとState初期値でStoreを作成
// それをviewに渡してreactでstoreを使う
const store = createStore(appReducer, initialState);

//レンダリング
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);