<template>
    <section class="about-area about-default-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 md-text-center">
                    <div class="layer-style" data-aos="fade-up" data-aos-duration="1000">
                        <div class="thumb tilt-animation">
                            <img src="/images/about/01.jpg" alt="Images">
                        </div>
                        <div class="shape-style1">
                            <img src="/images/shape/circle-line1.png" alt="Images">
                        </div>
                        <ShapeWithAnimation addClassName="shape-style2" imgSrc="/images/shape/circle-shape1.png" data-depth=".6" />
                        <div class="experience-time">
                            <div class="content">2<sup>+</sup> <span>Años de experiencia</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                    <div class="about-content">
                        <div class="section-title xs-text-center" data-aos="fade-up" data-aos-duration="1000">
                            <h2 class="title">Tenemos un liderazgo y <span class="bottom-style">Experiencia</span> en Desarrollo e Innovación.</h2>
                            <div class="desc">
                                <p class="mt-20">Innovamos y desarrollamos soluciones tecnológicas para la industria, minería, petroleo, transporte, gas y agricultura.<u class="text-theme-color2">Nuestras soluciones integran las tecnologías mas disruptivas que existen en la actualidad.</u> Como son Inteligencia Artificial, Machine Learning, Procesamiento de señales e imágenes, sistemas embebidos, sistemas operativos robóticos (ROS), Internet de las Cosas(IoT), Redes Industriales, etc.</p>
                            </div>
                        </div>
                        <div class="list-icon-style" data-aos="fade-up" data-aos-duration="1200">
                            <ul>
                                <li><i class="icon icofont-clock-time"></i> Ahorre su tiempo</li>
                                <li><i class="icon icofont-money-bag"></i> Reduce costos</li>
                                <li><i class="icon icofont-chart-growth"></i>Solución inmediata</li>
                                <li><i class="icon icofont-live-support"></i> Soporte 24/7</li>
                                <li><i class="icon icofont-badge"></i> Socio de confianza</li>
                                <li><i class="icon icofont-unique-idea"></i> Ideas innovadoras</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>