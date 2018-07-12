import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //异步处理数据中间件
import reducer from './reducer';

//redux调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

export default store;