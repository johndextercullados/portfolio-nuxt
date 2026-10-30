<script setup>
import { ref } from 'vue'

import {
    Home,
    User,
    Cpu,
    Award,
    Menu,
    X
} from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
}
</script>

<template>
    <nav
        class="fixed top-0 left-0 z-[999] h-20 w-full bg-black text-white border-b border-white/10 shadow-xl flex items-center">
        <div class="container mx-auto px-6 max-w-6xl flex justify-between items-center">

            <!-- NICKNAME KO -->
            <NuxtLink to="/"
                class="text-xl font-bold font-['Montserrat'] tracking-wider text-[#b1adad] hover:opacity-80 transition-opacity"
                @click="closeMobileMenu">
                <span class="hidden md:inline">John Dexter</span>
                <span class="inline md:hidden">JD</span>
            </NuxtLink>

            <!-- DESKTOP NAVIGATION -->
            <div class="hidden md:flex items-center">
                <ul class="flex gap-8 font-['Montserrat'] text-sm tracking-wide font-medium">
                    <li>
                        <NuxtLink to="/" class="hover:text-[#b39aa0] transition-colors py-2"
                            active-class="text-[#b39aa0] font-bold border-b-2 border-[#b39aa0]">
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about-me" class="hover:text-[#b39aa0] transition-colors py-2"
                            active-class="text-[#b39aa0] font-bold border-b-2 border-[#b39aa0]">
                            About Me
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/tech-stack" class="hover:text-[#b39aa0] transition-colors py-2"
                            active-class="text-[#b39aa0] font-bold border-b-2 border-[#b39aa0]">
                            Tech Stack
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/certification" class="hover:text-[#b39aa0] transition-colors py-2"
                            active-class="text-[#b39aa0] font-bold border-b-2 border-[#b39aa0]">
                            Certifications
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- HAMBURGER BUTTON FOR MOBILE -->
            <button type="button" class="btn btn-ghost text-white md:hidden" aria-label="Open navigation menu"
                @click="isMobileMenuOpen = !isMobileMenuOpen">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>


            <Teleport to="body">
                <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm md:hidden"
                    @click="closeMobileMenu" />

                <!-- Sidebar -->
                <aside
                    class="fixed top-0 left-0 z-[1001] h-screen w-72 max-w-[80vw] bg-black text-white border-r border-white/10 p-6 transition-transform duration-300 md:hidden shadow-2xl flex flex-col justify-between"
                    :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'">
                    <div>
                        <!-- HEADER INSIDE SIDEBAR -->
                        <div class="flex items-center justify-between pb-4 border-b border-gray-700 mb-6">
                            <span class="text-sm font-bold text-gray-400 font-['Montserrat']">
                                JD Portfolio
                            </span>
                            <button type="button" class="btn btn-sm btn-ghost btn-circle text-white"
                                aria-label="Close menu" @click="closeMobileMenu">
                                ✕
                            </button>
                        </div>

                        <!-- Navigation Links -->
                        <ul class="flex flex-col space-y-2 font-['Montserrat']">

                            <li>
                                <NuxtLink to="/"
                                    class="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:text-[#b39aa0] transition-colors"
                                    active-class="text-[#b39aa0] font-bold bg-white/5" @click="closeMobileMenu">
                                    <Home class="w-5 h-5 text-[#b39aa0]" />
                                    <span>Home</span>
                                </NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/about-me"
                                    class="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:text-[#b39aa0] transition-colors"
                                    active-class="text-[#b39aa0] font-bold bg-white/5" @click="closeMobileMenu">
                                    <User class="w-5 h-5 text-[#b39aa0]" />
                                    <span>About Me</span>
                                </NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/tech-stack"
                                    class="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:text-[#b39aa0] transition-colors"
                                    active-class="text-[#b39aa0] font-bold bg-white/5" @click="closeMobileMenu">
                                    <Cpu class="w-5 h-5 text-[#b39aa0]" />
                                    <span>Tech Stack</span>
                                </NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/certification"
                                    class="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:text-[#b39aa0] transition-colors"
                                    active-class="text-[#b39aa0] font-bold bg-white/5" @click="closeMobileMenu">
                                    <Award class="w-5 h-5 text-[#b39aa0]" />
                                    <span>Certifications</span>
                                </NuxtLink>
                            </li>
                            
                        </ul>
                    </div>


                </aside>
            </Teleport>

        </div>
    </nav>
</template>