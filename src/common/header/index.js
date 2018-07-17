import React, {
	Component
} from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	Addition,
	Button,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style';

class Header extends Component {

	getListArea() {
		const {
			focused,
			list,
			page,
			mouseIn,
			totalPage,
			handleMouseEnter,
			handleMouseLeave,
			handleChangePage
		} = this.props;

		const jsList = list.toJS(list);
		const pageList = []; // 换一换的页数
		if(jsList.length) {
			for(let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={ jsList[i] }>{jsList[i]}</SearchInfoItem>
				)
			}
		}

		if(focused || mouseIn) {
			return(
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
	      	<SearchInfoTitle>
	      		热门搜索
	      		<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon )}>
							<i ref={(icon) => {this.spinIcon = icon }} className='iconfont spin'>&#xe851;</i>
							换一批
						</SearchInfoSwitch>
	      	</SearchInfoTitle>
	      	<SearchInfoList>
	      		{ pageList }
	      	</SearchInfoList>
	      </SearchInfo>
			)
		} else {
			return null;
		}
	}

	render() {
		const {
			focused,
			handleInputFocus,
			handleInputBlur,
			list
		} = this.props
		return(
			<HeaderWrapper>
	      <Logo href='/'/>
	      <Nav>
	        <NavItem className='left active'>首页</NavItem>
	        <NavItem className='left'>下载APP</NavItem> 
	        <SearchWrapper>
	         <CSSTransition
	            in={focused}
	            timeout={200}
	            classNames="slide"
	          >
	            <NavSearch className={focused ? 'focused': ''}
	              onFocus={() => handleInputFocus(list)}
	              onBlur={handleInputBlur}>
	            </NavSearch>
	          </CSSTransition>
	          <i className={focused ? 'focused iconfont zoom': 'zoom iconfont'}>&#xe614;
	          </i>
	          {this.getListArea(focused)}
	        </SearchWrapper>
	      </Nav>
	      <Addition>
	        <Button className='writting iconfont'>&#xe615; 写文章</Button>
	        <Button className='reg'>注册</Button>
	      </Addition>
	    </HeaderWrapper>
		)
	}
}

// 将数据映射到props中
const mapStateToProps = (state) => {
	return {
		// 获取对应的属性
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']), // 获取页码
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']) // 获取页码
		// focused: state.get('header').get('focused')
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if(originAngle) {
				originAngle = parseInt(originAngle, 10)
			} else {
				originAngle = 0
			}
			spin.style.transform = 'rotate(' + originAngle + 360 + 'deg)';
			if(page < totalPage) {
				dispatch(actionCreators.changePage(page + 1))
			} else {
				dispatch(actionCreators.changePage(1))
			}
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);