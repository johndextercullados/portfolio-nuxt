<script setup>

defineProps({
    // this is like the parameter, need meron to show
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="w-[140px] sm:w-[160px] flex justify-center">
        <article
            class="flex h-full w-full flex-col items-center justify-center rounded-xl border border-white/10 bg-black/60 p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-white">
            <div class="mb-3 flex h-16 w-16 items-center justify-center">
                <img :src="image" :alt="name + ' Logo'" class="block mx-auto max-h-full max-w-full object-contain" />
            </div>
            <h3 class="text-center font-['Montserrat'] font-semibold text-white">
                {{ name }}
            </h3>
        </article>
    </div>
</template>