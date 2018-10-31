<template>
	<div class="dragonDetail">
		<mt-header :title="title">
		    <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
		</mt-header>
	<div class="swipe">
		<mt-swipe :auto="4000">
 	 <mt-swipe-item v-for="(item,index) in banner" :key="index"><img class="banner" :title="item.title" :src="item.img_url"/></mt-swipe-item>
		</mt-swipe>
		</div>
		<div class="divider"></div>
		<div class="cell">
			<div class="cell-item">
				<p>顶峰 开化龙顶 2017明前茶 绿茶  50g 黄罐单罐<span>热卖中</span></p>
			</div>
			
			<div class="cell-item">
				<p class="oldprice">市场价:998</p>
				<p class="newprice">销售价:98</p>
			</div>
			
			<div class="cell-item">
				  <p class="item-text"> 购买数量:</p>
          <div class="numbox">
					<button class="numbtn" type="button" @click="goSub">-</button>
					<input class="numinp" type="number" v-model="num"/>
					<button class="numbtn" type="button" @click="goAdd">+</button>
				 </div> 
				 <div class="pay">
				<mt-button type="primary" size="small">立即购买</mt-button>
				  <mt-button type="danger" size="small">加入购物车</mt-button>
				  </div>
			</div>
			<div class="divider"></div>
		<div class="cell-item">
			商品参数 <mt-button type="default" size="small" class="arg-btn">详情</mt-button>
		</div>
		<div class="cell-item argument">
			<p>
			名称： 西湖龙井<br>
			原产地： 浙江<br>
			净含量： 125g*2<br>
			包装： 礼盒装<br>
			色香形味： 扁平光滑糙米黄<br>
			存储形式： 干燥低温 密封<br>
			货到付款： 支持<br>
			破损包赔	： 支持<br>
			</p>
		</div>
		</div>
		<NavBar></NavBar>
	</div>
</template>
<script>
import { Swipe, SwipeItem,Button } from 'mint-ui';
import NavBar from '@/view/navBar'
	export default{
		data(){
			return {
				num:1,
				banner:[
				{title:'龙顶',img_url:'/static/img/new1.jpg'},
				{title:'龙顶',img_url:'/static/img/new2.jpg'},
				{title:'龙顶',img_url:'/static/img/new3.jpg'},
				{title:'龙顶',img_url:'/static/img/new4.jpg'},],
				title:"顶峰 开化龙顶 2017明前茶 绿茶  50g 黄罐单罐"
			}
		},
		methods:{
			goBack:function(){
				this.$router.go(-1);
			},
			 goSub(){
          if(this.num<=1){return;}
          this.num = this.num - 1;
       },
       goAdd(){
          if(this.num>=99){return;}
          this.num = parseInt(this.num) + 1;
       }
		},
		components:{
			'Swipe':Swipe.name,
			'SwipeItem':SwipeItem.name,
			'Button':Button.name,
			NavBar
		}
		
	}
</script>
<style>
	/*头部*/
	.dragonDetail .mint-header{
		background-color:#1b1b20;
		color: #fff;
		font-size: .8rem;
		z-index: 100;
	}
	/*返回按钮*/
	.dragonDetail button,.dragonDetail button label{
		cursor:pointer;
		height: 1.7rem;
	}
	.swipe{
		height:10rem;
		background: red;
	}
.banner{
	width:100%;
	height:10rem;
}
.cell{
  background-color: #fff;
  font-size: .7rem;
}
.cell-title{
	padding-top: 3%;
    padding-bottom: 3%;
	padding-left: 5%;
	
}
.cell-item{
  border-bottom:1px solid #ddd;
  padding:.8rem .8rem;
  overflow: hidden;
}
.cell-item p{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space:nowrap;
}
.divider{
  height:.5rem;
  background: #f1f1f1;
  box-shadow:0 5rpx 5rpx rgba(0,0,0,.1) inset;
}


button::after{
  border-bottom: none;
  border-top: none;
  border-radius: 0;
}
.oldprice{
	float: left;
	text-decoration: line-through;
}
.newprice{
	float: right;
	margin-right: 1rem;
	color:red;
}
.cell-item p span{
	color:red;
	display: inline-block;
	border:1px solid red;
	border-radius: 5px;
	margin-left: 2px;
	padding: 0 3px;
}
.item-text{
	float: left;
	line-height: 1.6rem;

}
.numbox{
	float: right;
	margin-left: 1rem;
	margin-right: 1rem;
	display: flex;
	justify-content: center;
	flex-flow: row;
	border:1px solid #ccc;
	border-radius: 5px;
}
.numbox .numbtn{
	width: 1.6rem;
	background: #d3d3d3;
	color:#000;
	border:none;
}
.numbox .numinp{
	width:1.6rem;
	text-align: center;
}
.pay{
	float: right;
	margin-top:0.4rem;
	margin-right: 1rem;
	clear: both;
}
.argument{
	margin-bottom: 3rem;
}
.arg-btn{
	float: right;
	
}
</style>