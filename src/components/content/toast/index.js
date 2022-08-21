import Toast from './Toast.vue'

const obj={}


//一旦在main.js中执行了Vue.use(toast) 就会来执行这个install函数
obj.install=function(Vue){
	console.log("执行了toast obj的install函数")
	// console.log(Vue)
	// 1 创建组件构造器
	const toastConstructor=Vue.extend(Toast)
	// 2 new的方式 可以创建出来一个组件对象
	const toast=new toastConstructor()
	// 3 将组件对象 手动挂载到某一个元素上
	toast.$mount(document.createElement('div'))
	// 4 toast.$el对应的就是div
	document.body.appendChild(toast.$el)

	Vue.prototype.$toast=toast
	
}


export default obj


// import Toast from './Toast.vue'
// const obj={
// }
// obj.install=function(Vue){
//     console.log("将toast插件安装进了vue")
//     const toastContrustor=Vue.extend(Toast) 
//     const toast =new toastContrustor()
//     toast.$mount(document.createElement('div'))
//     document.body.appendChild(toast.$el)
//     Vue.prototype.$mytoast=toast
//     console.dir(Vue)
// }

// export default obj