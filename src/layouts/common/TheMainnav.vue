<template>
  <header
    id="mainNav"
    class="site-header sticky"
    data-sticky
    data-margin-top="0"
    style="width: 100%;"
    data-sticky-on="small"
  >
    <section
      class="site-title-bar title-bar"
      aria-label="Mobile navigation"
      data-hide-for="medium"
      tabindex="-1"
    >
      <div class="title-bar-left">
        <a href="/">Vuedation</a>
      </div>
      <div class="title-bar-right">
        <button class="menu-icon" type="button" data-open="offCanvas"></button>
      </div>
    </section>
    <section class="site-navigation top-bar" aria-label="Site navigation">
      <div class="top-bar-left">
        <div class="site-desktop-title top-bar-title">
          <a href="/" rel="home" data-smooth-scroll>
            <img :src="AssetsImage" alt="vuedation" />
            <component :is="tagName">Vuedation</component>
          </a>
        </div>
      </div>
      <nav class="top-bar-left" aria-label="Main menu" tabindex="-1">
        <ul id="dropDown" class="dropdown menu desktop-menu" data-dropdown-menu>
          <template v-for="menu in getAll">
            <li
              v-if="menu.sub != null"
              :key="menu.id"
              class="is-dropdown-submenu-parent"
            >
              <a>{{ menu.category }}</a>
              <ul class="vertical dropdown menu">
                <li v-for="submenu in menu.sub" :key="submenu.id">
                  <router-link :to="submenu.link" :exact="submenu.link == '/'">
                    {{ submenu.category }}
                  </router-link>
                </li>
              </ul>
            </li>
            <li v-else :key="menu.id">
              <router-link :to="menu.link" :exact="menu.link == '/'">
                {{ menu.category }}
              </router-link>
            </li>
          </template>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>
import jsonData from '../../assets/json/menu.json'
import AssetsImage from '../../assets/img/logo.png'

export default {
  data() {
    return {
      getAll: jsonData,
      AssetsImage: AssetsImage,
    }
  },
  computed: {
    tagName() {
      if (this.$route.name === 'home') {
        return 'h1'
      }
      return 'p'
    },
  },
}
</script>
