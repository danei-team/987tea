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
            <div class="mui-card-header">我的购物车</div>
			<div class="divider"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!-- 购物车 -->
                    <ul class="mui-table-view"> 
                        <li class="mui-table-view-cell mui-media" v-for="(item,index) of list" :key="index">
                            <img class="mui-media-object mui-pull-left" :src="item.img_url">
                            <div class="mui-media-body">
                                <p>{{item.subtitle}}</p>
                                <div class='mui-ellipsis'>
                                    <span>价格：￥{{item.new_price}}</span>
                                    <div class="mui-numbox">
                                        <button class="mui-btn mui-btn-numbox-minus" type="button"   @click="setSub(index)">-</button>
                                        <input class="mui-input-numbox" type="number" v-model="item.num"/>
                                        <button class="mui-btn mui-btn-numbox-plus" type="button"
                                      @click="setAdd(index)">+</button>
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
                <mt-button type="danger" size="small" class="clearCar" @click="clearCar">清空购物车</mt-button>
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
				show:0,
				list:[
					{id:1,title:'红茶',price:'8888',count:1,img_url:'/static/img/wr1.jpg'},
					{id:2,title:'红茶',price:'8888',count:1,img_url:'/static/img/wr1.jpg'},					
				]
			}
		},
		components:{
			NavBar
		},   
		mounted:function(){
            // 未登录状态重定向到登录页面
			if(!this.loginStatus){
				this.$router.push({path:'/login',component:Login})
			}
            if(this.$store.getters.optList.length){
                this.list = this.$store.getters.optList;
                this.show = 1
            }else{
                this.show = 0
            }
		},
		methods:{
			goBack:function(){
				this.$router.go(-1);
			},
			//购物车-
            setSub(id){
                if(this.list[id].num > 1){
                    this.list[id].num--
                } 
			},
			setAdd(id){
				 if(this.list[id].num < 99){
                    this.list[id].num++
                } 
            },
            clearCar(){
                this.$store.commit("clearCount")
                this.show = 0
            }
		},
    
        //计算属性：
        computed:{
            getsubtotal:function(){
                var sum = 0;
                for(var item of this.list){
                    sum += item.new_price * item.num;
                }
                return sum;
            },
            loginStatus(){
				return this.$store.state.loginStatus;
			}
        }
    }
</script>
<style>
ul{list-style-type: none;}
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
        padding-top:4rem;
		color: #999;
		font-size: 1rem;
		width: 100%;
		text-align: center;
	}
	/*购物车样式*/
.mui-table-view .mui-table-view-cell .mui-media-object{ max-width:50px;max-height:50px;}
.mui-table-view .mui-table-view-cell { padding:6px }
.mui-table-view .mui-table-view-cell .mui-ellipsis{ display:flex; justify-content: space-between}
.clearCar{margin-left:45px;}
/*分割块*/
.divider{height:10px;background:#f1f1f1;}

/*mui*/
.mui-card {
    font-size: 14px;
    position: relative;
    overflow: hidden;
    margin: 10px;
    border-radius: 2px;
    background-color: white;
    background-clip: padding-box;
}
.mui-card-header {
    font-size: 17px;
	color:#5d5d72
}
.mui-card-header, .mui-card-footer {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    min-height: 30px;
    padding: 10px 15px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.mui-card-header:after {
    top: auto;
    bottom: 0;
}
.mui-card-header:after, .mui-card-footer:before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
.mui-card-content {
    font-size: 14px;
    position: relative;
}
.mui-card-content-inner {
    position: relative;
    padding: 15px;
}
.mui-card-footer {
    color: #6d6d72;
    border-radius: 0 0 2px 2px;
}
.mui-table-view .mui-table-view-cell .mui-media-object {
    max-width: 50px;
    max-height: 50px;
}
.mui-table-view .mui-media-object.mui-pull-left {
    margin-right: 10px;
}
.mui-table-view .mui-media-object {
    line-height: 42px;
    max-width: 42px;
    height: 42px;
}
.mui-pull-left {
    float: left;
}
.mui-btn-numbox-minus {
    left: 0;
    border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
	 font-size: 18px;
    font-weight: normal;
    line-height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 40px;
    height: 100%;
    padding: 0;
    color: #555;
    border: none;
    border-radius: 0;
    background-color: #f9f9f9;
}
.mui-table-view .mui-table-view-cell .mui-ellipsis {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.mui-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mui-media-body p{
    margin-bottom:0.5rem;
}
.mui-numbox {
    position: relative;
    display: inline-block;
    overflow: hidden;
    width: 50px;
    height: 35px;
    padding: 0 40px 0 40px;
    vertical-align: top;
    vertical-align: middle;
    border: solid 1px #bbb;
    border-radius: 3px;
    background-color: #efeff4;
}
.mui-numbox .mui-input-numbox {
    display: inline-block;
    overflow: hidden;
    width: 100% !important;
    height: 100%;
    margin: 0;
    text-align: center;
    text-overflow: ellipsis;
    word-break: normal;
    border: none !important;
    border-right: solid 1px #ccc !important;
    border-left: solid 1px #ccc !important;
	border-radius: 0 !important;
	
}
.mui-btn-numbox-plus{
    right: 0;
    border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
	 font-size: 18px;
    font-weight: normal;
    line-height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 40px;
    height: 100%;
    padding: 0;
    color: #555;
    border: none;
    border-radius: 0;
	background-color: #f9f9f9;
	border-left:solid 1px #ccc !important
}

</style>