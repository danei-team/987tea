import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store=new Vuex.Store({
	state:{
		cartlist:[],
		cartCount:0,  //共享购物车数量
		loginForm:{
			username:'',
			password:''
		},
		// 登录状态
		loginStatus:false
	},
	getters:{	//获取并监听数据的方法
			userLoginStatus: state => {
				console.log('入参zzzzz：',state.loginStatus);
		      	return state.loginStatus;
			},
			optCount:function(state){  
				return state.cartCount;
			},
			optList:function(state){
				return state.cartlist
			}
	},
	mutations:{
		SET_LOGINSTATUS:(state,newLoginStatus) => {
			state.loginStatus=newLoginStatus;
			console.log('入参：',state.loginStatus);
		},
		increment(state){ 
			state.cartCount++
		}, //加
		substract(state){
			state.cartCount-- 
		},  //减
		clearCount(state){
			 state.cartCount=0 
			 state.cartlist=[]
		},  //清空
		addCart(state,shop){
			state.cartlist.push(shop)
		}
	},
	actions:{
		setloginStatus({ dispatch,commit, state},newLoginStatus){
			commit('SET_LOGINSTATUS',newLoginStatus);
		}
	}
})
export default store;