import axios from 'axios';
import * as constans from './constants';
import { fromJS } from 'immutable';
const changHomeData = (result) => ({
	type: constans.CHANGE_HOME_DATA,
	topicList : result.topicList,
	recommendList: result.recommendList,
	articleList: result.articleList
})

const addHomeList = (list) => ({
	type: constans.ADD_ARTICLE_LIST,
	list: fromJS(list)
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json')
			.then((res) => {
				const result = res.data.data;
				dispatch(changHomeData(result))
			}
		)
	}
}

export const toggleTopShow = (show) => ({
	type: constans.TOGGLE_SCROLL_TOP,
	show,
})
// 加载更多
export const getMoreList = () => {
	return (dispatch) => {
		axios.get('/api/homeList.json')
			.then((res) => {
				const result = res.data.data;
				dispatch(addHomeList(result));
			}
		)
	}
}
