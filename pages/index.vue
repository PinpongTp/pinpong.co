<template>
  <div>
    <div class="block">
      <p>
        สวัสดีครับ ผมรวมโน็ตวิธีการเทคนิคต่างๆในการเขียนโปรแกรมไว้เพื่อกันลืม
        และเผื่อจะเป็นข้อมูลให้เพื่อนๆได้ครับ ดูโน็ตทั้งหมดได้ที่หน้าโน็ตเลยครับ
        หากมีคำถามหรืออยากได้คำแนะนำติดต่อได้ครับ
      </p>
    </div>
    <div class="noteList">
      <div v-for="article of articles" :key="article.slug" class="noteItem">
        <nuxt-link :to="{ path: `/note/${article.slug}` }">
          <p>{{ article.title }}</p>
        </nuxt-link>
        <p style="color: #333">{{ article.description }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HomePage',
  async asyncData({ $content, params }) {
    const articles = await $content('note', params.slug)
      .only(['title', 'description', 'slug'])
      .sortBy('path', 'desc')
      .fetch()
    return {
      articles,
    }
  },
})
</script>

<style scoped>
.noteItem {
  padding-top: 1em;
}

hr {
  border-top: chocolate 1px solid;
  opacity: 0.25;
}
</style>
