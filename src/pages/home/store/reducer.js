import { fromJS } from 'immutable';
import * as constans from './constants';
/**
 * immutable.js 不可变更的对象 管理 reducer
 */
const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	showScroll: false
});
const changeHomeData = (state, action) => {
	return state.merge({
		'topicList': fromJS(action.topicList),
		'articleList': fromJS(action.articleList),
		'recommendList': fromJS(action.recommendList)
	})
}
const addArticleList = (state, action) => {
	return state.set('articleList', state.get('articleList').concat(action.list));
}
export default (state = defaultState, action) =>{
	switch(action.type){
		case constans.CHANGE_HOME_DATA :
			return changeHomeData(state, action)
		case constans.ADD_ARTICLE_LIST :
			return addArticleList(state, action)
		case constans.TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show)
		default:
			return state;
  }
}