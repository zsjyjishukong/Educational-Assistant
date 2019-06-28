<template>
  <div id="login-page">
    this is login page
  </div>
</template>

<script>
import {login} from '../api/login'

export default {
  name: 'login',
  data () {
    return {

    }
  },
  methods: {
    async login (studentID, password) {
      let res = await login(studentID, password)
      return res
    }
  }
}
</script>

<style scoped>

</style>
