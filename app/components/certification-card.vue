<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        default: '',
    },
    issuerDate: {
        type: String,
        required: true,
    },
    badgeImage: {
        type: String,
        required: true,
    },
    credlyUrl: {
        type: String,
        required: true,
    },
    certModalId: {
        type: String,
        required: true,
    },
})

// Function to trigger DaisyUI dialog modal
const openModal = (id) => {
    const modal = document.getElementById(id)
    if (modal && typeof modal.showModal === 'function') {
        modal.showModal()
    }
}

</script>

<template>
    <article
        class="card h-full w-full rounded-2xl border border-white/10 bg-black/75 p-6 text-white shadow-2xl backdrop-blur-xl transition-transform hover:-translate-y-2 hover:border-white">

        <button type="button" class="mx-auto block w-full cursor-zoom-in" :aria-label="`View full ${title} certificate`"
            @click="openModal(certModalId)">
            <img :src="badgeImage" :alt="`${title} Badge`" class="mx-auto max-h-56 w-full object-contain" />
        </button>

        <div class="mt-4 text-center">

            <!-- Display ng title, subtitle, and issuer date -->
            <h2 class="font-['Montserrat'] font-semibold text-lg text-white">
                {{ title }}
            </h2>

            <p v-if="subtitle" class="font-['Montserrat'] font-semibold text-base text-gray-200">
                {{ subtitle }}
            </p>

            <p class="mt-2 font-['Montserrat'] text-sm text-gray-300">
                {{ issuerDate }}
            </p>

            <div class="mt-4">
                <a :href="credlyUrl" target="_blank" rel="noopener noreferrer"
                    class="btn btn-outline btn-sm border-white/20 text-white hover:bg-white/10">
                    Verify Credential
                </a>
            </div>

        </div>

    </article>
</template>