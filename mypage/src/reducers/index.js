import { combineReducers } from 'redux';
import NotificationReducer from './NotificationReducer';
import AnimeListReducer from './AnimeListReducer';

const reducer = combineReducers({
  NotificationReducer: NotificationReducer,
  AnimeListReducer: AnimeListReducer,
});

export default reducer;

// 電卓
// import { combineReducers } from 'redux';
// import calculator from './calculator';

// const reducer = combineReducers({
//   calculator,
// });

// export default reducer;