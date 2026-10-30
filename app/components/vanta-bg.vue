<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const vantaContainer = ref(null)
let vantaEffect = null

onMounted(() => {
    // VANTA scripts to load
    const initVanta = () => {
        if (window.VANTA && window.VANTA.NET) {
            vantaEffect = window.VANTA.NET({
                el: vantaContainer.value,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                
                //LINES COLOR
                color: 0xb39aa0,
                //BG COLOR        
                backgroundColor: 0x0a0a0c 
            })
        } else {
            setTimeout(initVanta, 100)
        }
    }

    initVanta()
})

onBeforeUnmount(() => {
    if (vantaEffect) {
        vantaEffect.destroy()
    }
})
</script>

<template>
    <div ref="vantaContainer" class="fixed inset-0 z-0 pointer-events-none" />
</template>