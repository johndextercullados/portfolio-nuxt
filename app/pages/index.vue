<script setup>
useHead({
    title: 'Web Portfolio | John Dexter Cullados',
    htmlAttrs: { lang: 'en', },
})

useSeoMeta({
    description: 'Official web portfolio of John Dexter Cullados showcasing background, skill, tech stacks, and certifications.',
    ogTitle: 'Web Portfolio | John Dexter Cullados',
    ogDescription: 'Explore the background, technology stack, projects, and IT certifications of John Dexter Cullados.',
    ogImage: '/images/my-profile-image3.jpeg',
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <main class="container mx-auto px-4 pt-24 pb-12">

        <!-- IMPORT FROM COMPONENTS -->
        <profile />

        <Footer />

    </main>
</template>