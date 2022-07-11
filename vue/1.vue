
<script>
     const vm = new Vue({
        el:'#root',
        data:{
            opacity:1
        },
        methods: {
            stop(){
                this.$destroy()
            }
        },
        mounted() {
            this.timer = setInterval(()=>{
                this.opacity -= 0.01
                if(this.opacity <= 0) this.opacity = 1
            },16)
        },
        beforeDestroy() {
            console.log('vm要被销毁了');
            clearInterval(this.timer)
        },
    })
</script>