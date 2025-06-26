<template>
    <div class="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
        <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
            <h1 class="text-3xl font-bold text-center text-gray-900 dark:text-white font-mono">
                Register Form
            </h1>

            <button @click="registerWithGoogle" type="button" class="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition duration-300">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5" />
                Continue with Google
            </button>

            <div class="relative text-center">
                <span class="text-sm text-gray-400 dark:text-gray-500">or {{ label }} with email</span>
            </div>

            <form @submit.prevent class="space-y-4">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input id="email" type="email" required
                        class="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-600 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email">
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                    <input id="password" type="password" required
                        class="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-600 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password">
                </div>

                <div class="pt-4">
                    <button
                    type="submit"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Register
                    </button>
                </div>

                <p class="text-center text-sm text-gray-600 dark:text-gray-400 pt-2">
                    Already have an account?
                    <a href="/login" class="text-blue-600 hover:underline dark:text-blue-400">Login</a>
                </p>

            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

const label = "register"
</script>