import * as constans from './constants';
import { fromJS} from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
	type: constans.CHANGE_LIST,
	// imutable数据类型
	data:fromJS(data),
	totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
	type: constans.SEARCH_FOCUS
})
export const mouseEnter = () => ({
	type: constans.MOUSER_ENTER
})
export const mouseLeave = () => ({
	type: constans.MOUSER_LEAVE
})
export const searchBlur = () => ({
	type: constans.SEARCH_BLUR
})

export const changePage = (page) => ({
	type: constans.CHANGE_PAGE,
	page
})

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			const data = res.data;
			// 派发出数据
			dispatch(changeList(data.data))
		}).catch(() => {
			console.log('err')
		})
	}
}
