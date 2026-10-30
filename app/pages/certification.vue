<script setup>

// MINI DATABASE
const certifications = [
    {
        id: 'java',
        title: 'Information Technology Specialist:',
        subtitle: 'Java',
        issuerDate: 'Issued by Certiport • Feb 2026',
        badgeImage: '/images/certificates/java-badge.png',
        fullCertImage: '/images/certificates/java-cert.jpg',
        credlyUrl: 'https://www.credly.com/badges/70debde6-570e-4b4d-8fd5-aa693d90659c/public_url',
        modalId: 'javaCertModal',
    },
    {
        id: 'database',
        title: 'Information Technology Specialist:',
        subtitle: 'Database',
        issuerDate: 'Issued by Certiport • June 2026',
        badgeImage: '/images/certificates/database-badge.png',
        fullCertImage: '/images/certificates/database-cert.jpg',
        credlyUrl: 'https://www.credly.com/badges/9302501b-873b-46d9-96e1-762f9921eb93/public_url',
        modalId: 'databaseCertModal',
    },
    {
        id: 'ppt',
        title: 'Microsoft Office Specialist:',
        subtitle: 'PowerPoint Associate',
        issuerDate: 'Issued by Microsoft • May 2025',
        badgeImage: '/images/certificates/ppt-badge.png',
        fullCertImage: '/images/certificates/ppt-cert.jpg',
        credlyUrl: 'https://www.credly.com/badges/ca2353e9-17a2-4016-845c-67b8fa272dbf/public_url',
        modalId: 'pptCertModal',
    },
    {
        id: 'word',
        title: 'Microsoft Office Specialist:',
        subtitle: 'Word Associate',
        issuerDate: 'Issued by Microsoft • Feb 2025',
        badgeImage: '/images/certificates/word-badge.png',
        fullCertImage: '/images/certificates/word-cert.jpg',
        credlyUrl: 'https://www.credly.com/badges/e686b3b4-835b-4fa2-a5b5-a52cc57f8ce9/public_url',
        modalId: 'wordCertModal',
    },
]
</script>

<template>
    <main class="container mx-auto max-w-6xl px-4 py-12 pt-28">
        
        <h1 class="font-['Syncopate'] text-[#b39aa0] text-3xl md:text-5xl font-bold text-center tracking-wider mb-6">
            CERTIFICATIONS
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <CertificationCard v-for="cert in certifications" :key="cert.id" :title="cert.title"
                :subtitle="cert.subtitle" :issuer-date="cert.issuerDate" :badge-image="cert.badgeImage"
                :credly-url="cert.credlyUrl" :cert-modal-id="cert.modalId" />
        </div>

        <!-- DaisyUI Modals for Full Certificates -->
        <dialog v-for="cert in certifications" :id="cert.modalId" :key="cert.modalId" class="modal">
            <div class="modal-box max-w-4xl border border-white/10 bg-black/95 text-white">
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">✕</button>
                </form>
                <h3 class="mb-4 pr-10 text-center font-['Montserrat'] text-lg font-semibold">
                    {{ cert.title }} {{ cert.subtitle }}
                </h3>
                <img :src="cert.fullCertImage" class="mx-auto max-h-[75vh] w-full rounded object-contain"
                    :alt="cert.title + ' Certificate'" />
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>

    </main>
</template>