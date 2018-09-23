<template>
  <div class="login">
    <div class="floor">
      <span>用户名：</span><input placeholder="请输入用户名" type="text" ref="userName" />
    </div>
    <div class="floor">
      <span>密&nbsp;&nbsp;码：</span><input placeholder="请输入密码" type="password" />
    </div>
    <div class="floor">
      <input type="submit" value="一键登录" @click="send"/>

    </div>
    <span @click="goHome"><<去首页</span>
  </div>
</template>
<style scoped>
  @import url(./login.css);
</style>
<script>
  export default {
    methods: {
      send(){
        let userName=this.$refs.userName.value
        this.$local.save('t.tt',{
          login:true,
          userName:userName
        })
        this.$router.push('/')
      },
      goHome(){
        this.$router.push('/')
      }
    }
  }
</script>
