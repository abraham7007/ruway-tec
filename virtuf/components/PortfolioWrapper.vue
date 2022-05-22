<template>
    <section class="portfolio-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                        <div class="portfolio-filter-menu mb-0">
                            <button data-filter="all">Todos los proyectos</button>
                            <button data-filter=".automatizacion">Automatización</button>
                            <button data-filter=".iot">Internet de las Cosas</button>
                            <button data-filter=".biomedica">Biomédica</button>
                            <button data-filter=".fablab">Fabricación Digital</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row portfolio-grid gutter-50 box" data-aos="fade-up" data-aos-duration="1000">
                <div class="col-md-6 portfolio-item mix" :class="portfolio.category" v-for="(portfolio, index) in portfolios" :key="index">
                    <div class="inner-content">
                        <div class="thumb">
                            <n-link to="/project">
                                <img :src="portfolio.imgSrc" :alt="portfolio.title"/>
                            </n-link>
                        </div>
                        <div class="portfolio-info">
                            <div class="content">
                                <img class="shape-line-img" src="/images/shape/line-s1.png" alt="shape image">
                                <h3 class="title">
                                    <n-link to="/project">{{ portfolio.title }}</n-link>
                                </h3>
                                <n-link to="/project" class="category">{{ portfolio.category }}</n-link>
                            </div>
                            <n-link to="/project" class="btn-icon">
                                <i class="icofont-long-arrow-right"></i>
                            </n-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="portfolio-footer text-center" data-aos="fade-up" data-aos-duration="1300">
                
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                mixer: null,

                portfolios: [
                    {
                        imgSrc: "/images/portfolio/track.jpg",
                        title: "Sistema IoT para tracking de camiones mineros",
                        category: "automatizacion"
                    },
                    {
                        imgSrc: "/images/portfolio/vpn.jpg",
                        title: "Implementación de Redes Privadas para Aplicaciones en Procesos Industriales.",
                        category: "iot"
                    },
                    {
                        imgSrc: "/images/portfolio/laser.jpg",
                        title: "Dispositivo Laser Para Proyección de mallas de perforación",
                        category: "automatizacion"
                    },
                    {
                        imgSrc: "/images/portfolio/spo2.jpg",
                        title: "Sistema Biométrico para lectura de Temperatura y SpO2",
                        category: "biomedica"
                    },
                    {
                        imgSrc: "/images/portfolio/lora.jpg",
                        title: "Dispositivos de Radiofrecuencia con LoRa",
                        category: "iot"
                    },
                    {
                        imgSrc: "/images/portfolio/caballo.jpg",
                        title: "Máquina de Anestesia para Caballo",
                        category: "biomedica"
                    },
                    
                ]
            }
        },

        mounted () {
            this.$nextTick(() => {
                const containerEl = document.querySelector('.box')
                this.mixer = new this.mixitup(containerEl)
            })
        },
    };
</script>