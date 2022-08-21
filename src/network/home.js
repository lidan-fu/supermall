import request from "@/network/request.js"

export function getHomeMultidata(){
	return request({
		method:'GET',
		url:'/home/multidata'
	})
}

export function getHomeGoods(type,page){
	return request({
		method:'GET',
		url:'/home/data',
		params:{
			type,
			page
		}
	})
}