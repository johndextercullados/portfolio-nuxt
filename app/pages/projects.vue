<script setup>
import { ref } from 'vue'

useHead({
    title: 'Projects | John Dexter Cullados',
    htmlAttrs: { lang: 'en' },
})

useSeoMeta({
    description: 'Explore software projects by John Dexter Cullados, including collaborative web and mobile applications, tabulation systems, and integrations.',
    ogTitle: 'Projects | John Dexter Cullados',
    ogDescription: 'Featured web and mobile software projects by John Dexter Cullados.',
})

const repositoryUrl = 'https://github.com/johndextercullados/sdca-tabulation-prepageant'

// links of the render systems
const variants = [
    {
        name: 'Mr. & Ms. SDCA Pre-Pageant',
        description: 'A preliminary scoring platform for the Mr. & Ms. SDCA Pre-Pageant. It organizes judges’ scores and automates ranking to support a consistent evaluation process.',
        url: 'https://sdca-tabulation-prepageant.onrender.com',
    },
    {
        name: 'Mr. & Ms. SDCA Main Pageant',
        description: 'A coronation-night tabulation system for real-time scoring, with a Top 5 breakdown to help present results clearly during the main pageant.',
        url: 'https://sdca-tabulation.onrender.com/mr_ms_sdca_tabulation.html',
    },
    {
        name: 'SDCA Kulayawan Tabulation',
        description: 'A festival competition scoring platform built to handle tabulation across multiple Kulayawan competition categories.',
        url: 'https://sdca-tabulation-kulayawan.onrender.com/',
    },
]

const activeVariant = ref(0)
const activeProject = computed(() => variants[activeVariant.value])
</script>

<template>
    <main class="container mx-auto max-w-6xl px-4 py-12 pt-28">

        <h1 class="font-['Syncopate'] text-[#b39aa0] text-3xl md:text-5xl font-bold text-center tracking-wider mb-6">
            FEATURED PROJECTS
        </h1>
        <p class="mx-auto mb-10 max-w-3xl text-center font-['Montserrat'] leading-relaxed text-white/85">
            Powered by curiosity and my love for learning, I thrive in understanding the unknown. The higher the learning curve, the more excited I am to build.
        </p>

        <section
            class="bg-black/75 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-white shadow-2xl mb-12"
            aria-labelledby="tabulation-suite-title"
        >
            <header class="mb-6">

                <div class="mb-4 flex flex-wrap items-center gap-3">
                    <span class="badge badge-outline border-[#b39aa0]/70 text-[#d3bac0]">Project Suite</span>
                    <span class="badge badge-ghost border border-white/15 text-white/80">Collaborative Effort</span>
                    <span class="badge badge-ghost border border-white/15 text-white/80">Deployed on Render</span>
                </div>

                <h2 id="tabulation-suite-title" class="font-['Syncopate'] text-xl font-bold leading-relaxed text-[#b39aa0] md:text-3xl">
                    SDCA Event Tabulation System Suite
                </h2>

            </header>

            <div class="tabs tabs-boxed bg-white/5 p-1 mb-6 flex h-auto flex-wrap gap-1" role="tablist" aria-label="Select event variant">
                <button
                    v-for="(variant, index) in variants"
                    :key="variant.name"
                    type="button"
                    role="tab"
                    class="tab h-auto min-h-10 whitespace-normal py-2 text-white/75"
                    :class="{ 'tab-active !bg-[#b39aa0] !text-black': activeVariant === index }"
                    :aria-selected="activeVariant === index"
                    @click="activeVariant = index"
                >
                    {{ variant.name }}
                </button>
            </div>

            <div class="grid items-start gap-8 lg:grid-cols-12">
                <div class="lg:col-span-7">
                    <div class="mockup-browser border border-white/20 bg-black/90 w-full shadow-2xl">
                        <div class="mockup-browser-toolbar before:hidden flex items-center gap-2 px-4 py-3">
                            <span class="h-3 w-3 rounded-full bg-red-500" aria-hidden="true"></span>
                            <span class="h-3 w-3 rounded-full bg-yellow-400" aria-hidden="true"></span>
                            <span class="h-3 w-3 rounded-full bg-green-500" aria-hidden="true"></span>
                        </div>
                        <div class="aspect-video w-full">
                            <iframe
                                :key="activeProject.url"
                                :src="activeProject.url"
                                :title="`${activeProject.name} live preview`"
                                class="h-full w-full border-0 bg-white"
                                allow="autoplay"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    <div class="mt-6 flex flex-wrap justify-center gap-3">
                        <a
                            :href="activeProject.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn border-[#b39aa0] bg-[#b39aa0] text-black hover:border-[#c9b4b8] hover:bg-[#c9b4b8]"
                        >
                            Live Tabulation Platform
                        </a>
                        <a
                            :href="repositoryUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-outline border-white/30 text-white hover:border-white hover:bg-white hover:text-black"
                        >
                            View Repository
                        </a>
                    </div>
                </div>

                <div class="space-y-6 lg:col-span-5">
                    <div>
                        <p class="mb-2 text-sm font-semibold uppercase tracking-widest text-[#b39aa0]">Project Version </p>
                        <h3 class="mb-3 font-['Montserrat'] text-xl font-semibold text-white">
                            {{ activeProject.name }}
                        </h3>
                        <p class="leading-relaxed text-white/75">{{ activeProject.description }}</p>
                    </div>

                    <div>
                        <h4 class="mb-2 font-['Montserrat'] font-semibold text-white">System architecture</h4>
                        <p class="leading-relaxed text-white/75">
                            The suite combines Java application logic with Node.js REST APIs and a synchronized data
                            layer, with the event platforms deployed on Render.
                        </p>
                    </div>

                    <div>
                        <h4 class="mb-2 font-['Montserrat'] font-semibold text-white">Team contribution</h4>
                        <p class="leading-relaxed text-white/75">
                            Built collaboratively in a team of three. My contribution focused on tailoring and deploying the Pre-Pageant variant, configuring custom preliminary rubrics, judge authentication, and real-time score synchronization.
                        </p>
                    </div>

                    <div>
                        <h4 class="mb-3 font-['Montserrat'] font-semibold text-white">Technology</h4>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="technology in ['Node.js', 'Supabase', 'PostgreSQL', 'JavaScript', 'REST APIs', 'Render']"
                                :key="technology"
                                class="badge badge-outline border-white/20 text-white/80"
                            >
                                {{ technology }}
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    </main>
</template>