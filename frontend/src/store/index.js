import axios from 'axios'
const php = 'http://localhost:8080/PH22/login/'

export const state = () => ({
  lr: 'ok',
  data: '',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
})

export const mutations = {
  changeData(state, payload) {
    state.data = payload
  },
  error(state, payload) {
    state.data = payload
  }
}

export const actions = {
  LR({ commit, state }, payload) {
    const params = new URLSearchParams()
    params.append('user', payload.userId)
    params.append('passwd', payload.userPasswd)
    if (payload.num === '1') {
      params.append('login', state.lr)
    } else {
      params.append('regist', state.lr)
    }
    axios
      .post(php + 'db.php', params)
      .then(response => {
        commit('changeData', response.data)
      })
      .catch(e => {
        commit('error', e)
      })
  }
}

export const getters = {
  data(state) {
    return state.data
  }
}
