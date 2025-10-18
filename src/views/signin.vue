<template>
    <div class="min-h-screen bg-gray-900 flex">
        <div v-if="isDesktop" class="w-2/4 text-white flex justify-center items-center">
            <decs></decs>
        </div>

        <div v-if="isDesktop" class="w-3/4 text-white flex justify-center items-center">
            <siginForm old_or_new_user="Register" register_or_login="Register" login_or_signin="Login" status="Already have account?"/>
        </div>
        <div v-else class="w-screen text-white flex justify-center items-center">
            <siginForm old_or_new_user="Register" register_or_login="Register" login_or_signin="Login" status="Already have account?"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import siginForm from '@/components/sigin-form.vue';
import decs from '@/components/decs.vue';
import { ref, onMounted } from 'vue';


const isDesktop = ref(false)

const checkScreen = () => {
    isDesktop.value = window.innerWidth >= 1200
}

onMounted(() =>{
    checkScreen()
    window.addEventListener('resize', checkScreen)
})
</script>