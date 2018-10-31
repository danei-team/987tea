<template>
	<div class="product">
		<mt-header fixed :title="title">
		    <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
		</mt-header>
		<div class="search">
			<mt-search v-model="value"  cancel-text="取消"  placeholder="搜索您想要的产品"></mt-search>
		</div>
		<section class="tea" v-for="(item, index) in lists" :key="index">
			<h3 v-text="item.title"></h3>
			<div class="pro">
				<a href="#">
					<div class="pro_img"><img :src="item.img" alt="" @click="goto(item.title,item.subtitle,item.img,item.old_price,item.new_price)"></div>
					<div class="pro_name" v-text="item.subtitle"></div>
					<div class="pro_btm clearfix">
						<div class="fl">
							<span>抢购价</span>
							<span class="new-price">￥{{item.new_price}}</span>
							<span class="old-price">原价{{item.old_price}}</span>
						</div>
						<div class="fr">销量{{item.sales}}</div>
					</div>
				</a>
			</div>
		</section>
		<router-view></router-view>
		<NavBar></NavBar>
	</div>
</template>
<script>
	// 底部导航
	import NavBar from '@/view/navBar'
	import {api} from '../global/api'
	export default{
		data(){
			return {
				value:'',
				titles:['红茶','绿茶','乌龙茶','黑茶','白茶','花茶','茶具'],
				title:'红茶',
				all_lists:[
					[
						{title:'正山小种',img:'/static/img/pro1_1.png',subtitle:'武夷山桐木关正山小种红茶200g',new_price:'99.00',old_price:'228.00',sales:'256'},
						{title:'祁门红茶',img:'/static/img/pro1_2.png',subtitle:'安徽祁门红茶原产地浓香型红香螺茶叶',new_price:'168',old_price:'328',sales:'44'},
						{title:'金骏眉',img:'/static/img/pro1_3.png',subtitle:'金骏眉红茶 武夷山桐木关散装罐装',new_price:'99',old_price:'218',sales:'279'}
					],
					[
						{title:'龙井',img:'/static/img/pro2_1.png',subtitle:'明前特级西湖龙井 豆香型125g',new_price:'128',old_price:'238',sales:'350'},
						{title:'猴魁',img:'/static/img/pro2_2.png',subtitle:'安徽雨前特级太平猴魁绿茶春茶75g',new_price:'168',old_price:'368',sales:'278'},
						{title:'碧螺春',img:'/static/img/pro2_3.png',subtitle:'2018新茶洞庭碧螺春茶叶 早春特级浓香型绿茶125g',new_price:'128',old_price:'238',sales:'298'},
						{title:'信阳毛尖',img:'/static/img/pro2_4.png',subtitle:'【买一送一】信阳毛尖2018新茶毛尖茶200g',new_price:'158',old_price:'398',sales:'115'}
					],
					[
						{title:'铁观音',img:'/static/img/pro3_1.png',subtitle:'【买一送一】东方韵200g铁观音铁罐装',new_price:'198',old_price:'396',sales:'294'},
						{title:'大红袍',img:'/static/img/pro3_2.png',subtitle:'大红袍200g铁罐装',new_price:'79',old_price:'158',sales:'321'},
						{title:'肉桂',img:'/static/img/pro3_3.png',subtitle:'金奖肉桂 武夷山正岩大红袍茶叶',new_price:'168',old_price:'358',sales:'322'}
					],
					[
						{title:'熟茶',img:'/static/img/pro4_1.png',subtitle:'云南普洱茶熟茶茶化石250g袋装',new_price:'128',old_price:'238',sales:'7682'},
						{title:'普洱',img:'/static/img/pro4_2.png',subtitle:'柑普茶 正宗新会小青柑普茶青皮宫廷陈年10年普洱熟茶',new_price:'118',old_price:'256',sales:'282'},
						{title:'生茶',img:'/static/img/pro4_3.png',subtitle:'5年陈冰岛普洱生茶 10饼仅￥168',new_price:'168',old_price:'298',sales:'16250'},
					],
					[
						{title:'寿眉',img:'/static/img/pro5_1.png',subtitle:'2012年福鼎白茶老寿眉350g',new_price:'58',old_price:'228',sales:'286'},
						{title:'贡眉',img:'/static/img/pro5_2.png',subtitle:'金秋荷韵礼盒装福鼎贡眉月饼茶300g',new_price:'168',old_price:'358',sales:'9'},
						{title:'白牡丹',img:'/static/img/pro5_3.png',subtitle:'2012年福鼎白茶 白牡丹茶饼350g',new_price:'99',old_price:'228',sales:'277'},
						{title:'白豪银针',img:'/static/img/pro5_3.png',subtitle:'白茶 福鼎白茶白毫银针散茶200g 银针茶叶',new_price:'128',old_price:'298',sales:'707'}
					],
					[
						{title:'茉莉花茶',img:'/static/img/pro6_1.png',subtitle:'茉莉花茶 广西横县清香型茉莉翠芽花茶 茶叶袋装',new_price:'118',old_price:'238',sales:'2262'},
						{title:'菊花',img:'/static/img/pro6_2.png',subtitle:'菊花茶 金丝皇菊 一朵一杯',new_price:'58',old_price:'138',sales:'629'},
						{title:'再加工类茶',img:'/static/img/pro6_3.png',subtitle:'苦丁茶小叶苦丁茶青山绿水野生苦丁茶叶包邮',new_price:'88',old_price:'198',sales:'252'}
					],
					[
						{title:'紫砂壶',img:'/static/img/pro7_1.png',subtitle:'宜兴紫砂壶户外便携竹盒旅行茶具套装6件套',new_price:'268',old_price:'598',sales:'937'},
						{title:'建盏',img:'/static/img/pro7_2.png',subtitle:'建阳建盏工夫茶具五件套',new_price:'470',old_price:'999',sales:'281'},
						{title:'茶具套装',img:'/static/img/pro7_3.png',subtitle:'手绘盖碗功夫茶具套装',new_price:'228',old_price:'456',sales:'21'}
					]
				],
				lists:[
						{title:'正山小种',img:'/static/img/pro1_1.png',subtitle:'武夷山桐木关正山小种红茶200g',new_price:'99.00',old_price:'228.00',sales:'256'},
						{title:'祁门红茶',img:'/static/img/pro1_2.png',subtitle:'安徽祁门红茶原产地浓香型红香螺茶叶',new_price:'168',old_price:'328',sales:'44'},
						{title:'金骏眉',img:'/static/img/pro1_3.png',subtitle:'金骏眉红茶 武夷山桐木关散装罐装',new_price:'99',old_price:'218',sales:'279'}
					]
			}
		},
		components:{
			NavBar
		},
		mounted:function(){
			this.getlist()
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			},
			getlist(){
				if(this.$route.params.id){
					this.title = this.titles[this.$route.params.id]
					this.lists = this.all_lists[this.$route.params.id]
				}
			},
			goto(title,subtitle,img,old_price,new_price){
				this.$router.push({name:'dragonDetail',params:{title,subtitle,img,old_price,new_price}})
			}
		}
	}
</script>
<style>
.clearfix::after{
	content: "";
	display: block;
	clear: both;
}
	.product{
		background: #f4f4f4;
	}
	/*头部	*/
	.product .mint-header{
		background-color:#222;
		color: #fff;
		font-size: 0.8rem;
		z-index: 1000;
		height: 2rem;
		line-height: 2.5rem;
	}
	/*返回按钮*/
	.product button,.product button label{
		cursor:pointer;
		height: 1.7rem;
	}
	.product .mintui{
		font-size: 0.8rem;
	}
	/*搜索*/
	.product .search{
		width: 80%;
		position: relative;
		top:3rem;
		left: 10%;
		z-index: 1;
	}
	.product .search .mint-search{
		width: 100%;
		height: 100%;
	}
	.product .search .mint-search .mint-searchbar{
		background: #ededed;
	}
	.product .search .mint-search .mint-searchbar-inner{
		height: 1.3rem;
	}
	.product .search .mint-search .mint-searchbar-inner .mint-searchbar-core{
		font-size: 0.5rem;
	}
	.product .search .mint-searchbar-cancel{
		font-size: 0.5rem;
	}
	/*茶品*/
	.product .tea{
		position: relative;
		top:4rem;
		margin-bottom: 1rem;
	}
	.product .tea:last-child{
		margin-bottom: 3rem;
	}
	.product .tea h3{
		width: 100%;
		font-weight: 500;
		font-size: 1rem;
		line-height: 3rem;
		color: #10181f;
		text-align: center;
		line-height: 3rem;
	}
	.product .tea ul{
		width: 100%;
		text-align: center;
		background: #fff;
	}
	.product .tea ul li{
		float: left;
		width: 32.95%;
		list-style: none;
		border:1px solid #e0e0e0;
	}
	.product .tea ul li:nth-child(3n-2){
		border-left: 0;
	}
	.product .tea ul li:nth-child(3n){
		border-right: 0;
	}
	.product .tea ul li:nth-child(3n-2){
		border-left: 0;
	}
	.product .tea ul li p{
		width: 100%;
		text-align: center;
	}
	.product .tea ul li .text{
		padding-bottom: 10%;
		font-size: 0.5rem;
		color: #10181f;
	}
	.pro{
    width: 320px;
    border: 1px solid #eee;
    overflow: hidden;
		margin: 0 auto 20px;
    padding: 0 10px;
    background-color: #fff;
    position: relative;
    -ms-transition: all .4s;
    transition: all .4s;}
	.pro>a{display: block;color: inherit;
    text-decoration: none;
    background-color: transparent;}
	.pro_img{padding: 10px 0;
    text-align: center;}
	.pro_img img{width: 260px;
    height: 260px;
    vertical-align: top;border-style: none;}
	.pro_name{margin-bottom: 10px;font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;}
	.pro_btm{    position: relative;
    margin: 10px 0 12px;}
	.pro_btm .fl{float: left;}
	.pro_btm .fr{float: right;margin-right: 20px;}
	.pro_btm .fl span:first-child{font-size: 14px;}
	.pro_btm .fl .new-price{font-size: 18px;font-weight: bold;color: #B4272D;}
	.pro_btm .fl .old-price{font-size: 12px;
    margin: 4px 0 0 6px;
    color: #999;
    text-decoration: line-through;}
	.pro_btm .fr{margin-top: 4px;color: #999;
    font-size: 14px;}
</style>