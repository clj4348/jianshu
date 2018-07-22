import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import {
	RecommendWrapper,
	RecommendItem
} from '../style';
class Recommend extends PureComponent {
	render() {
		const list = this.props.list
		return (
			<Fragment>
				<RecommendWrapper>
					{
						list.map((item)=> {
							return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
						})
					}
				</RecommendWrapper>
			</Fragment>
		)
	}
}
const mapStateToProps = (state) => ({
	list: state.getIn(['home', 'recommendList'])
})
export default connect(mapStateToProps, null)(Recommend);