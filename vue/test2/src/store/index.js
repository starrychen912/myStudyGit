import Vuex from 'vuex'
// 该文件用来创建vuex中最核心的store
// 准备actions 用于响应组件中的动作
// 业务逻辑写这里
const actions = {
    jia: function (context, value) {
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('JIA',value)
        })
    }
}
// 准备 mutations 用于操作数据(state)
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    }
}
// 准备state 用于存储数据
const state = {
    sum: 0,//当前和
    school:'前端'
}

const getters = {
    bigSum(state){
        return state.sum * 10
    }
}
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

// 暴露store 导出
