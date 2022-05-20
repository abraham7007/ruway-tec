import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4b955bb7 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _44f73a30 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _632325dd = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _83abc36c = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _f895be7a = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _35d1d8b8 = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _48c96e5f = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _d4066b58 = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _6b4d367c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4b955bb7,
    name: "about"
  }, {
    path: "/blog",
    component: _44f73a30,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _632325dd,
    name: "blog-details"
  }, {
    path: "/contact",
    component: _83abc36c,
    name: "contact"
  }, {
    path: "/project",
    component: _f895be7a,
    name: "project"
  }, {
    path: "/project-details",
    component: _35d1d8b8,
    name: "project-details"
  }, {
    path: "/service",
    component: _48c96e5f,
    name: "service"
  }, {
    path: "/service-details",
    component: _d4066b58,
    name: "service-details"
  }, {
    path: "/",
    component: _6b4d367c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
