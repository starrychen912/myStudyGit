<template>
	<view>
		<view class="">
			<text>详情页-money</text>
		</view>
		<view class="">
			<text selectable="">详情页-music</text>
		</view>
		<view class="">
			<text selectable space="ebsp" style="font-size: 14px;">详情页 123</text>
		</view>
		<!-- 阻止冒泡  -->
		<view class="box" hover-class="box-active">
			<view class="box1" hover-class="box1-active" hover-stop-propagation :hover-start-time="5000"
				:hover-stay-time="5000">
				我是box1
			</view>
		</view>
		<button size="mini" type="primary" >按钮</button>
		<img src="" alt="">
	</view>

</template>

<script>
	export default{
		onLoad(options) {
			console.log(options)
		}
	}
</script>

<style>
	.box {
		width: 200px;
		height: 200px;
		background-color: #27ff39;
	}

	.box-active {
		background-color: aqua;
	}

	.box1 {
		width: 100px;
		height: 100px;
		background-color: #fc0006;
	}

	.box1-active {
		background-color: blue;
	}
</style>
