<template>
  <AppModal 
    size="sm"
    @closed="" 
    :class="true ? 'modal--is-visible' : ''"
  >
    <h2 class="text-md margin-bottom-sm">Crawl a website</h2>
    
    <form action="#" @submit.prevent="create()">
      <AppInput v-model="crawl.url" label="URL" placeholder="https://" required />

      <div class="margin-top-md margin-bottom-sm">
        <button class="btn btn--primary btn--md width-100%">Start crawl</button>
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import { ref } from 'vue'
// import { useCrawlStore } from '@/domain/crawls/store/useCrawlStore'
import AppModal from '@/app/components/AppModal.vue'
import AppInput from '@/app/components/forms/AppInput.vue'

// const store = useCrawlStore()

const crawl = ref({
  url: '',
})

function create() {
  // store.store(crawl.value)
  //   .then(() => {
  //     store.toggleCreateModal()
  // 
  //     crawl.value = {
  //       url: '',
  //     }
  //   })
}
</script>
