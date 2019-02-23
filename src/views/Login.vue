<template>
  <div>
    <h1>这是登录页面</h1>
    <input type="text" placeholder="用户名" v-model="username"/>
    <input type="password" placeholder="密码" v-model="password"/>
    <button @click="handleLogin">登陆</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 登陆页面
    handleLogin () {
      axios.post('http://localhost:3000/user/login', {
        userName: this.username,
        password: this.password
      }).then(response => {
        var res = response.data;
        if (res.code === 0) {
          // 登陆成功   保存数据
          sessionStorage.setItem('nickname', res.data.nickName);
          // 跳转页面   这个页面是固定页面（客户想去的页面）
          // this.$router.push('/card');
          this.$router.replace({
            path: this.$route.query.redirect
          });
        } else {
          alert(res.msg);
        }
        console.log(res);
      })
    }
  }
}
</script>
