import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AboutOne: () => import('../..\\components\\AboutOne.vue' /* webpackChunkName: "components/about-one" */).then(c => wrapFunctional(c.default || c)),
  AboutTwo: () => import('../..\\components\\AboutTwo.vue' /* webpackChunkName: "components/about-two" */).then(c => wrapFunctional(c.default || c)),
  AccordionStyleOne: () => import('../..\\components\\AccordionStyleOne.vue' /* webpackChunkName: "components/accordion-style-one" */).then(c => wrapFunctional(c.default || c)),
  BlogDetailsWrapper: () => import('../..\\components\\BlogDetailsWrapper.vue' /* webpackChunkName: "components/blog-details-wrapper" */).then(c => wrapFunctional(c.default || c)),
  BlogSection: () => import('../..\\components\\BlogSection.vue' /* webpackChunkName: "components/blog-section" */).then(c => wrapFunctional(c.default || c)),
  BlogWrapper: () => import('../..\\components\\BlogWrapper.vue' /* webpackChunkName: "components/blog-wrapper" */).then(c => wrapFunctional(c.default || c)),
  BrandLogoSection: () => import('../..\\components\\BrandLogoSection.vue' /* webpackChunkName: "components/brand-logo-section" */).then(c => wrapFunctional(c.default || c)),
  CommentForm: () => import('../..\\components\\CommentForm.vue' /* webpackChunkName: "components/comment-form" */).then(c => wrapFunctional(c.default || c)),
  CommentList: () => import('../..\\components\\CommentList.vue' /* webpackChunkName: "components/comment-list" */).then(c => wrapFunctional(c.default || c)),
  ContactDevider: () => import('../..\\components\\ContactDevider.vue' /* webpackChunkName: "components/contact-devider" */).then(c => wrapFunctional(c.default || c)),
  ContactWrapper: () => import('../..\\components\\ContactWrapper.vue' /* webpackChunkName: "components/contact-wrapper" */).then(c => wrapFunctional(c.default || c)),
  FaqOne: () => import('../..\\components\\FaqOne.vue' /* webpackChunkName: "components/faq-one" */).then(c => wrapFunctional(c.default || c)),
  FeatureList: () => import('../..\\components\\FeatureList.vue' /* webpackChunkName: "components/feature-list" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  FooterTwo: () => import('../..\\components\\FooterTwo.vue' /* webpackChunkName: "components/footer-two" */).then(c => wrapFunctional(c.default || c)),
  FunFactOne: () => import('../..\\components\\FunFactOne.vue' /* webpackChunkName: "components/fun-fact-one" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  HeroSlider: () => import('../..\\components\\HeroSlider.vue' /* webpackChunkName: "components/hero-slider" */).then(c => wrapFunctional(c.default || c)),
  MobileNavigation: () => import('../..\\components\\MobileNavigation.vue' /* webpackChunkName: "components/mobile-navigation" */).then(c => wrapFunctional(c.default || c)),
  Navigation: () => import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c)),
  OffCanvasMobileMenu: () => import('../..\\components\\OffCanvasMobileMenu.vue' /* webpackChunkName: "components/off-canvas-mobile-menu" */).then(c => wrapFunctional(c.default || c)),
  PageTitle: () => import('../..\\components\\PageTitle.vue' /* webpackChunkName: "components/page-title" */).then(c => wrapFunctional(c.default || c)),
  Pagination: () => import('../..\\components\\Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c)),
  PortfolioDetailsWrapper: () => import('../..\\components\\PortfolioDetailsWrapper.vue' /* webpackChunkName: "components/portfolio-details-wrapper" */).then(c => wrapFunctional(c.default || c)),
  PortfolioSection: () => import('../..\\components\\PortfolioSection.vue' /* webpackChunkName: "components/portfolio-section" */).then(c => wrapFunctional(c.default || c)),
  PortfolioWrapper: () => import('../..\\components\\PortfolioWrapper.vue' /* webpackChunkName: "components/portfolio-wrapper" */).then(c => wrapFunctional(c.default || c)),
  PostAuthorInfo: () => import('../..\\components\\PostAuthorInfo.vue' /* webpackChunkName: "components/post-author-info" */).then(c => wrapFunctional(c.default || c)),
  ServiceCategoryWidget: () => import('../..\\components\\ServiceCategoryWidget.vue' /* webpackChunkName: "components/service-category-widget" */).then(c => wrapFunctional(c.default || c)),
  ServiceDetailsWrapper: () => import('../..\\components\\ServiceDetailsWrapper.vue' /* webpackChunkName: "components/service-details-wrapper" */).then(c => wrapFunctional(c.default || c)),
  ServiceItem: () => import('../..\\components\\ServiceItem.vue' /* webpackChunkName: "components/service-item" */).then(c => wrapFunctional(c.default || c)),
  ServiceOne: () => import('../..\\components\\ServiceOne.vue' /* webpackChunkName: "components/service-one" */).then(c => wrapFunctional(c.default || c)),
  ServiceWrapper: () => import('../..\\components\\ServiceWrapper.vue' /* webpackChunkName: "components/service-wrapper" */).then(c => wrapFunctional(c.default || c)),
  ShapeWithAnimation: () => import('../..\\components\\ShapeWithAnimation.vue' /* webpackChunkName: "components/shape-with-animation" */).then(c => wrapFunctional(c.default || c)),
  TeamSection: () => import('../..\\components\\TeamSection.vue' /* webpackChunkName: "components/team-section" */).then(c => wrapFunctional(c.default || c)),
  TestimonialOne: () => import('../..\\components\\TestimonialOne.vue' /* webpackChunkName: "components/testimonial-one" */).then(c => wrapFunctional(c.default || c)),
  WidgetRecentPost: () => import('../..\\components\\WidgetRecentPost.vue' /* webpackChunkName: "components/widget-recent-post" */).then(c => wrapFunctional(c.default || c)),
  WidgetSearch: () => import('../..\\components\\WidgetSearch.vue' /* webpackChunkName: "components/widget-search" */).then(c => wrapFunctional(c.default || c)),
  WidgetSocial: () => import('../..\\components\\WidgetSocial.vue' /* webpackChunkName: "components/widget-social" */).then(c => wrapFunctional(c.default || c)),
  WidgetTags: () => import('../..\\components\\WidgetTags.vue' /* webpackChunkName: "components/widget-tags" */).then(c => wrapFunctional(c.default || c)),
  WidgetVideo: () => import('../..\\components\\WidgetVideo.vue' /* webpackChunkName: "components/widget-video" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
