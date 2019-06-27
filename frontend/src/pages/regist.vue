<template>
  <div>
    <input v-model="uid" type="text" />
    <label>ユーザ名</label>
    <br />
    <input v-model="passwd" type="password" />
    <label>パスワード</label>
    <br />
    <button @click="api()">登録</button>
    <h2>
      {{ data }}
    </h2>
  </div>
</template>

<script>
import axios from 'axios'
const php = 'http://localhost:8080/PH22/login/'

export default {
  layout: 'pagebase',
  data() {
    return {
      data: '',
      uid: '',
      passwd: '',
      regist: 'regist',
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
      params.append('regist', this.regist)
      await axios
        .post(php + 'db_old.php', params, this.headers)
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
