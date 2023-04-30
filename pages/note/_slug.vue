<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    article: any
  }
}

export default Vue.extend({
  async asyncData({ $content, params }): Promise<{ article: any }> {
    const article = await $content('note', params.slug).fetch()
    return {
      article,
    }
  },
  head() {
    return {
      title: `Note: ${this.article.title} | Pinpong.co`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
      ],
    }
  },
})
</script>
