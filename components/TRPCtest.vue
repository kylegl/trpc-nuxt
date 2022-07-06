<script setup lang="ts">
const client = useClient()

const users = await client.query('getUsers')
</script>

<template>
  <div>
    {{ users }}
  </div>
</template>
