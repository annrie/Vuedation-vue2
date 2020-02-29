<template>
  <div class="grid-container">
    <div class="grid-x text-center">
      <div class="cell">
        <img src="/logo.png" />
        <!-- <img src="../assets/img/vue-yeti.jpg"> -->
      </div>
    </div>
    <div class="grid-x text-center">
      <div class="cell">
        <h1>{{ msg }}</h1>
        <p>
          This is a demo integration of Foundation for Sites 6.6 in a VueJS 2.6
          with webpacksingle-page application.
        </p>
        <a class="button secondary call-button" data-toggle="offCanvas">
          <i class="icon-puzzle"></i>
          JS Components
        </a>
        <a
          class="button secondary hollow call-button"
          href="https://github.com/vue-foundation/vue-foundation"
          rel="nofollow extend"
        >
          <i class="icon-github-circled"></i>
          Source
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Vue.js App',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
