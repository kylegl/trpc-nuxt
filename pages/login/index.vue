<script setup lang="ts">
const { verifyToken, setUser } = useUserStore()

const route = useRoute()
const router = useRouter()
const message = $ref('Checking your credentials...')
const hash = $computed(() => route?.hash.split('#token=')[1])

watchEffect(() => {
  if (hash) {
    const res = verifyToken({ hash })
    console.log('verify res', res)
    if (res) {
      setUser()
      router.push(res?.redirect?.includes('login') ? '/' : res?.redirect || '/')
    }
  }
})
</script>

<template>
  <div>
    {{ message }}
  </div>
</template>
