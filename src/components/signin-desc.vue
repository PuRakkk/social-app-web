<template>
    <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 w-3/4 h-3/4">
        <div></div>
        <h1 class="text-teal-400 dark:text-teal-400 mt-5 font-medium tracking-tight font-mono text-2xl">
            {{ Welcome }}
            <span class="animate-blinkCaret border-r-2 border-gray-900 dark:border-white"></span>
        </h1>
        <p class="text-teal-600 dark:text-teal-600 mt-12 text-sm font-mono">
            QuixShare is your new favorite social app designed to connect you with friends, family, and communities
            worldwide.
            Share your moments instantly, explore trending posts, and engage with content through likes, comments, and
            shares —
            all in a seamless and intuitive interface.
        </p>
        <p class="text-teal-600 dark:text-teal-600 mt-4 text-sm font-mono">
            Whether you're capturing everyday life or discovering new interests, QuixShare empowers you to express
            yourself
            freely and stay connected in real-time. Experience the next generation of social networking built for you.
        </p>
        <h1 class="text-teal-400 dark:text-teal-400 mt-20 font-medium tracking-tight font-mono text-xl">
            {{ registerMessage }}
            <span class="animate-blinkCaret border-r-2 border-gray-900 dark:border-white"></span>
        </h1>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';

const fullText = 'Welcome to QuixShare...';
const registerText = 'What are you waiting for? Register now...!';

const Welcome = ref('');
const registerMessage = ref('');

onMounted(() => {
  let currentIndex = 0;
  let registerIndex = 0;
  let phase = 'typingWelcome';

  const typeSpeed = 20;
  const pauseTime = 2500;

  function loop() {
    switch (phase) {
      case 'typingWelcome':
        if (currentIndex < fullText.length) {
          Welcome.value += fullText[currentIndex++];
          setTimeout(loop, typeSpeed);
        } else {
          phase = 'pauseAfterWelcome';
          setTimeout(loop, pauseTime);
        }
        break;

      case 'pauseAfterWelcome':
        phase = 'swapping';
        setTimeout(loop, typeSpeed);
        break;

      case 'swapping':
        if (currentIndex > 0 || registerIndex < registerText.length) {
          if (currentIndex > 0) {
            Welcome.value = Welcome.value.slice(0, -1);
            currentIndex--;
          }
          if (registerIndex < registerText.length) {
            registerMessage.value += registerText[registerIndex++];
          }
          setTimeout(loop, typeSpeed);
        } else {
          phase = 'pauseAfterRegister';
          setTimeout(loop, pauseTime);
        }
        break;

      case 'pauseAfterRegister':
        phase = 'deletingRegister';
        setTimeout(loop, typeSpeed);
        break;

      case 'deletingRegister':
        if (registerMessage.value.length > 0) {
          registerMessage.value = registerMessage.value.slice(0, -1);
          setTimeout(loop, typeSpeed);
        } else {
          currentIndex = 0;
          registerIndex = 0;
          phase = 'typingWelcome';
          setTimeout(loop, typeSpeed);
        }
        break;
    }
  }

  loop();
});


</script>

<style scoped>

@keyframes blinkCaret {
    0%, 100%{
        border-color: transparent;
    }
    50% {
        border-color: currentColor;
    }
}

.animate-blinkCaret {
    animation: blinkCaret 0.75s step-end infinite;
}

</style>