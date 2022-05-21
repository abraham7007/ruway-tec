export { default as AboutOne } from '../..\\components\\AboutOne.vue'
export { default as AboutTwo } from '../..\\components\\AboutTwo.vue'
export { default as AccordionStyleOne } from '../..\\components\\AccordionStyleOne.vue'
export { default as BlogDetailsWrapper } from '../..\\components\\BlogDetailsWrapper.vue'
export { default as BlogSection } from '../..\\components\\BlogSection.vue'
export { default as BlogWrapper } from '../..\\components\\BlogWrapper.vue'
export { default as BrandLogoSection } from '../..\\components\\BrandLogoSection.vue'
export { default as CommentForm } from '../..\\components\\CommentForm.vue'
export { default as CommentList } from '../..\\components\\CommentList.vue'
export { default as ContactDevider } from '../..\\components\\ContactDevider.vue'
export { default as ContactWrapper } from '../..\\components\\ContactWrapper.vue'
export { default as FaqOne } from '../..\\components\\FaqOne.vue'
export { default as FeatureList } from '../..\\components\\FeatureList.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as FooterTwo } from '../..\\components\\FooterTwo.vue'
export { default as FunFactOne } from '../..\\components\\FunFactOne.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as HeroSlider } from '../..\\components\\HeroSlider.vue'
export { default as MobileNavigation } from '../..\\components\\MobileNavigation.vue'
export { default as Navigation } from '../..\\components\\Navigation.vue'
export { default as OffCanvasMobileMenu } from '../..\\components\\OffCanvasMobileMenu.vue'
export { default as PageTitle } from '../..\\components\\PageTitle.vue'
export { default as Pagination } from '../..\\components\\Pagination.vue'
export { default as PortfolioDetailsWrapper } from '../..\\components\\PortfolioDetailsWrapper.vue'
export { default as PortfolioSection } from '../..\\components\\PortfolioSection.vue'
export { default as PortfolioWrapper } from '../..\\components\\PortfolioWrapper.vue'
export { default as PostAuthorInfo } from '../..\\components\\PostAuthorInfo.vue'
export { default as ServiceCategoryWidget } from '../..\\components\\ServiceCategoryWidget.vue'
export { default as ServiceDetailsWrapper } from '../..\\components\\ServiceDetailsWrapper.vue'
export { default as ServiceItem } from '../..\\components\\ServiceItem.vue'
export { default as ServiceOne } from '../..\\components\\ServiceOne.vue'
export { default as ServiceWrapper } from '../..\\components\\ServiceWrapper.vue'
export { default as ShapeWithAnimation } from '../..\\components\\ShapeWithAnimation.vue'
export { default as TeamSection } from '../..\\components\\TeamSection.vue'
export { default as TestimonialOne } from '../..\\components\\TestimonialOne.vue'
export { default as WidgetRecentPost } from '../..\\components\\WidgetRecentPost.vue'
export { default as WidgetSearch } from '../..\\components\\WidgetSearch.vue'
export { default as WidgetSocial } from '../..\\components\\WidgetSocial.vue'
export { default as WidgetTags } from '../..\\components\\WidgetTags.vue'
export { default as WidgetVideo } from '../..\\components\\WidgetVideo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
