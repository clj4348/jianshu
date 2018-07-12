import * as constans from './constants';
import axios from 'axios';
export const searchFocus = () => ({
	type: constans.SEARCH_FOCUS
})

export const searchBlur = () => ({
	type: constans.SEARCH_BLUR
})

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			
		}).catch(() => {
			console.log('err')
		})
	}
}
