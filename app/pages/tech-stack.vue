<script setup>

// categories nung tech
const categories = [
    {
        name: 'FRONT END',
        // giving the name and image for the parameter
        technologies: [
            { name: 'HTML', image: '/images/tech-stack/html-logo.png' },
            { name: 'CSS', image: '/images/tech-stack/css-logo.png' },
            { name: 'JavaScript', image: '/images/tech-stack/js-logo.png' },
            { name: 'Android Studio', image: '/images/tech-stack/android-studio-logo.png' },
        ],
    },

    {
        name: 'BACKEND',
        technologies: [
            { name: 'Java', image: '/images/tech-stack/java-logo.png' },
            { name: 'Python', image: '/images/tech-stack/python-logo.png' },
        ],
    },

    {
        name: 'DATABASE',
        technologies: [
            { name: 'MongoDB', image: '/images/tech-stack/mongodb-logo.png' },
            { name: 'PostgreSQL', image: '/images/tech-stack/postgre-logo.png' },
            { name: 'Apex Oracle', image: '/images/tech-stack/apex-logo.png' },
        ],
    },

    {
        name: 'DEVELOPMENT',
        technologies: [
            { name: 'VS Code', image: '/images/tech-stack/visual-studio-logo.png' },
            { name: 'Git', image: '/images/tech-stack/git-logo.png' },
            { name: 'GitHub', image: '/images/tech-stack/github-logo.png' },
            { name: 'SSMS', image: '/images/tech-stack/ssms-logo.png' },
            { name: 'Microsoft SQL Server', image: '/images/tech-stack/microsoft-sql-logo.png' },
        ],
    },

]
</script>

<template>
    <main class="container mx-auto max-w-6xl px-4 py-12 pt-28">

        <h1 class="font-['Syncopate'] text-[#b39aa0] text-3xl md:text-5xl font-bold text-center tracking-wider mb-6">
            TECH STACK
        </h1>

        <section v-for="category in categories" :key="category.name"
            class="bg-black/75 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl mb-8">

            <h2
                class="font-['Syncopate'] text-[#b39aa0] text-xl md:text-2xl font-bold mb-4 border-b border-[#b39aa0]/30 pb-2">
                {{ category.name }}
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                <TechCard v-for="tech in category.technologies" :key="tech.name" :name="tech.name"
                    :image="tech.image" />
            </div>
        </section>

    </main>
</template>
