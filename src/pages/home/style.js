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
	width: 280px;
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

//首页推荐列表 start
export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`
export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props)=> props.imgUrl}) no-repeat center;
	background-size: contain; 
`
//首页推荐列表 end

// 加载更多 start
export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	text-align: center;
	margin: 30px 0;
	background: #a5a5a5;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`
// 加载更多end

// 回到顶部 start
export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 12px;
	cursor: pointer;
`
// 回到顶部 end
