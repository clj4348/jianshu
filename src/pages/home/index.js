import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style'

class Home extends PureComponent {
	// 判断和组件相关的数据，就刷新新该组件

	handleScrollTop(){
		window.scrollTo(0,0);
	}
	render() {
		return (
			<Fragment>
				<HomeWrapper>
					<HomeLeft>
						<img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4345/7c956f527bc16d8e639c436dcbb806e99fc4142a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
						<Topic />
						<List/>
					</HomeLeft>
					<HomeRight>
						<Recommend/>
						<Writer/>
					</HomeRight>
					{
						this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
					}
					
				</HomeWrapper>
			</Fragment>
		)
	}
	// 生命周期函数, 页面挂载完毕执行
	componentDidMount(){
		this.props.changeHomeData()
		this.bindEvents();
	}
	// 销毁组件生命函数
	componentWillUnmount(){
		window.removeEventListener('scroll', this.props.changeScrollTopShow)
	}
	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow)
	}
}
const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
	changeHomeData(){
		const action = actionCreators.getHomeInfo()
		dispatch(action);
	},
	changeScrollTopShow() {
		const scrollTop = document.documentElement.scrollTop
		if(scrollTop > 400){
			dispatch(actionCreators.toggleTopShow(true))
		}else{
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
})
export default connect(mapState, mapDispatch)(Home);