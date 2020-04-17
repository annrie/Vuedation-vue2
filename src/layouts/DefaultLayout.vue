<template>
  <div id="app">
    <nav
      id="skip-links"
      class="skip-links"
      aria-label="Skip links"
      data-smooth-scroll
    >
      <a class="screen-reader-text" href="#main">Skip to content</a>
      <a class="screen-reader-text" href="#menu">Skip to navigation</a>
    </nav>
    <MyOffcanvas></MyOffcanvas>
    <div class="off-canvas-content" data-off-canvas-content>
      <div class="grid-y grid-frame">
        <div class="cell shrink">
          <div class="grid-container full" data-sticky-container></div>
          <MyMainnav></MyMainnav>
        </div>
        <div class="cell auto skip">
          <div class="grid-x">
            <div class="cell medium-cell-block-y">
              <div class="main-container">
                <div class="main-grid">
                  <main id="main" class="main-content-full-width">
                    <router-view />
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div id="content-top"></div>
          <MyFooter></MyFooter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHead from 'vue-head'
import scroller from 'vue-scrollto'
import MyFooter from './common/TheFooter.vue'
import MyOffcanvas from './common/TheOffcanvas.vue'
import MyMainnav from './common/TheMainnav.vue'

// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
// import {fas} from '@fortawesome/free-solid-svg-icons'
// import {faGithub} from '@fortawesome/free-brands-svg-icons'
Vue.use(VueHead)
Vue.use(scroller)
// const mainScrollTo = scroller()
// mainScrollTo('body')
// import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    MyFooter,
    MyOffcanvas,
    MyMainnav,
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.createPageTitle(to)
    },
  },
  mounted() {
    this.offCanvas = new Foundation.OffCanvas($('#offCanvas'))
    this.dropDown = new Foundation.DropdownMenu($('#dropDown'))
    this.drillDown = new Foundation.Drilldown($('#drillDown'), {
      // These options can be declarative using the data attributes
      animationDuration: 1500,
    })
    this.sticky = new Foundation.Sticky($('#mainNav'))
    this.smoothScroll = new Foundation.SmoothScroll($('#app'))
    let to = this.$route
    this.createPageTitle(to)
  },
  destroyed() {
    this.drillDown.destroy()
  },
  methods: {
    createPageTitle: function (to) {
      // タイトルを設定
      if (to.meta.title) {
        let setTitle = to.meta.title + ' | Vuedation'
        document.title = setTitle
      } else {
        document.title = 'Vuedation'
      }

      // メタタグdescription設定
      if (to.meta.desc) {
        let setDesc = to.meta.desc
        document
          .querySelector("meta[name='description']")
          .setAttribute('content', setDesc)
      } else {
        document
          .querySelector("meta[name='description']")
          .setAttribute('content', 'Vuedation')
      }
    },
  },
  head: {
    meta: [
      {name: 'description', content: 'descriptionの内容が入ります。'},
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,user-scalable=no',
      },
      {charset: 'utf-8'},
      {property: 'og:type', content: 'website'},
      {
        name: 'msaplication-TileImage',
        content: '/favicon/mstile-144x133.png',
      },
      {
        name: 'msaplication-config',
        content: '/favicon/browserconfig.xml',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/favicon/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      {
        rel: 'shortcut icon',
        href: '/favicon/favicon.ico',
      },
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'https://use.fontawesome.com/releases/v5.8.1/js/all.js',
        integrity:
          'sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ',
        crossorigin: 'anonymous',
        async: true,
        // body内に挿入したい場合は「body: true」を入れましょう
        // {type: 'text/javascript', src: '外部jsファイル', async: true, body: true},
      },
      {
        type: 'text/javascript',
        src: '/js/external.js',
        async: true,
        body: true,
      },
      {
        type: 'text/javascript',
        src: '/js/pageTop.js',
        async: true,
        body: true,
      },
    ],
  },
}
</script>

<style lang="scss">
.skip {
  overflow: auto;
}
main {
  height: 100vh;
}
</style>
