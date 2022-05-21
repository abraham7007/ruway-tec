<template>
    <section class="service-area service-default-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-xl-6 m-auto">
                    <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                        <h2 class="title">¿Qué hacemos?</h2>
                        <div class="separator-line mt-14">
                            <img class="me-1" src="/images/shape/line-s2.png" alt="Images">
                            <img src="/images/shape/line-s1.png" alt="Images">
                        </div>
                        <div class="desc">
                            <p class="mt-21">Dedicamos el mayor de nuestros esfuerzos en desarrollar soluciones de Hardware y Software para nuestros clientes, haciendo uso de las herramientas tecnológicas más emergentes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row icon-box-style1">
                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1100" v-for="(service, index) in services" :key="index">
                    <ServiceItem :service="service" />
                </div>
            </div>
        </div>
        <div class="layer-shape">
            <img class="layer-shape-one" src="/images/shape/6.png" alt="shape">
            <img class="layer-shape-two" src="/images/shape/7.png" alt="shape">
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    {
                        icon: "/images/icons/s1.png",
                        title: "Desarrollo de software",
                        desc: "Transformamos su negocio mediante la creación de aplicaciones digitales innovadoras haciendo uso de diferentes lenguajes de programación. Comience hoy mismo y permítanos ayudarlo a aprovechar el poder de las tecnologías emergentes."
                    },
                    {
                        icon: "/images/icons/s6.png",
                        title: "Diseño y desarrollo de hardware IOT",
                        desc: "Construimos sistemas integrados con nuestra experiencia y comprensión en diseño de hardware integrado, redes de sensores inalámbricos y diferentes protocolos de comunicación."
                    },
                    {
                        icon: "/images/icons/s3.png",
                        title: "Fabricación digital y prototipado ágil",
                        desc: "Te ayudamos en el desarrollo de prototipos de baja y media resolución con la ayuda de nuestros diseñadores y herramientas de impresión 3D de diferentes materiales de fabricación."
                    },
                    {
                        icon: "/images/icons/s4.png",
                        title: "Consultoría en conceptualización de productos IOT",
                        desc: "Con años de experiencia práctica en el trabajo con productos de hardware y software de IoT, somos conscientes de casi todo sobre IoT. Para mejorar nuestro conocimiento, brindamos servicios de consultoría para productos IoT La consulta proporcionada por nosotros puede ayudarlo a mejorar el diseño de su producto y construir dispositivos IoT."
                    },
                    {
                        icon: "/images/icons/s5.png",
                        title: "Implementación en la nube y creación de dashboard personalizados ",
                        desc: "IoT conecta y permite la comunicación entre cosas (hardware electrónico), personas y procesos donde la nube es vital en la colaboración de estos elementos para crear una alta visibilidad y conexión. Brindamos el despliegue de proyectos a nivel de la nube aprovechando las ventajas de esta tecnología."
                    },
                    {
                        icon: "/images/icons/s2.png",
                        title: "Industria 4.0",
                        desc: "La Industria 4.0 hace que todo en su cadena de suministro sea inteligente desde la fabricación y fábricas inteligentes hasta el almacenamiento y la logística inteligentes.Pero la Industria 4.0 no se detiene en la cadena de suministro. Se interconecta con sistemas de back-end, como la planificación de recursos empresariales (ERP), para brindar a las empresas un nivel de visibilidad y control sin precedentes."
                    },
                ]
            }
        },
    };
</script>