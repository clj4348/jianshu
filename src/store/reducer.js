import { combineReducers } from 'redux-immutable'; // 合并所有的reducer
import { reducer as headerReducer }from '../common/header/store';

 const reducer = combineReducers({
	header: headerReducer
})

export default reducer;