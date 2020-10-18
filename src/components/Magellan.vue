<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x">
      <div class="cell small-12 medium-3">
        <div
          id="magellan"
          class="sticky hide-for-small-only"
          data-sticky
          data-anchor="main"
          data-margin-top="10"
          data-offset="300"
          data-sticky-on="medium"
        >
          <div class="grid-x">
            <div class="cell">
              <h1>{{ msg }}</h1>
            </div>
            <div class="cell">
              <ul class="vertical menu" data-magellan>
                <li><a href="#first">First Section</a></li>
                <li><a href="#second">Second Section</a></li>
                <li><a href="#third">Third Section</a></li>
                <li class="menu-text">window width: {{ windowWidth }} px</li>
                <li class="menu-text">window height: {{ windowHeight }} px</li>
                <li class="menu-text">amount of scrolling: {{ windowPageYOffset }} px</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="cell small-12 medium-9">
        <h2 class="show-for-small-only">Magellan</h2>
        <div class="sections">
          <section id="first" data-magellan-target="first">
            <span>First Section</span>
          </section>
          <section id="second" data-magellan-target="second">
            <span>Second Section</span>
          </section>
          <section id="third" data-magellan-target="third">
            <span>Third Section</span>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Magellan',
    data() {
      return {
        msg: 'Magellan',
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        windowPageYOffset: window.pageYOffset,
      }
    },
    mounted() {
      this.sticky = new Foundation.Sticky($('#magellan'))
      this.magellan = new Foundation.Magellan($('#magellan'), {
        // These options can be declarative using the data attributes
        animationEasing: 'swing',
        dataOffset: 500,
      })
      window.addEventListener('resize', this.calculateWindowWidth)
      window.addEventListener('resize', this.calculateWindowHeight)
      window.addEventListener('scroll', this.calculateWindowPageYOffset)
    },
    destroyed() {
      this.magellan.destroy()
    },
    beforeDestroy() {
      window.addEventListener('resize', this.calculateWindowWidth)
      window.addEventListener('resize', this.calculateWindowHeight)
      window.addEventListener('scroll', this.calculateWindowPageYOffset)
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
  main {
    height: auto;
    .is-active {
      color: $white;
      background-color: $primary-color;
    }
    .sections {
      @include breakpoint(small) {
        margin-bottom: 50px;
      }
      @include breakpoint(medium) {
        margin-bottom: 300px;
      }
      section {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 500px;
        margin: 1rem;
        background: $light-gray;
        span {
          font-size: 2rem;
          font-weight: lighter;
        }
      }
    }
    .menu-text {
      font-size: smaller;
      font-weight: lighter;
    }
  }
</style>
