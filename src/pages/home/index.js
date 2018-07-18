import React, { Component, Fragment } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style'

class Home extends Component {
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
				</HomeWrapper>
			</Fragment>
		)
	}
}

export default Home;