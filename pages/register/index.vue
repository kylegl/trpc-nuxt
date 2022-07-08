<script setup lang="ts">
const { registerUser } = useUserStore()
const router = useRouter()

const name = $ref('')
const email = $ref('')

const handleSubmit = async () => {
  const newUser = await registerUser({ name, email })

  if (newUser)
    router.push('/login')
}

definePageMeta({
  layout: 'public',
})
</script>

<template>
  <div text-zinc-9>
    <form flex="~ col" gap3 w="1/2" @submit.prevent="handleSubmit">
      <h2>Register</h2>
      <input v-model="name" type="text" placeholder="name">
      <input v-model="email" type="email" placeholder="email">
      <button type="submit" bg-gray rounded p2 m-auto>
        Register
      </button>
    </form>

    <nuxt-link to="/login">
      login
    </nuxt-link>
  </div>
</template>
