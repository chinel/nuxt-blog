<template>
  <div>
    <form @submit.prevent="onSave">
      <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

      <AppControlInput v-model="editedPost.title">Title</AppControlInput>

      <AppControlInput v-model="editedPost.thumbnailLink"
        >Thumbnail Link</AppControlInput
      >

      <AppControlInput v-model="editedPost.previewText" control-type="textarea"
        >Preview Text</AppControlInput
      >

      <AppControlInput v-model="editedPost.content" control-type="textarea"
        >Content</AppControlInput
      >

      <AppButton type="submit">Save</AppButton>

      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel"
        >Cancel</AppButton
      >
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton'
import AppControlInput from '@/components/ui/AppControlInput'

export default {
  name: 'BlogAdminPostForm',
  components: {
    AppButton,
    AppControlInput,
  },
  props: {
    post: {
      type: Object,
      required: false,
      default: function () {
        return {
          author: '',
          title: '',
          thumbnailLink: '',
          previewText: '',
          content: '',
        }
      },
    },
  },
  data() {
    return {
      editedPost: this.post,
    }
  },
  methods: {
    onSave() {
      // Save the post
      // console.log(this.editedPost)
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin')
    },
  },
}
</script>
