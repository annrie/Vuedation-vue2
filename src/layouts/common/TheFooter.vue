<template>
  <div class="back-to-top-sticky hide-for-print" data-sticky-container>
    <div
      id="backtotop"
      class="back-to-top"
      data-sticky
      data-stick-to="bottom"
      data-sticky-on="small"
      data-top-anchor="content-top:top"
      data-btm-anchor="footer:top"
      data-margin-bottom="0"
    >
      <aside class="back_to_top">
        <a href="#main" data-smooth-scroll>
          <i class="fas fa-arrow-circle-up fa-3x"></i>
          <span>トップへ戻る</span>
        </a>
      </aside>
    </div>

    <footer id="footer" class="footer">
      <div class="section-spacing">
        <div class="footer-container">
          <div class="grid-x grid-padding-x grid-padding-y align-center-middle">
            <div class="cell medium-shrink medium-order-2">
              <nav aria-label="Privacy menu"></nav>
            </div>
            <div class="cell medium-auto medium-offset-1 text-center medium-order-1">
              <p>Copyright &copy;{{ year }} vuedation project.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  let now = new Date()
  let year = now.getFullYear()
  export default {
    data() {
      return {
        year,
      }
    },
  }
</script>
