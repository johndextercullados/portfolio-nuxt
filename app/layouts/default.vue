<template>
  <div class="min-h-screen bg-black text-white flex flex-col justify-between font-['Montserrat']">
    <ClientOnly>
      <vanta-bg />
    </ClientOnly>

    <navigation-bar />

    <main class="relative z-10 flex-grow"><slot /></main>
  </div>
</template>