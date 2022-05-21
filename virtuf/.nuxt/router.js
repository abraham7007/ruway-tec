import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e046ab0 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _67eb10cf = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _304cfcc4 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _bddd59fa = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _669c557c = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _4db94471 = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _2bb0a318 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _a43793e6 = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _2dbc4575 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0e046ab0,
    name: "about"
  }, {
    path: "/blog",
    component: _67eb10cf,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _304cfcc4,
    name: "blog-details"
  }, {
    path: "/contact",
    component: _bddd59fa,
    name: "contact"
  }, {
    path: "/project",
    component: _669c557c,
    name: "project"
  }, {
    path: "/project-details",
    component: _4db94471,
    name: "project-details"
  }, {
    path: "/service",
    component: _2bb0a318,
    name: "service"
  }, {
    path: "/service-details",
    component: _a43793e6,
    name: "service-details"
  }, {
    path: "/",
    component: _2dbc4575,
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
