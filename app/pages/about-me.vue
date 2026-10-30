<script setup>
useHead({
    title: 'About Me | John Dexter Cullados',
    htmlAttrs: { lang: 'en' }
})

useSeoMeta({
    description: "Learn more about my John Dexter Cullados, a highly adaptable individual and love learning. My professional goal is in the field of Cloud Engineering and Security.",
    ogTitle: 'About Me | John Dexter Cullados',
    ogDescription: 'Background, personal bio, and professional aspirations of John Dexter Cullados.',
})

</script>

<template>
    <main class="container mx-auto px-4 max-w-6xl py-12 pt-28">

        <h1 class="font-['Syncopate'] text-[#b39aa0] text-3xl md:text-5xl font-bold text-center tracking-wider mb-6">
            PERSONAL PROFILE
        </h1>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <aside class="lg:col-span-4 lg:sticky lg:top-28 space-y-4 text-center">

                <h2 class="font-['Montserrat'] text-4xl md:text-5xl lg:text-6xl">
                    John Dexter Cullados
                </h2>

                <p class="font-['Papyrus',fantasy] text-lg italic leading-relaxed text-gray-300">
                    "Logic will get you from A to B. Imagination will take you everywhere."
                </p>

            </aside>

            <div class="lg:col-span-8 text-white">
                <div class="bg-black/75 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                    <section class="mb-8">
                        <h2 class="font-['Montserrat'] text-2xl md:text-3xl font-bold text-[#b39aa0] mb-2">
                            About Me
                        </h2>

                        <hr class="border-[#b39aa0] opacity-30 my-3" />
                        <p class="font-['Montserrat'] text-base md:text-lg leading-relaxed text-gray-200 text-justify">
                            I am a second year Bachelor of Science in Information Technology student at St. Dominic
                            College of Asia
                            with a passion for learning. <strong class="font-semibold text-white">I pride myself on
                                being an adaptable
                                learner.</strong> With the right mentorship or training, I have the confidence to master
                            systems and
                            integrate them into my workflow. Beyond coding, I am a natural communicator who excels at
                            <strong class="font-semibold italic text-[#b39aa0]">going with the flow.</strong> Whether
                            leading a project
                            or presenting a report, I remain confident and take the initiative to push for success.
                        </p>

                    </section>

                    <section>
                        <h2 class="font-['Montserrat'] text-2xl md:text-3xl font-bold text-[#b39aa0] mb-2">
                            Professional Aspirations
                        </h2>

                        <hr class="border-[#b39aa0] opacity-30 my-3" />
                        <p class="font-['Montserrat'] text-base md:text-lg leading-relaxed text-gray-200 text-justify">
                            My professional interest is deeply rooted in the architecture of information; I am
                            fascinated by how data
                            flows through systems and the protocols that keep it secure. Moving forward, I aim to
                            transform this
                            passion into a career in <strong class="font-semibold text-white">Cloud Engineering</strong>
                            or
                            <strong class="font-semibold text-white">Cloud Security</strong>, where I can build and
                            protect the
                            infrastructures that hold the digital world. I aspire to further improve my adaptability and
                            leadership
                            skills, utilizing them to stay ahead in the ever-evolving tech field.
                        </p>

                    </section>
                </div>
            </div>

        </div>
    </main>
</template>
