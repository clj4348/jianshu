import * as constans from './constants';
import { fromJS } from 'immutable'
/**
 * immutable.js 不可变更的对象 管理 reducer
 */
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) =>{
	switch(action.type){
		case constans.SEARCH_FOCUS:
			// immutable对象的set方法，会结合之前immutable对象的值
  	// 和设置的值，返回一个全新的对象
			return state.set('focused', true);
		case constans.SEARCH_BLUR:
    	return state.set('focused', false);
    case constans.CHANGE_LIST:
    	// 同时改变多个数据内容
    	return state.merge({
    		'list': action.data,
    		'totalPage': action.totalPage
    	})
   	case constans.MOUSER_ENTER:
    	return state.set('mouseIn', true)
    case constans.MOUSER_LEAVE:
    	return state.set('mouseIn', false)
    case constans.CHANGE_PAGE:
    	return state.set('page', action.page)
    default:
    	return state;
  }
}