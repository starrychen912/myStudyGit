<template>
    <div>
        <h1>当前求和为:{{sum}}</h1>
        <select v-model.number="n">
            <!-- 因为value值绑定的不是: 所以是字符串会拼串 可以model加number修饰符-->
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            n:1,//用户选择的数字
            

        }
    },
    computed:{
        sum(){
           return this.$store.data.sum
        },
    // 使用mapState 映射代码 es6新特性 把mapstate每个对象 都解构加入computed  为什么不用简写因为sum不是变量是一个值
    ...mapState({sum:'sum'}),
    ...mapState(['sum']),
    // 借助mapGetters生成属性,从getters中读取数据(数组写法)
    ...mapState(['bigsum'])
    },
    methods:{
        increment(){
            // action没有他要的业务逻辑
            this.$store.commit('jia',this.n)
        },
        decrement(){
            this.$store.commit('jian',this.n)
        },
        
        incrementOdd(){
            this.$store.dispatch('jia',this.n)
        },
        incrementWait(){
            this.$store.dispatch('jia',this.n)
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
button{
    margin-left: 5px;
}
</style>