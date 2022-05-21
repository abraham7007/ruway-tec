<template>
    <ul class="main-menu nav justify-content-center">
        <li>
            <n-link to="/">Inicio</n-link>
        </li>
        <li>
            <n-link to="/about">Nosotros</n-link>
        </li>
        <li class="has-submenu">
            <n-link to="/service">Servicios</n-link>
            <ul class="submenu-nav">
                <li>
                    <n-link to="/service">Servicios</n-link>
                </li>
                <li>
                    <n-link to="/service-details">Detalles de servicios</n-link>
                </li>
            </ul>
        </li>
        <li class="has-submenu">
            <n-link to="/project">Proyectos</n-link>
            <ul class="submenu-nav">
                <li>
                    <n-link to="/project">Proyectos</n-link>
                </li>
                <li>
                    <n-link to="/project-details">Detalles de Proyectos</n-link>
                </li>
            </ul>
        </li>
        <li>
            <n-link to="/contact">Contactos</n-link>
        </li>
    </ul>
</template>