<template>
  <div class="grid-container">
    <div class="grid-x text-center">
      <div class="cell">
        <img class="vuedationlogo" :src="AssetsImage" alt="vuedation logo" />
      </div>
    </div>
    <div class="grid-x text-center">
      <div class="cell">
        <h1>{{ msg }}</h1>
        <p>
          This is a demo integration of Foundation for Sites 6.6 in a VueJS 2.6 with
          webpacksingle-page application.
        </p>
        <a href="https://jp.vuejs.org/" rel="noopener noreferrer" class="hollow button radius">
          <i class="fab fa-vuejs"></i>
          Vue Document (jp)
        </a>
        <a
          href="https://get.foundation/sites/docs/"
          rel="noopener noreferrer"
          class="hollow button secondary radius"
        >
          <i class="fas fa-file-code"></i>
          Foundation Document
        </a>
        <a
          href="https://github.com/annrie/Vuedation"
          rel="noopener noreferrer"
          class="hollow button success radius"
        >
          <i class="fab fa-github"></i>
          GitHub
        </a>
      </div>
      <div class="cell">
        <div>{{ $mq }}サイズ</div>
        <div v-if="small">
          smallサイズ
        </div>
        <div v-else-if="medium">
          mediumサイズ
        </div>
        <div v-else-if="tablet">
          tabletサイズ
        </div>
        <div v-else-if="largePlus">
          large+サイズ
        </div>
        <div v-else-if="large">
          largeサイズ
        </div>
        <div v-else-if="xlarge">
          xlargeサイズ
        </div>
        <div v-else>
          xxlargeサイズ
        </div>
        <div>window width: {{ windowWidth }} px</div>
        <div>window height: {{ windowHeight }} px</div>
        <div>amount of scrolling : {{ windowPageYOffset }} px</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueMq from 'vue-mq'
  import AssetsImage from '../assets/img/logo.png'
  import {fas, faFileCode} from '@fortawesome/free-solid-svg-icons'
  import {faGithub, faVuejs, fab} from '@fortawesome/free-brands-svg-icons'

  Vue.use(VueMq, {
    breakpoints: {
      small: 640,
      medium: 769,
      tablet: 1025,
      large: 1201,
      xlarge: 1441,
      xxlarge: Infinity,
    },
    defaultBreakpoint: 'small',
  })

  Vue.mixin({
    data() {
      return {
        small: false, // until 640px
        medium: false, // until 768px
        tablet: false, // from 1024px
        largePlus: false, // from 1024px and until 1200px
        large: false, // from 1024px
        xlarge: false, // from 1200px
        xxlarge: false, // from 1440px
      }
    },
  })

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Vuedation',
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        windowPageYOffset: window.pageYOffset,
        AssetsImage: AssetsImage,
      }
    },
    computed: {
      fas() {
        return fas
      },
      fab() {
        return fab
      },
      faGithub() {
        return faGithub
      },
      faVuejs() {
        return faVuejs
      },
      faFileCode() {
        return faFileCode
      },
    },
    watch: {
      $mq() {
        this.small = this.$mq === 'small'
        this.medium = this.$mq === 'medium'
        this.tablet = this.$mq === 'tablet'
        this.largePlus = this.$mq === 'xlarge' || this.$mq === 'xxlarge'
        this.large = this.$mq === 'large'
        this.xlarge = this.$mq === 'xlarge'
        this.xxlarge = this.$mq === 'xxlarge'
      },
    },
    mounted() {
      this.small = this.$mq === 'small'
      this.medium = this.$mq === 'medium'
      this.tablet = this.$mq === 'tablet'
      this.largePlus = this.$mq === 'xlarge' || this.$mq === 'xxlarge'
      this.large = this.$mq === 'large'
      this.xlarge = this.$mq === 'xlarge'
      this.xxlarge = this.$mq === 'xxlarge'
      window.addEventListener('resize', this.calculateWindowWidth)
      window.addEventListener('resize', this.calculateWindowHeight)
      window.addEventListener('scroll', this.calculateWindowPageYOffset)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.calculateWindowWidth)
      window.removeEventListener('resize', this.calculateWindowHeight)
      window.removeEventListener('scroll', this.calculateWindowPageYOffset)
    },
    methods: {
      calculateWindowWidth() {
        // resizeのたびに発火する
        this.windowWidth = window.innerWidth
      },
      calculateWindowHeight() {
        this.windowHeight = window.innerHeight
      },
      calculateWindowPageYOffset() {
        this.windowPageYOffset = window.pageYOffset
      },
    },
  }
</script>

<style lang="scss" scoped>
  h1,
  h2 {
    font-weight: normal;
    color: $black;
  }
  ul {
    padding: 0;
    list-style-type: none;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .vuedationlogo {
    // @include mui-animation(fade, zoom);
    @include mui-animation(fade);

    animation-duration: 10s;
  }
</style>
