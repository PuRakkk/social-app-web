<template>
    <div class="min-h-screen bg-gray-900 flex">
        <div class="w-2/4 text-white flex justify-center items-center">
            <signinDesc />
        </div>
        <div class="w-2/4 text-white flex justify-center items-center">
            <siginForm />
        </div>
    </div>
</template>

<script setup lang="ts">
import signinDesc from '@/components/signin-desc.vue';
import siginForm from '@/components/sigin-form.vue';


const label = 'login'
</script>