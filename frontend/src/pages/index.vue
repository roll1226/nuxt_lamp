<template>
  <div>
    <input v-model="uid" type="text" />
    <label>ユーザ名</label>
    <br />
    <input v-model="passwd" type="password" />
    <label>パスワード</label>
    <br />
    <button @click="apiLogin()">ログイン</button>
    <button @click="apiRegist()">登録</button>
    <h2>
      {{ $store.getters.data }}
    </h2>
  </div>
</template>

<script>
export default {
  layout: 'pagebase',
  data() {
    return {
      uid: '',
      passwd: '',
      Lnum: '1',
      Rnum: '2'
    }
  },
  methods: {
    apiLogin() {
      this.$store.dispatch('LR', {
        userId: this.uid,
        userPasswd: this.passwd,
        num: this.Lnum
      })
    },
    apiRegist() {
      this.$store.dispatch('LR', {
        userId: this.uid,
        userPasswd: this.passwd,
        num: this.Rnum
      })
    }
  }
}
</script>
