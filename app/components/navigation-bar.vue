<template>
    <nav
        class="fixed top-0 left-0 w-full z-[999] h-20 bg-black text-white border-b border-white/10 shadow-xl flex items-center">
        <div class="container mx-auto px-6 max-w-6xl flex justify-between items-center">

            <!-- NICKNAME KO -->
            <NuxtLink to="/"
                class="text-xl font-bold font-['Montserrat'] tracking-wider text-[#b1adad] hover:opacity-80 transition-opacity">
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

            <!-- HAMBURGER IN MOBILE -->
            <div class="dropdown dropdown-end md:hidden">
                <div tabindex="0" role="button" class="btn btn-ghost text-white" aria-label="Open navigation menu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

                <ul tabindex="0"
                    class="dropdown-content menu p-3 shadow-2xl bg-black border border-white/10 rounded-xl w-52 text-white font-['Montserrat'] z-[1000] mt-3 space-y-1">
                    <li class="border-b border-gray-700 pb-2 mb-1 px-2 text-xs font-bold text-gray-400">
                        JD Portfolio
                    </li>
                    <li>
                        <NuxtLink to="/" class="py-2 hover:text-[#b39aa0]">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about-me" class="py-2 hover:text-[#b39aa0]">About Me</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/tech-stack" class="py-2 hover:text-[#b39aa0]">Tech Stack</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/certification" class="py-2 hover:text-[#b39aa0]">Certifications</NuxtLink>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</template>
