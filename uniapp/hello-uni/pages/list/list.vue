<template>
	<view class="">
		<button @click="get">发送get请求</button>
		<button @click="dataStorage">存储数据</button>
		<button @click="getStorage">获取数据</button>
		<button @click="removeStorage">移除数据</button>
		<view class="box-item" >
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:['aaa','ssss','ddddd']
			}
		},
		onPullDownRefresh() {
			setTimeout(()=>{
				this.list = ['llll','qqqq']
				uni.stopPullDownRefresh()
			})
		},
		methods:{
			get(){
				uni.request({
					url:'http://localhost:8082/api/getlunbo',
					success(res){
						console.log(res)
					}
				})
			},
			dataStorage(){
				// uni.setStorage({
				// 	key:'id',
				// 	data:80,
				// 	success(res){
				// 		console.log('数据成功',res)
				// 	}
				// })
				uni.setStorageSync('id',100)
			},
			getStorage(){
				uni.getStorage({
					key:'id',
					success(res) {
						console.log(res.data,'获取数据')
					}
				})
			},
			removeStorage(){
				uni.removeStorage({
					key:'id',
					success(res) {
						console.log('移除成功',res)
					}
				})
			}
		}
	}
</script>

<style>
</style>