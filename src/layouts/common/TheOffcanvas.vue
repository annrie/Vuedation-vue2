<template>
  <div
    id="offCanvas"
    class="multilevel-offcanvas mobile-off-canvas-menu off-canvas position-right"
    data-auto-focus="false"
    data-off-canvas
    aria-lavel="Mobile menu"
  >
    <button
      class="close-button"
      aria-label="Close menu"
      type="button"
      data-close
    >
      <span aria-hidden="true">&times;</span>
    </button>
    <ul
      id="drillDown"
      class="mobile-menu vertical menu"
      data-drilldown
      data-close
      data-submenu-toggle="true"
      data-parent-link="false"
      data-scroll-top="true"
    >
      <template v-for="menu in getAll">
        <li
          v-if="menu.sub != null"
          :key="menu.id"
          class="is-drilldown-submenu-parent"
          data-open
        >
          <a>{{ menu.category }}</a>
          <ul class="vertical dropdown menu">
            <li v-for="submenu in menu.sub" :key="submenu.id">
              <router-link
                :to="submenu.link"
                :exact="submenu.link == '/'"
                data-close
              >
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
  </div>
</template>

<script>
import jsonData from '../../assets/json/menu.json'
export default {
  data() {
    return {
      getAll: jsonData,
    }
  },
}
</script>
