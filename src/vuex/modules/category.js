import {RECEIVE_CATEGORYS} from '../mutation-types'
import {reqCategoryData} from '../../api'


// 初始状态
const state ={
  categoryData:{},
}

// 在mutations中直接修改state中的状态
const mutations = {
  [RECEIVE_CATEGORYS](state,categorys){
    state.categoryData=categorys
  }
}

// 异步获取categorys列表，通过actions
    const actions ={
      // 异步发送ajax请求
      async getCategory({commit}){
        const response = await reqCategoryData()
        const result = response.data

        // // 成功后,提交mutation去更新状态数据
        const categorys = result
        commit(RECEIVE_CATEGORYS,categorys)

      }
    }

const getters = {}

export default{
  state,
  mutations,
  actions,
  getters
}
