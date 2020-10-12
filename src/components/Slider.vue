<template>
  <div class="grid-container">
    <div class="grid-x">
      <div class="cell">
        <h1>{{ msg }}</h1>
      </div>
      <div class="cell">
        <div class="grid-x grid-margin-x">
          <div class="cell small-10">
            <div
              id="slider"
              :data-initial-start="dataValue"
              :data-end="dataEnd"
              class="slider"
              data-slider
              data-step="10"
              data-position-value-function="log"
              data-non-linear-base="5"
            >
              <span
                class="slider-handle"
                data-slider-handle
                role="slider"
                tabindex="2"
                aria-controls="sliderOutputNonLinear"
              ></span>
              <!--span class="slider-fill" data-slider-fill />
              <input type="hidden" class="slider-input" /-->
            </div>
          </div>
          <div class="cell small-2">
            <input id="sliderOutputNonLinear" v-model="dataValue" type="number" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Slider',
    data() {
      return {
        msg: 'Slider',
        dataValue: 50,
        dataEnd: 200,
      }
    },
    mounted() {
      this.slider = new Foundation.Slider($('#slider'), {
        // These options can be declarative using the data attributes
        step: 10,
      })
      this.slider.$element.on('moved.zf.slider', () => {
        this.dataValue = this.slider.inputs.val()
      })
    },
    destroyed() {
      this.slider.destroy()
    },
  }
</script>
