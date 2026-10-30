<template>
    <section
        class="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 min-h-[80vh] px-4 py-12 text-white">
        <div class="w-full lg:w-5/12 text-center lg:text-right lg:pr-12">

            <img src="/images/my-profile-image.jpeg" alt="John Dexter Cullados Profiole Picture"
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
                    aria-label="GitHub profile" class="hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.45 3.36 1.77.1-.73.39-1.22.7-1.5-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.59 5.22-5.07 5.5.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                    </svg>
                </a>

                <a href="https://www.linkedin.com/in/john-dexter-cullados-a192103ab/" target="_blank"
                    rel="noopener noreferrer" aria-label="LinkedIn profile"
                    class="hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.96v-4.6c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.68H9.23V9h2.84v1.29h.04c.39-.74 1.36-1.53 2.8-1.53 3 0 3.55 1.97 3.55 4.53v5.16Z" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>
