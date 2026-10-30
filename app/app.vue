<template>
    <div class="min-h-screen bg-black text-white flex flex-col justify-between font-['Montserrat']">

        <!-- Vanta Background -->
        <ClientOnly>
            <vanta-bg />
        </ClientOnly>

        <navigation-bar />

        <main class="relative z-10 flex-grow">
            <NuxtPage />
        </main>

        <!-- add footer mamaya -->

    </div>
</template>