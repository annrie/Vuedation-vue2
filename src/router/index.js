/* eslint-disable */
// eslint-disable-next-line
import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from '@/components/Home'
import Reveal from '@/components/Reveal'
import Slider from '@/components/Slider'
import Tooltip from '@/components/Tooltip'
import DropdownMenu from '@/components/DropdownMenu'
import DrilldownMenu from '@/components/DrilldownMenu'
import AccordionMenu from '@/components/AccordionMenu'
import Magellan from '@/components/Magellan'
import Accordion from '@/components/Accordion'
import Dropdown from '@/components/Dropdown'
import Tabs from '@/components/Tabs'
import Orbit from '@/components/Orbit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    // routes
    {
      name: 'home',
      path: '/',
      component: Home,
      meta: {desc: "Vuedation's top page."},
    },
    {
      name: 'reveal',
      path: '/reveal',
      component: Reveal,
      meta: {title: 'Reveal', desc: "Reveal's sample page."},
    },
    {
      name: 'slider',
      path: '/slider',
      component: Slider,
      meta: {title: 'Slider', desc: "Slider's sample page."},
    },
    {
      name: 'tooltip',
      path: '/tooltip',
      component: Tooltip,
      meta: {title: 'Tooltip', desc: "Tooltip's sample page."},
    },
    {
      name: 'dropdown-menu',
      path: '/dropdownmenu',
      component: DropdownMenu,
      meta: {title: 'DropdownMenu', desc: "DropdownMenu's sample page."},
    },
    {
      name: 'drilldown-menu',
      path: '/drilldownmenu',
      component: DrilldownMenu,
      meta: {title: 'DrilldownMenu', desc: "DrilldownMenu's sample page."},
    },
    {
      name: 'accordionmenu',
      path: '/accordionmenu',
      component: AccordionMenu,
      meta: {title: 'AccordionMenu', desc: "AccordionMenu's sample page."},
    },
    {
      name: 'magellan',
      path: '/magellan',
      component: Magellan,
      meta: {
        title: 'Magellan',
        desc: "Magellan's sample page.",
        layout: 'normal',
      },
    },
    {
      name: 'accordion',
      path: '/accordion',
      component: Accordion,
      meta: {title: 'Accordion', desc: "Accordion's sample page."},
    },
    {
      name: 'dropdown',
      path: '/dropdown',
      component: Dropdown,
      meta: {title: 'Dropdown', desc: "Dropdown's sample page."},
    },
    {
      name: 'tabs',
      path: '/tabs',
      component: Tabs,
      meta: {title: 'Tabs', desc: "Tabs's sample page."},
    },
    {
      name: 'orbit',
      path: '/orbit',
      component: Orbit,
      meta: {title: 'Orbit', desc: "Orbit's sample page."},
    },
  ],
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.createPageTitle(to)
    },
  },
  mounted: function() {
    let to = this.$route
    this.createPageTitle(to)
  },
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
})
