<template>
  <div class="grid-container">
    <div class="grid-y grid-padding-y">
      <div class="cell">
        <h1>{{ msg }}</h1>
      </div>
      <div class="cell">
        <div
          id="orbit"
          class="orbit"
          role="region"
          aria-label="Favorite Space Pictures"
          data-orbit
          data-use-m-u-i="false"
        >
          <div class="orbit-wrapper">
            <div class="orbit-controls">
              <button class="orbit-previous">
                <span class="show-for-sr">Previous Slide</span>
                &#9664;&#xFE0E;
              </button>
              <button class="orbit-next">
                <span class="show-for-sr">Next Slide</span>
                &#9654;&#xFE0E;
              </button>
            </div>
            <ul class="orbit-container">
              <li class="is-active orbit-slide">
                <figure class="orbit-figure">
                  <img class="orbit-image" :src="AssetsImage1" alt="Space" />
                  <figcaption class="orbit-caption">
                    Space, the final frontier.
                  </figcaption>
                </figure>
              </li>
              <li class="orbit-slide">
                <figure class="orbit-figure">
                  <img class="orbit-image" :src="AssetsImage2" alt="Space" />
                  <figcaption class="orbit-caption">Lets Rocket!</figcaption>
                </figure>
              </li>
              <li class="orbit-slide">
                <figure class="orbit-figure">
                  <img class="orbit-image" :src="AssetsImage3" alt="Space" />
                  <figcaption class="orbit-caption">Encapsulating</figcaption>
                </figure>
              </li>
              <li class="orbit-slide">
                <figure class="orbit-figure">
                  <img class="orbit-image" :src="AssetsImage4" alt="Space" />
                  <figcaption class="orbit-caption">
                    Outta This World
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
          <nav class="orbit-bullets">
            <button class="is-active" data-slide="0">
              <span class="show-for-sr">First slide details.</span>
              <span class="show-for-sr" data-slide-active-label>
                Current Slide
              </span>
            </button>
            <button data-slide="1">
              <span class="show-for-sr">Second slide details.</span>
            </button>
            <button data-slide="2">
              <span class="show-for-sr">Third slide details.</span>
            </button>
            <button data-slide="3">
              <span class="show-for-sr">Fourth slide details.</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AssetsImage1 from '../assets/img/orbit/01.jpg'
import AssetsImage2 from '../assets/img/orbit/02.jpg'
import AssetsImage3 from '../assets/img/orbit/03.jpg'
import AssetsImage4 from '../assets/img/orbit/04.jpg'

export default {
  name: 'Orbit',
  data() {
    return {
      msg: 'Orbit',
      AssetsImage1: AssetsImage1,
      AssetsImage2: AssetsImage2,
      AssetsImage3: AssetsImage3,
      AssetsImage4: AssetsImage4,
    }
  },
  mounted() {
    this.orbit = new Foundation.Orbit($('#orbit'))
  },
  destroyed() {
    this.orbit.destroy()
  },
}
</script>
