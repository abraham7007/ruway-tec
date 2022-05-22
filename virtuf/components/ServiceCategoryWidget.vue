<template>
    <div class="widget" data-aos="fade-up" data-aos-duration="1000">
        <h3 class="widget-title">Categoría de Servicios</h3>
        <div class="separator-line">
            <img class="me-1" src="/images/shape/line-s2.png" alt="Image-HasTech">
            <img src="/images/shape/line-s1.png" alt="Image-HasTech">
        </div>
        <div class="widget-category">
            <n-link to="/service" v-for="(category, index) in categories" :key="index">
                <i class="icofont-double-right"></i> 
                {{ category }}
            </n-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                categories: ['Desarrollo de Hardware', 'Software Industrial', 'Automatización', 'Fabricación digital', 'Instrumentación & Control','Dibujo Mecánico','Diseño Electrónico','Desarrollo Web & Móvil','Calibración de Sensores','Internet de las Cosas']
            }
        },
    };
</script>