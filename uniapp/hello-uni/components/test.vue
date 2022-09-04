<template>
	<view id="id">
	组件test{{num}}
	</view>
</template>

<script>
	export default {
		name:"test",
		data() {
			return {
				num:3,
				intId:null
			};
		},
		beforeCreate() {
			console.log('beforeCreate',this.num)
		},
		created() {
			console.log('created',this.num)
			this.intId=setInterval( ()=>{
				console.log('执行定时器')
			},1000)
		},
		beforeMount() {
			console.log('beforeMount',document.getElementById('id'))
		},
		mounted() {
			console.log('beforeMount',document.getElementById('id'))
		},
		destroyed() {
			console.log('组件销毁了')
			// 虽然组件可以关闭定时器不能
			clearInterval(this.intId)
		}
		
		
	}
</script>

<style>

</style>