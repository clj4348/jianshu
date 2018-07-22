import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { 
	ListItem,
	ListInfo,
	LoadMore
} from '../style';

class List extends PureComponent {
	render() {
		const { list, getMoreList} = this.props;
		return (
			<div>
				{
					list.map((item, index) => (
						<Link key={index} to='/detail'>
						<ListItem>
							<img className='list-pic' src={item.get('imgUrl')} alt="" />
							<ListInfo>
								<h3 className='title'>{item.get('title')}</h3>
								<p className='desc'>{item.get('desc')}</p>
							</ListInfo>
						</ListItem>
						</Link>
					))
				}
				<LoadMore onClick={getMoreList}>更多文字</LoadMore>
			</div>
		)
	}
}
const mapstateToProps = (state) => ({
	list: state.getIn(['home', 'articleList'])
})

const mapDispatch = (dispatch) => ({
	getMoreList() {
		dispatch(actionCreators.getMoreList())
	}
})

export default connect(mapstateToProps, mapDispatch)(List);