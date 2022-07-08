<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const message = $ref('Checking your credentials...')
const hash = $computed(() => route?.hash.split('#token=')[1])

const verifyToken = async ({ hash }: { hash: string }) => {
  const { data } = await useAsyncQuery(['users.verify-otp', { hash }])

  console.log('data', data)
  router.push(data?.redirect?.includes('login') ? '/' : data?.redirect || '/')
}

watchEffect(() => {
  if (hash)
    verifyToken({ hash })
})
</script>

<template>
  <div>
    {{ message }}
  </div>
</template>
