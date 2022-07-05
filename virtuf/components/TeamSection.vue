<template>
    <section class="team-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 m-auto">
                    <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                        <h2 class="title">Tenemos un equipo increíble</h2>
                        <div class="separator-line mt-14">
                            <img class="me-1" src="/images/shape/line-s2.png" alt="Images">
                            <img src="/images/shape/line-s1.png" alt="Images">
                        </div>
                        <div class="desc">
                            <p class="mt-21">Contamos con el equipo multidiciplinario con experiencia en desarrollo de proyectos innovadores.<br> En áreas del Internet de las Cosas, Inteligencia Artificial, procesamiento de señales, desarrollo y diseño de Hardware, Software, redes industrieales, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="team-slider-content" data-aos="fade-up" data-aos-duration="1200">
                        <div class="team-slider-container">
                            <swiper :options="swiperOptions">

                                <div class="swiper-slide team-member">
                                    <div class="thumb">
                                        <img src="/images/team/nilton.jpg" alt="Image">
                                    </div>
                                    <div class="content">
                                        <div class="member-info">
                                            <div class="separator-line">
                                                <img src="/images/shape/line-s1.png" alt="Images">
                                            </div>
                                            <h4 class="name">Nilton Ramos Esteban</h4>
                                            <h6 class="designation">Director General</h6>
                                            <!-- Start Progress Item -->
                                            <div class="progress-item">
                                                <div class="progress-line">
                                                    <div class="progress-bar-line" style="width: 75%">
                                                        <span class="percent">75%</span>
                                                    </div>
                                                </div>
                                                <div class="progress-info">
                                                    <span class="title">Diseño de Software</span>
                                                </div>
                                                <div class="progress-line">
                                                    <div class="progress-bar-line" style="width: 85%">
                                                        <span class="percent">85%</span>
                                                    </div>
                                                </div>
                                                <div class="progress-info">
                                                    <span class="title">Diseño de Hardware</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shape-style">
                                        <img class="shape-style1" src="/images/shape/8.png" alt="Image">
                                        <img class="shape-style2" src="/images/shape/9.png" alt="Image">
                                        <img class="shape-style3" src="/images/shape/10.png" alt="Image">
                                    </div>
                                </div>


                                <div class="swiper-slide team-member">
                                    <div class="thumb">
                                        <img src="/images/team/brayan.jpg" alt="Image">
                                    </div>
                                    <div class="content">
                                        <div class="member-info">
                                            <div class="separator-line">
                                                <img src="/images/shape/line-s1.png" alt="Images">
                                            </div>
                                            <h4 class="name">Brayan Laura</h4>
                                            <h6 class="designation">Desarrollo de Software</h6>
                                            <!-- Start Progress Item -->
                                            <div class="progress-item">
                                                <div class="progress-line">
                                                    <div class="progress-bar-line" style="width: 80%">
                                                        <span class="percent">80%</span>
                                                    </div>
                                                </div>
                                                <div class="progress-info">
                                                    <span class="title">Sistemas Embebidos</span>
                                                </div>
                                                <div class="progress-line">
                                                    <div class="progress-bar-line" style="width: 75%">
                                                        <span class="percent">75%</span>
                                                    </div>
                                                </div>
                                                <div class="progress-info">
                                                    <span class="title">Procesamiento de Señales</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shape-style">
                                        <img class="shape-style1" src="/images/shape/8.png" alt="Image">
                                        <img class="shape-style2" src="/images/shape/9.png" alt="Image">
                                        <img class="shape-style3" src="/images/shape/10.png" alt="Image">
                                    </div>
                                </div>


                                <div class="swiper-slide team-member">
                                    <div class="thumb">
                                        <img src="/images/team/abraham.jpg" alt="Image">
                                    </div>
                                    <div class="content">
                                        <div class="member-info">
                                            <div class="separator-line">
                                                <img src="/images/shape/line-s1.png" alt="Images">
                                            </div>
                                            <h4 class="name">Abraham Caso Torres</h4>
                                            <h6 class="designation">Dirección de proyectos TIC</h6>
                                            <!-- Start Progress Item -->
                                            <div class="progress-item">
                                                <div class="progress-line">
                                                    <div class="progress-bar-line" style="width: 90%">
                                                        <span class="percent">90%</span>
                                                    </div>
                                                </div>
                                                <div class="progress-info">
                                                    <span class="title">Desarrollo Web</span>
                                                </div>
                                                <div class="progress-line">
                                                    <div class="progress-bar-line" style="width: 80%">
                                                        <span class="percent">80%</span>
                                                    </div>
                                                </div>
                                                <div class="progress-info">
                                                    <span class="title">Formulación de Proyectos</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shape-style">
                                        <img class="shape-style1" src="/images/shape/8.png" alt="Image">
                                        <img class="shape-style2" src="/images/shape/9.png" alt="Image">
                                        <img class="shape-style3" src="/images/shape/10.png" alt="Image">
                                    </div>
                                </div>


                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptions: {
                    speed: 1500,
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween : 30,
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        992:{
                            slidesPerView : 3
                        },
                        768:{
                            slidesPerView : 2,
                            centeredSlides: false
                        },
                        0:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        },
    };
</script>