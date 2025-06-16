<template>
  <div v-if="visible" class="popup-overlay">
    <div class="popup">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <button @click="close">Fechar</button>
    </div>
  </div>
</template>

<script>
import TerciaryButton from '../../components/utilities/TerciaryButton.vue'
export default {
  name: 'Popup',
  props: {
    visible: Boolean,
    title: String,
    message: String
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  min-width: 300px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

.popup h2 {
  margin-top: 0;
}

.popup button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #4ADE80;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.popup button:hover {
    background-color: #ffffff;
    color: #4ADE80;
    border: #4ADE80 solid 1px;
    transition: background-color 0.3s ease;
    transform: scale(1.1);
  }
</style>
