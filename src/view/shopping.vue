<template>
	<div class="shopping">
		<mt-header title="购物车">
		    <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
		</mt-header>
		<div class="emptyShopping" v-if="show == 0">
			<p>你的购物车没有任何商品</p>
		</div>
		<div class="app_member" v-if="show == 1">
        <div class="mui-card">
            <div class="mui-card-header">购物车</div>
			<div class="divider"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!-- 购物车 -->
                    <ul class="mui-table-view"> 
                        <li class="mui-table-view-cell mui-media" v-for="item of list" :key="item.id">
                            <img class="mui-media-object mui-pull-left" :src="item.img_url">
                            <div class="mui-media-body">
                                <p>{{item.title}}</p>
                                <div class='mui-ellipsis'>
                                    <span>价格：￥{{item.price}}</span>
                                    <div class="mui-numbox">
                                        <button class="mui-btn mui-btn-numbox-minus" type="button"   @click="setSub(item.id)">-</button>
                                        <input class="mui-input-numbox" type="number" v-model="item.count"/>
                                        <button class="mui-btn mui-btn-numbox-plus" type="button"
                                      @click="setAdd(item.id)">+</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
			<div class="divider"></div>			
            <div class="mui-card-footer">
                <span>小计：￥{{getsubtotal}} </span>  <!-- 调用总价函数 -->
                <mt-button type="primary" size="small">立即购买</mt-button>
            </div>
        </div>
    </div>
		<NavBar></NavBar>
	</div>
</template>
<script>
	// 底部导航
	import NavBar from '@/view/navBar'
	import Login from '@/view/login'
	export default{
		data(){
			return{
				show:1,
				list:[
					{id:1,title:'红茶',price:'8888',count:1,img_url:'/static/img/wr1.jpg'},
					{id:2,title:'红茶',price:'8888',count:1,img_url:'/static/img/wr1.jpg'},					
				]
			}
		},
		components:{
			NavBar
		},
		computed:{
			loginStatus(){
				return this.$store.state.loginStatus;
			}
		},	   
		mounted:function(){
			// 未登录状态重定向到登录页面
			// if(!this.loginStatus){
			// 	this.$router.push({path:'/login',component:Login})
			// }
			// console.log('tai',this.loginStatus) 
			// console.log(0)
		},
		methods:{
			goBack:function(){
				this.$router.go(-1);
			},
			//购物车-
            setSub(id){
                for(var item of this.list){
                    //如果item.id 等于 当前id 
                    var count = item.count;
                    if(item.id == id){
                        if(item.count>1)
                        item.count--;
                    }
                }
			},
			setAdd(id){
				console.log(id)
                //获取当前购物车id，遍历count
                for(var item of this.list){
                    //如果item.id 等于 当前id 
                    var count = item.count;
                    if(item.id == id){
                        if(item.count<99)
                        item.count++;
                    }
                }
            },
		},
	
	//计算属性：
	computed:{
		getsubtotal:function(){
			var sum = 0;
			for(var item of this.list){
				sum += item.price * item.count;
			}
			return sum;
		}
	}
}
</script>
<style>
	/*头部*/
	.shopping .mint-header{
		background-color:#1b1b20;
		color: #fff;
		font-size: 0.8rem;
		z-index: 100;
		height: 2rem;
		line-height: 2.5rem;
	}
	/*返回按钮*/
	.shopping button,.shopping button label{
		cursor:pointer;
		height: 1.7rem;
	}
	.shopping .mintui{
		font-size: 0.8rem;
	}
	.shopping .emptyShopping p{
		color: #999;
		font-size: 0.7rem;
		width: 100%;
		text-align: center;
	}
	/*购物车样式*/
.mui-table-view .mui-table-view-cell .mui-media-object{ max-width:50px;max-height:50px;}
.mui-table-view .mui-table-view-cell { padding:6px }
.mui-table-view .mui-table-view-cell .mui-ellipsis{ display:flex; justify-content: space-between}
.mui-card{box-shadow:none;}

/*分割块*/
.divider{height:10px;background:#f1f1f1;}

</style>