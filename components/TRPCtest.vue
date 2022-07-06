<script setup lang="ts">
const { data: users } = await useAsyncQuery(['users.getUsers'])
</script>

<template>
  <div>
    {{ users }}
  </div>
</template>
