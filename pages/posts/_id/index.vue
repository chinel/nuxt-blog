<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPost.updatedDate }}
        </div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <div>
        <p class="post-content">{{ loadedPost.content }}</p>
      </div>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@blog.com">feedback@blog.com</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data

    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({
          loadedPost: {
            id: '1',
            author: 'Ann',
            title: `This is my First Post (ID: ${context.params.id})`,
            updatedDate: new Date(),
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc at tellus vehicula consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc at tellus vehicula consequat.',
            thumbnailLink:
              'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
            previewText:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nunc at tellus vehicula consequat.',
          },
        })
      }, 1000)

      // if you want to throw an error, comment out the settimeout above and use the below
      // reject(new Error('An Error occured.'))
    })
      .then((data) => {
        return data
      })
      .catch((e) => context.error(e.message))
  },
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 790px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
