<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <div v-if="error !== ''" class="error">
        <span> {{ error }}</span>
      </div>
      <form class="auth-form" @submit.prevent="onSubmit">
        <AppControlInput v-model="email" type="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput v-model="password" type="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: '',
    }
  },

  computed: {
    error() {
      return this.$store.getters.authError
    },
  },

  methods: {
    onSubmit() {
      this.$store
        .dispatch('authenticateUsers', {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res)
          this.$router.push('/admin')
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
</script>

<style scoped>
.error {
  background-color: #ff0000;
  color: #ffffff;
  padding: 10px;
  text-align: center;
}
.admin-auth-page {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 500px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

.auth-form {
  display: flex;
  flex-direction: column;
  row-gap: 11px;
}
</style>
