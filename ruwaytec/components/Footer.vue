<template>
    <footer class="footer-area bg-img-cover" :style="{ backgroundImage: `url('/images/photos/bg-footer.jpg')` }">
        <div class="footer-top" data-aos="fade-up" data-aos-duration="1000">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="contact-info-content">
                            <div class="contact-info-item">
                                <div class="icon">
                                    <img class="icon-img" src="/images/icons/c1.png" alt="Icon">
                                </div>
                                <div class="content">
                                    <h4>Llamanos</h4>
                                    <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">
                                    <a href="tel://0123456789">(+51) 999 137 322</a>
                                    
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="icon">
                                    <img class="icon-img" src="/images/icons/c2.png" alt="Icon">
                                </div>
                                <div class="content">
                                    <h4>Email</h4>
                                    <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">
                                    <a href="mailto://support@gmail.com">informes@ruwaytec.com</a>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="icon">
                                    <img class="icon-img" src="/images/icons/c3.png" alt="Icon">
                                </div>
                                <div class="content">
                                    <h4>Ubicación</h4>
                                    <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">
                                    <p>Ca.Antonio Garland 625 - SMP <br>Lima, PERÚ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" data-aos="fade-up" data-aos-duration="1000">
            <div class="row">
                <div class="col-md-9 col-lg-4 col-xl-4">
                    <div class="widget-item mt-0">
                        <div class="about-widget">
                            <n-link to="/" class="footer-logo">
                                <img src="/images/logo/logo_RUWAY.png" alt="Logo">
                            </n-link>
                            <p>Para estar al día con nuestras actualizaciones y publicaciones de trabajos.</p>
                            <div class="widget-newsletter">
                                <form>
                                    <input type="email" class="form-control" placeholder="Enter your email">
                                    <button type="submit" class="btn btn-theme">
                                        Subscribete ahora<i class="icon icofont-long-arrow-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-6">
                    <div class="widget-item menu-wrap-two-column">
                        <h4 class="widget-title">Todos los servicios</h4>
                        <img class="line-shape" src="/images/shape/line-s1.png" alt="shape">
                        <nav class="widget-menu-wrap">
                            <div class="row">
                                <div class="col-md-6">
                                    <ul class="nav-menu nav">
                                        <li><n-link to="/service-details">Desarrollo de software de escritorio</n-link></li>
                                        <li><n-link to="/service-details">Desarrollo de página web para negocio/empresa</n-link></li>
                                        <li><n-link to="/service-details">Desarrollo de firmware personalizado</n-link></li>
                                        <li><n-link to="/service-details">Diseño de electrónico y PCB</n-link></li>
                                        <li><n-link to="/service-details">Desarrollo de sistemas embebidos</n-link></li>
                                        <li><n-link to="/service-details">Procesamiento de señales, imágenes y telemetría</n-link></li>
                                        <li><n-link to="/service-details">Implementación Inteligencia Artificial en Hardware</n-link></li>
                                        <li><n-link to="/service-details">Modelado 3D de piezas para ingeniería</n-link></li>
                                        <li><n-link to="/service-details">Impresión 3D FDM/SLA</n-link></li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul class="nav-menu nav">
                                        <li><n-link to="/service-details">Servicio de corte Laser </n-link></li>
                                        <li><n-link to="/service-details">Servicio de mecanizado con CNC</n-link></li>
                                        <li><n-link to="/service-details">Consultoría en conceptualización de productos IOT</n-link></li>
                                        <li><n-link to="/service-details">Aplicaciones IOT basados en AWS</n-link></li>
                                        <li><n-link to="/service-details">Desarrollo de interfaz gráfica web/escritorio</n-link></li>
                                        <li><n-link to="/service-details">Implementación de Brocker IOT en la nube</n-link></li>
                                        <li><n-link to="/service-details">Implementación de redes industriales</n-link></li>
                                        <li><n-link to="/service-details">Programación de PLC</n-link></li>
                                        <li><n-link to="/service-details">Instrumentación industrial</n-link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="col-md-4 col-lg-2 col-xl-2 lg-pr-0">
                    <div class="widget-item menu-wrap-column">
                        <h4 class="widget-title">Enlases útiles</h4>
                        <img class="line-shape" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                        <nav class="widget-menu-wrap">
                            <ul class="nav-menu nav">
                                <li><n-link to="/">Misión & Visión</n-link></li>
                                <li><n-link to="/">Perfil del equipo</n-link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>



        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <div class="row align-items-center">
                        <div class="col-md-6 order-2 order-md-1">
                            <div class="widget-copyright">
                                <p>© 2022 <span>RUWAY TEC</span><i class="icofont-heart"></i>by <a href="#">ruway tec</a></p>
                            </div>
                        </div>
                        <div class="col-md-6 order-1 order-md-2">
                            <div class="widget-social-icons">
                                <a href="https://www.facebook.com/profile.php?id=100063552639710" target="_blank"><i class="icofont-facebook"></i></a>
                                <a href="#" target="_blank"><i class="icofont-whatsapp"></i></a>
                                <a href="https://www.linkedin.com/company/80447477" target="_blank"><i class="icofont-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/80447477" target="_blank"><i class="icofont-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    };
</script>