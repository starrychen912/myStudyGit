<template>
	<view class="">
		<button type="primary" @click="choosePic">上传图片</button>
		<img :src="item"  alt="" v-for="(item,index) in listPath" :key="index" @click='prePic(item)'>
		<!-- #ifdef H5 -->
		<view class="">
			在h5展示
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="">
			在微信小程序显示
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				listPath:[]
			} 
		},
		methods:{
			choosePic(){
				uni.chooseImage({
					count:5,
					success:res=> {
						this.listPath = res.tempFilePaths
					}
				})
			},
			prePic(current){
				uni.previewImage({
					current,
					urls:this.listPath
				})
			}
		},
		onLoad() {
			//  #ifdef H5
			console.log('h5 显示')
			// #endif
		}
	}
</script>

<style>
	/* #ifdef H5 */
	view{
		color: pink;
	}
	/* #endif */
	/* #ifdef MP-WEIXIN */
	view{
		color: blue;
	}
	/* #endif */
</style>