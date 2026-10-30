<script setup>
defineProps({
    error: {
        type: Object,
        required: true,
    },
})

useHead({
    title: '404 - Page Not Found | John Dexter Cullados',
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <main
        class="relative min-h-screen w-full overflow-hidden bg-[#0a0a0c] text-white flex flex-col justify-center items-center p-6 font-['Montserrat'] text-center">

        <!-- Cobwebs in the corners - top-->
        <svg class="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 text-white/15 pointer-events-none"
            viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.8">
            <path d="M0,0 L100,0 M0,0 L0,100 M0,0 L70,70 M0,0 L90,40 M0,0 L40,90" />
            <path d="M20,0 Q20,20 0,20 M40,0 Q40,40 0,40 M60,0 Q60,60 0,60 M80,0 Q80,80 0,80" />
        </svg>

        <svg class="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 text-white/15 pointer-events-none -scale-x-100"
            viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.8">
            <path d="M0,0 L100,0 M0,0 L0,100 M0,0 L70,70 M0,0 L90,40 M0,0 L40,90" />
            <path d="M20,0 Q20,20 0,20 M40,0 Q40,40 0,40 M60,0 Q60,60 0,60 M80,0 Q80,80 0,80" />
        </svg>

        <!-- Cobwebs in the corners - bottom -->
        <svg class="absolute bottom-0 left-0 w-28 h-28 md:w-40 md:h-40 text-white/10 pointer-events-none -scale-y-100"
            viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.8">
            <path d="M0,0 L100,0 M0,0 L0,100 M0,0 L70,70 M0,0 L90,40 M0,0 L40,90" />
            <path d="M20,0 Q20,20 0,20 M40,0 Q40,40 0,40 M60,0 Q60,60 0,60 M80,0 Q80,80 0,80" />
        </svg>

        <svg class="absolute bottom-0 right-0 w-28 h-28 md:w-40 md:h-40 text-white/10 pointer-events-none scale-100 rotate-180"
            viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.8">
            <path d="M0,0 L100,0 M0,0 L0,100 M0,0 L70,70 M0,0 L90,40 M0,0 L40,90" />
            <path d="M20,0 Q20,20 0,20 M40,0 Q40,40 0,40 M60,0 Q60,60 0,60 M80,0 Q80,80 0,80" />
        </svg>


        <!-- Main View Headline -->
        <div class="relative z-10 flex flex-col items-center">
            <p
                class="font-['Syncopate'] text-8xl md:text-[12rem] text-[#b39aa0]/80 font-black tracking-widest drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] select-none">
                404
            </p>

            <!-- Floating Ghost -->
            <div class="animate-bounce duration-1000 mt-2 mb-6">
                <svg class="w-16 h-16 md:w-20 md:h-20 text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M12 2A9 9 0 0 0 3 11v8a2 2 0 0 0 3.32 1.5l1.68-1.42 1.68 1.42A2 2 0 0 0 12 20a2 2 0 0 0 2.32.58l1.68-1.42 1.68 1.42A2 2 0 0 0 21 19v-8a9 9 0 0 0-9-9zm-3 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
                </svg>
            </div>

            <h1 class="font-['Syncopate'] text-xl md:text-3xl font-bold tracking-wider text-gray-200 mb-3">
                ABANDONED ROUTE
            </h1>

            <p class="max-w-md text-sm md:text-base text-gray-400 mb-8 leading-relaxed">
                Nothing lives here except ghosts and cobwebs. The page you are looking for does not exist or has been
                relocated.
            </p>

            <!-- Return Button -->
            <button type="button"
                class="btn btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300 font-['Montserrat'] tracking-wide"
                @click="handleError">
                Escape Back Home
            </button>
        </div>

        

    </main>
</template>