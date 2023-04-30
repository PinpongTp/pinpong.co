<template>
  <div>
    <div class="block">
      <h3>Tips</h3>
      <div v-for="tip of tips" :key="tip.slug">
        <nuxt-link :to="{ path: `/note/${tip.slug}` }">
          <div class="article-inner">
            <div class="detail">
              <p>
                {{ tip.title }}
                <span class="tags" v-for="tag of tip.tags" :key="tag">{{
                  tag
                }}</span>
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="block">
      <h3>Notes</h3>
      <div v-for="note of notes" :key="note.slug">
        <nuxt-link :to="{ path: `/note/${note.slug}` }">
          <div class="article-inner">
            <div class="detail">
              <p>
                {{ note.title }}
                <span class="tags" v-for="tag of note.tags" :key="tag">{{
                  tag
                }}</span>
                <span class="tags" v-if="note.tags">{{ note.tags }}</span>
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NotePage',
  async asyncData({ $content, params }) {
    const tips = await $content('note', params.slug)
      .only(['title', 'description', 'slug', 'tags'])
      .where({ category: 'Tips' })
      .sortBy('path', 'asc')
      .fetch()

    const notes = await $content('note', params.slug)
      .only(['title', 'description', 'slug'])
      .where({ category: 'Note' })
      .sortBy('path', 'asc')
      .fetch()

    return {
      tips,
      notes,
    }
  },
  head() {
    return {
      title: `Notes | Pinpong.co`,
    }
  },
})
</script>
