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
      error: '',
    }
  },

  methods: {
    onSubmit() {
      let path
      if (!this.isLogin) {
        path = 'signUp'
      } else {
        path = 'signInWithPassword'
      }
      this.$axios
        .$post(
          `https://identitytoolkit.googleapis.com/v1/accounts:${path}?key=${process.env.fbAPIKEY}`,
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((result) => {
          this.error = ''
          console.log(result)
        })
        .catch((error) => {
          if (error.message === 'Request failed with status code 400') {
            this.error = 'Email Address already exists'
          } else {
            this.error = 'An error occured. Please try again.'
          }
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
