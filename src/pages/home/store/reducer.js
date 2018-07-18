import { fromJS } from 'immutable'
/**
 * immutable.js 不可变更的对象 管理 reducer
 */
const defaultState = fromJS({
	topicList: [{
		id: 1,
		title: '社会热点',
		imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
	},{
		id: 2,
		title: '手绘',
		imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
	},{
		id: 3,
		title: '读书',
		imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
	}],
	articleList: [
		{
			id: 1,
			title: '钢铁直男，你送礼物的样子好像一只傻狍子哦！',
			desc: '我在工作上认识了个男生，但一直还算不上朋友，直到有一天…推进我们关系的一个重要事件发生了！ 那天我其实是有点忙的，但是男生突然在微信上呼唤我：...',
			imgUrl: '//upload-images.jianshu.io/upload_images/12034383-20d074706fb69526.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
		},
		{
			id: 2,
			title: '不能害怕失去；就不去拥有',
			desc: '全世界都在吻不同的唇 睡不同的人 不爱任何人 ……害怕经历那种从陌生到熟悉，再从熟悉到陌生的感觉 小心翼翼地将自己藏进坚硬的壳里，后来...',
			imgUrl: '//upload-images.jianshu.io/upload_images/8180120-0a7c3be5fe01cec1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
		}
	]
});

export default (state = defaultState, action) =>{
	switch(action.type){
		default:
			return state;
  }
}