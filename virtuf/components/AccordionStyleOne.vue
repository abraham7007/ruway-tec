<template>
    <div class="accordion">
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-1 class="accordion-button">
                    <span class="icon-box">
                        <i class="icon icofont-plus"></i>
                        <i class="icon icofont-minus"></i>
                    </span>
                    ¿Qué tipo de proyectos desarrollan en RUWAY TEC?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        En RUWAY TEC desarrollamos e implementamos soluciones como hardware, software, inteligencia artificial, procesamiento de señales, redes industriales e internet de las cosas. Estamos en constante aprendizaje para ofrecer a nuestros clientes la mejor solución a sus necesidades dentro de su empresa y/o negocio.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-2 class="accordion-button">
                    <span class="icon-box">
                        <i class="icon icofont-plus"></i>
                        <i class="icon icofont-minus"></i>
                    </span>
                    ¿También desarrollan equipos industriales y biomédicos?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        Nuestro Equipo de desarrollo e investigación cuenta con amplia experiencia en el diseño y construcción de equipos industriales como por ejemplo equipo de conteo de peces y alevines basado en visión por computadora, equipos de anestesia para animales equinos, sistemas de oxigenoterapia de bajo y alto flujo. 
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-3 class="accordion-button">
                    <span class="icon-box">
                        <i class="icon icofont-plus"></i>
                        <i class="icon icofont-minus"></i>
                    </span>
                    ¿En qué consiste los servicios de fabricación digital?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                     La fabricación digital consiste en construir prototipos y productos haciendo uso de impresoras 3D, maquinas de corte laser y CNC. Todo esto en diferentes materiales como filamentos, resina, madera, MDF, etc.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-4 class="accordion-button">
                    <span class="icon-box">
                        <i class="icon icofont-plus"></i>
                        <i class="icon icofont-minus"></i>
                    </span>
                    ¿Son proveedores de equipos de industriales y componentes electrónicos?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-4" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        RUWAY TEC cuenta con socios estratégicos a nivel global, trabajamos con proveedores de equipos industriales de las mejores marcas a nivel mundial IFM, FESTO, SIEMENS, PARKER, FANUC, OMRON, ELE International, EPEC, Balluff, SICK, Sensorpart, Maumer y otros.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>