<template>
	<div class="navBar">
		<mt-tabbar v-model="selected" class="nav" fixed="fixed">
		  	<mt-tab-item id="home">
		  		<router-link to="/home">
			  		<p><i class="fa fa-home" aria-hidden="true"></i></p>
			   		<p>首页</p>
			   	</router-link>
		 	 </mt-tab-item>
		  	<mt-tab-item id="classify">
		  		<router-link to="/classify">
			  		<p><i class="fa fa-th-large" aria-hidden="true"></i></p>
			    	<p>分类</p>
		    	</router-link>
		  	</mt-tab-item>
		  	<mt-tab-item id="cart">
		  		<router-link to="/shopping">
			  		<p><i class="fa fa-shopping-cart" aria-hidden="true"></i></p>
			    	<p>购物车</p>
			    </router-link>
				<div class="count" v-if="this.$store.getters.optCount > 0">
					<span>{{this.$store.getters.optCount}}</span>
				</div>
		  	</mt-tab-item>
		  	<mt-tab-item id="user">
		  		<router-link to="/personal">
			  		<p><i class="fa fa-user-o" aria-hidden="true"></i></p>
			    	<p>我的</p>
			    </router-link>
		  	</mt-tab-item>
		</mt-tabbar>
		<router-view></router-view>
	</div>
</template>
<script>
	import store from '../store'
	export default{
		data(){
			return{
				selected:'',
				fixed:true
			}
		},
		mounted(){
			
		}
	} 
</script>
<style>
	.navBar .nav p{
		font-size: 0.5rem;
		color: #555;
		margin-top:5%;
	}
	.navBar .mint-tabbar > .mint-tab-item.is-selected{
		background-color: #fafafa;
	}
	.navBar .nav i{
		font-size: 1rem;
	}
	.navBar a{
		text-decoration: none;
	}
	.navBar a.router-link-active p{
		color: #ff3600;
	}
	#cart{position: relative;}
	.mint-tab-item-label{position: relative;}	
	.count{position:absolute;top:-0.2rem;right:1.4rem;height:16px;width:16px;background:red;text-align: center;line-height: 15px;border-radius:50%;color:#fafafa}
</style>