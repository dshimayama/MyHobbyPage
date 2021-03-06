import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App';
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(rootReducer);

console.log(store);

ReactDOM.render (
  <Provider store={store}>
      <App />
  </Provider>
  ,document.getElementById('root')
)

// 電卓
// import CalculatorContainer from './containers/CalculatorContainer';
// ReactDOM.render(
//   <Provider store={store}>
//     <CalculatorContainer />
//   </Provider>,
//   document.getElementById('root')
// );