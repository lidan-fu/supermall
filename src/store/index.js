import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		cartList:[
		{
			"title":"2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
			"iid":"1m70y5k",
			"img":"//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg",
			"price":"59.00",
			"count":1,
			"checked":true
		},
		{"title":"2018春秋季新款韩版百搭连帽卫衣+松紧腰长裤时尚运动套装两件套女学生","iid":"1kihxey","img":"//s3.mogucdn.com/mlcdn/c45406/170823_0d997dch3jkl8ed225ejbba76j2lf_640x832.jpg","price":"57.00","count":1,"checked":true},
		{"title":"套装女春秋2018新款时尚复古气质个性连帽卫衣两件套","iid":"1m7jj7a","img":"//s11.mogucdn.com/mlcdn/c45406/180825_4figj590flej05g556d6ll8ka09a7_640x902.jpg","price":"148.00","count":1,"checked":true}

		]
	},
	getters:{
		cartListLength(state){
			return state.cartList.length
		}
	},
	mutations:{
		addCount(state,payload){
			payload.count+=1
		},
		addToCart(state,payload){
			state.cartList.push(payload)
		}
	},
	actions:{
		addCart({state,commit},product){
			return new Promise((resolve,reject)=>{
				let oldProduct=null
				state.cartList.forEach(item=>{
					if(item.hasOwnProperty('iid')&&item.iid==product.iid){
						oldProduct=item
					}
				})
				//如果添加的商品已存在 调用数量+1方法
				if(oldProduct){
					commit("addCount",oldProduct)
					resolve("商品添加成功")
				}else{
					//如果是新商品 将新商品信息加入cartList
					product.count=1
					commit("addToCart",product)
					resolve("商品添加成功")
				}
			})
		}
	}
})

export default store