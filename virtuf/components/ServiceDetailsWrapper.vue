<template>
    <section class="service-details-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="service-details-column">
                        <div class="service-details-content">
                            <div class="thumb" data-aos="fade-up" data-aos-duration="1000">
                                <img src="/images/photos/servicio2.jpg" alt="image">
                            </div>
                            <n-link to="/service" class="category">Proyectos / Ingeniería</n-link>
                            <h2 class="title">Soluciones para la Industria 4.0.</h2>
                            <div class="separator-line">
                                <img class="me-1" src="/images/shape/line-s2.png" alt="shape image">
                                <img src="/images/shape/line-s1.png" alt="shape image">
                            </div>
                            <p>La industria 4.0 busca maximizar la eficiencia y eficacia de las empresas mediante la correcta organización de todos los medios productivos. Con el logro de la optimización continuada y sostenible de los diferentes procesos,s posible aumentar la satisfacción de todas las partes implicadas en la organización.</p>
                            <p class="mb-0">Nuestro fin es conseguir que las empresas asienten su desarrollo y transformación digital en la innovación como factor de competitividad y crecimiento.</p>
                            <blockquote class="blockquote" data-aos="fade-up" data-aos-duration="1000">
                                <p>No se trata de ideas, Se trata de hacer que las cosas sucedan.</p>
                                
                            </blockquote>
                            <h2 class="title">Cómo trabajamos?</h2>
                            <div class="separator-line">
                                <img class="me-1" src="/images/shape/line-s2.png" alt="shape image">
                                <img src="/images/shape/line-s1.png" alt="shape image">
                            </div>
                            <p class="mb-0">Empleamos metodologías ágiles con cada uno de nuestros proyectos. Un modelo de mejora continua en el que se planifica, se crea, se comprueba los resultados y se mejora, algo que es constante y rápido. Se divide en en los siguientes pasos:   .</p>
                            <ul class="list-style2">
                                <li><span class="icon"><i class="icofont-checked"></i></span> <span>Discusión / Breve del problema.</span></li>
                                <li><span class="icon"><i class="icofont-checked"></i></span> <span>Propuesta de Solución.</span></li>
                                <li><span class="icon"><i class="icofont-checked"></i></span> <span>Desarrollo.</span></li>
                                <li><span class="icon"><i class="icofont-checked"></i></span> <span>Pruebas.</span></li>
                                <li><span class="icon"><i class="icofont-checked"></i></span> <span>Entrega.</span></li>
                            </ul>
                            <p class="mb-34"> </p>
                            <h2 class="title">Find Solution.</h2>
                            <div class="separator-line">
                                <img class="me-1" src="/images/shape/line-s2.png" alt="shape image">
                                <img src="/images/shape/line-s1.png" alt="shape image">
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wass popularsed in the 1960s with the release of Letraset sheets containing passages, and more recently.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500s, whean an unknown printer took an galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        
                        <div class="sidebar-area">
                            <ServiceCategoryWidget />

                            <WidgetVideo />

                            <WidgetSocial />
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
            ServiceCategoryWidget: () => import('@/components/ServiceCategoryWidget'),
            WidgetVideo: () => import('@/components/WidgetVideo'),
            WidgetSocial: () => import('@/components/WidgetSocial'),
        },
    };
</script>