<script setup>
import { Github, Linkedin } from 'lucide-vue-next'
</script>

<template>
    <section
        class="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 min-h-[80vh] px-4 py-12 text-white">

        <!-- PROFILE IMAGE -->
        <div class="w-full lg:w-5/12 text-center lg:text-right lg:pr-12">
            <img src="/images/my-profile-image3.jpeg" alt="John Dexter Cullados Profile Picture"
                class="inline-block w-full max-w-[320px] h-auto rounded-[10%] shadow-2xl" />
        </div>

        <div class="w-full lg:w-7/12 text-center lg:text-left">
            <h1 class="font-['Montserrat'] text-4xl md:text-5xl lg:text-6xl">
                John Dexter Cullados
            </h1>

            <p class="mt-2 text-lg md:text-xl italic text-gray-300 font-['Papyrus',fantasy]">
                "Logic will get you from A to B. Imagination will take you everywhere."
            </p>

            <div class="mt-4 flex justify-center gap-6 lg:justify-start">
                <a href="https://github.com/johndextercullados" target="_blank" rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    class="p-3 bg-white/5 border border-white/10 rounded-full hover:border-[#b39aa0] hover:text-[#b39aa0] hover:scale-110 transition-all duration-300 shadow-lg">
                    <Github class="w-6 h-6" />
                </a>

                <a href="https://www.linkedin.com/in/john-dexter-cullados-a192103ab/" target="_blank"
                    rel="noopener noreferrer" aria-label="LinkedIn profile"
                    class="p-3 bg-white/5 border border-white/10 rounded-full hover:border-[#b39aa0] hover:text-[#b39aa0] hover:scale-110 transition-all duration-300 shadow-lg">
                    <Linkedin class="w-6 h-6" />
                </a>
            </div>
        </div>
    </section>
</template>
