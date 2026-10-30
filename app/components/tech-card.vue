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
    <div class="flex h-full w-full justify-center">

        <article
            class="max-w-[250px] w-full h-full bg-black/60 text-white border border-white/10 shadow-lg rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(179,154,160,0.4)] hover:border-white/30">
            <img :src="image" :alt="name + ' Logo'" class="w-20 h-20 object-contain mx-auto mb-3" />

            <h3 class="font-['Montserrat'] font-semibold text-base">
                {{ name }}
            </h3>

        </article>

    </div>
</template>