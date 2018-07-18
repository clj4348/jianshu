import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'; // 链接rudux数据
import { 
	TopicWrapper,
	TopicItem
} from '../style';
class Topic extends Component {
	render() {
		const { list } = this.props;
		return (
			<Fragment>
				<TopicWrapper>
					{
						list.map((item) => (
								<TopicItem key={item.get('id')}>
									<img className="topic-pic"
										alt=""
										src={item.get('imgUrl')} />
									{item.get('title')}
								</TopicItem>
						))
					}
					
				</TopicWrapper>
			</Fragment>
		)
	}
}
const mapStateToProps = (state) => ({
	list: state.get('home').get('topicList') //拿到数据
});
// 传两个参数链接redux
export default connect(mapStateToProps, null)(Topic);