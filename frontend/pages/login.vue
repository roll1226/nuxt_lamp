<template>
  <div>
    <input v-model="uid" type="text" />
    <label>ユーザ名</label>
    <br />
    <input v-model="passwd" type="password" />
    <label>パスワード</label>
    <br />
    <button @click="api()">ログイン</button>
    {{ data }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'pagebase',
  data() {
    return {
      data: '',
      uid: '',
      passwd: '',
      login: 'login',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }
  },
  methods: {
    async api() {
      const params = new URLSearchParams()
      params.append('user', this.uid)
      params.append('passwd', this.passwd)
      params.append('login', this.login)
      await axios
        .post('http://localhost:8080/test_nuxt/test.php', params)
        .then(response => {
          this.data = response.data
        })
        .catch(e => {
          this.data = e
        })
    }
  }
}
</script>
