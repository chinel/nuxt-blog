export default function (context) {
  // console.log('middleware [auth]')
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}
