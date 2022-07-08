<script setup lang="ts">
let showLogin = $ref(false)
const toggleLogin = () => showLogin = !showLogin
</script>

<template>
  <div relative>
    <button rounded p2 bg-purple-8 @click="toggleLogin">
      Login
    </button>
    <div>
      <Logos mb-6 />
      <Suspense>
        <PageView />
        <template #fallback>
          <div op50 italic>
            <span animate-pulse>Loading...</span>
          </div>
        </template>
      </Suspense>
      <InputEntry />
    </div>

    <Login v-if="showLogin" />
  </div>
</template>
