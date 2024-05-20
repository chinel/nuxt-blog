<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form class="auth-form">
        <AppControlInput type="email">E-Mail Address</AppControlInput>
        <AppControlInput type="password">Password</AppControlInput>
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
    }
  },
}
</script>

<style scoped>
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
