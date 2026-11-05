<script setup>
import {
    Github,
    Linkedin
} from 'lucide-vue-next'
</script>

<template>
    <footer class="w-full font-['Montserrat'] px-6 pb-8 pt-4">
        <div class="max-w-6xl mx-auto">

            <!--  Divider -->
            <hr class="border-white/50 mb-6" />


            <div class="flex flex-col items-center justify-center text-center gap-2 text-xs md:text-sm text-gray-400">

                <p class="font-bold text-white tracking-wider text-base">
                    John Dexter Cullados
                </p>

                <p class="text-gray-400 text-xs">
                    © 2025 — Built with passion & precision.
                </p>

                <!-- Socialz -->
                <div class="flex items-center gap-5 pt-2">
                    <a href="https://github.com/johndextercullados" target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub Profile" class="text-gray-400 hover:text-white transition-colors">
                        <Github class="w-5 h-5" />
                    </a>

                    <a href="https://www.linkedin.com/in/john-dexter-cullados-a192103ab/" target="_blank"
                        rel="noopener noreferrer" aria-label="LinkedIn Profile"
                        class="text-gray-400 hover:text-white transition-colors">
                        <Linkedin class="w-5 h-5" />
                    </a>
                </div>

            </div>

        </div>
    </footer>

    
</template>