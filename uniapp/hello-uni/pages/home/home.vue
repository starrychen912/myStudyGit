<template>
	<view class="">
		{{msg}}
		<view class="">
			<button @click="fresh"></button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				msg:'hello kary'
			}
		},
		// 下拉刷新 事件监听
		onPullDownRefresh(){
			this.msg = 'refresh kary'
		},
		methods:{
			// 通过绑定事件去开启监听
			fresh(){
				uni.startPullDownRefresh()
			}
		}
		
	}
</script>

<style>
</style>