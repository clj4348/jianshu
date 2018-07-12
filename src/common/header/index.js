import React, { Component } from 'react';
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

class Header extends Component{
	
	getListArea(show){
		if(show) {
			return (
				<SearchInfo>
	      	<SearchInfoTitle>
	      		热门搜索
	      		<SearchInfoSwitch>换一批</SearchInfoSwitch>
	      	</SearchInfoTitle>
	      	<SearchInfoList>
	      		<SearchInfoItem>教育</SearchInfoItem>
	      		<SearchInfoItem>教育</SearchInfoItem>
	      		<SearchInfoItem>教育</SearchInfoItem>
	      		<SearchInfoItem>教育</SearchInfoItem>
	      		<SearchInfoItem>教育</SearchInfoItem>
	      		<SearchInfoItem>教育</SearchInfoItem>
	      	</SearchInfoList>
	      </SearchInfo>
			)
		} else {
			return null;
		}
}
	
	render(){
		return (
	    <HeaderWrapper>
	      <Logo href='/'/>
	      <Nav>
	        <NavItem className='left active'>首页</NavItem>
	        <NavItem className='left'>下载APP</NavItem> 
	        <SearchWrapper>
	         <CSSTransition
	            in={this.props.focused}
	            timeout={200}
	            classNames="slide"
	          >
	            <NavSearch className={this.props.focused ? 'focused': ''}
	              onFocus={this.props.handleInputFocus}
	              onBlur={this.props.handleInputBlur}>
	            </NavSearch>
	          </CSSTransition>
	          <i className={this.props.focused ? 'focused iconfont': 'iconfont'}>&#xe614;
	          </i>
	          {this.getListArea(this.props.focused)}
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
  	focused: state.getIn(['header','focused'])
    // focused: state.get('header').get('focused')
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(){
    	dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    }
  } 
}

export default connect(mapStateToProps, mapDispathToProps)(Header);