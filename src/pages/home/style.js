import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
`
export const HomeLeft = styled.div`
	width: 625px;
	margin-left: 15px;
	padding-top: 30px;
	float: left;
	.banner-img{
		width: 625px;
		height: 270px;
	}
`
export const HomeRight = styled.div`
	width: 240px;
	float: right;
`
// 专题  start
export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
	float: left;
	background: #f7f7f7;
	height: 32px;
	line-height: 32px;
	padding-right: 10px;
	margin:0 0 18px 18px;
	background: #f7f7f7;
	font-size: 14px;
	color: #333;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic{
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
		
	}
`
// 专题  end

//列表样式  start
export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.list-pic{
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`
export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title{
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc{
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`
//列表样式  end
