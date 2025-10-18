<template>
    <div class="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
        <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
            <div class="w-full flex items-center justify-center">
                <img class="w-24 h-24" src="/src/images/quix-share-logo.png">
            </div>
            <h1 class="text-lg font-bold text-center text-gray-900 dark:text-white font-mono">
                {{ old_or_new_user }} to QuixShare
            </h1>

            <button @click="" type="button"
                class="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition duration-300">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5" />
                <span class="text-xs md:text-sm lg:text-lg:">Continue with Google account</span>
            </button>

            <div class="relative text-center">
                <span class="text-sm text-gray-400 dark:text-gray-500">or {{ register_or_login }} with email</span>
            </div>

            <form @submit.prevent class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input id="email" type="email" required
                        class="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-600 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                        placeholder="Enter your email">
                </div>

                <div class="relative">
                    <label for="password"
                        class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                    <input id="password" :type="show ? 'text' : 'password'" required
                        class="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-600 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm viewBox="
                        placeholder="Enter your password"/>
                    <span
                        class="absolute right-3 top-1/2 cursor-pointer text-gray-300 hover:text-white flex item=center justify-center"
                        @click="show = !show">
                        {{ show ? '🙈' : '👁️' }}
                    </span>
                </div>

                <div v-if="register_or_login == 'Login'" class="flex items-center space-x-2">
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" name="remember_me"
                            class="w-5 h-5 text-green-500 bg-gray-800 border-gray-600 rounded focus:ring-2 focus:ring-white focus:ring-offset-1">
                        <span class="ml-2 text-white text-xs md:text-sm select-none">Remember me</span>
                        <span>
                            <router-link :to="`/reset_password`"
                                class="ml-12 text-xs md:text-sm text-blue-400 hover:underline">Forgot
                                password</router-link>
                        </span>
                    </label>
                </div>

                <div class="pt-4">
                    <button type="submit"
                        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                        {{ register_or_login }}
                    </button>
                </div>

                <p class="text-center text-sm text-gray-600 dark:text-gray-400 pt-2">
                    {{ status }}
                    <router-link :to="`/${login_or_signin}`" class="text-blue-600 hover:underline dark:text-blue-400">
                        {{ login_or_signin || "Register" }}
                    </router-link>
                </p>

            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const show = ref(false)
defineProps<{
    register_or_login: string
    login_or_signin: string
    status: string
    old_or_new_user: string | null
}>()


</script>