<script>
import slide1 from '../components/layout/slide1.vue'
import slide2 from '../components/layout/slide2.vue'
import slide3 from '../components/layout/slide3.vue'
import footerslide from '../components/layout/footerslide.vue'
export default {
    components: {
            slide1,
            slide2,
            slide3,
            footerslide
        },
  data() {
    return {
      slides: [
        'slide1',
        'slide2',
        'slide3',
        'footerslide'
      ],
      currentSlide: 0,
      isScrolling: false
    };
  },
  methods: {
    mudarSlide(indice){
        this.currentSlide = indice;
    },
    onScroll(event) {
      if (this.isScrolling) return;
      this.isScrolling = true;
      if (event.deltaY > 0 && this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      } else if (event.deltaY < 0 && this.currentSlide > 0) {
        this.currentSlide--;
      }
      setTimeout(() => {
        this.isScrolling = false;
      }, 700); // tempo do bloqueio para evitar múltiplos scrolls rápidos
    }
  },
};
</script>

<template>
  <div class="slides-container" tabindex="0" @wheel.prevent="onScroll">
    <transition name="slide" mode="out-in">
      <component
        :is="slides[currentSlide]"
        :key="currentSlide"
        class="slide"
        @mudar-slide="mudarSlide"
    />
    </transition>
  </div>
</template>


<style>
.slides-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: transparent;
}
.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background:transparent;
  transition: opacity 0.7s;
}
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.7s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>