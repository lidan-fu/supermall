import request from "@/network/request.js"

//根据id获得单个商品数据
export function getGoodsDetails(iid){
	return request({
		method:'GET',
		url:'/detail',
		params:{
			iid
		}
	})
}

//获取推荐商品数据
export function getRecommend() {
  return request({
    url: "/recommend"
  });
}

export class Goods{
	constructor(iteminfo,columns,shopInfo){
		this.title=iteminfo.title
		this.price=iteminfo.price
		this.oldprice=iteminfo.oldPrice
		this.discountDesc=iteminfo.discountDesc
		this.columns=columns
		this.shopService=shopInfo.services
		this.lowNowPrice=iteminfo.lowNowPrice
	}
}