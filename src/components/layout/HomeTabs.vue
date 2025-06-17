<template>
  <div class="tabs-container">
    <ul>
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ 'active-tab': currentSlide === index }"
        @click="changeSlide(index)"
      >
        {{ tab.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
// Define as propriedades que o componente espera receber.
// 'tabs' é um array de objetos com os nomes das abas.
// 'currentSlide' é o índice do slide atualmente ativo.
defineProps({
  tabs: Array,
  currentSlide: Number
});

// Define os eventos que o componente pode emitir.
// 'change-slide' será emitido com o índice da aba clicada.
const emit = defineEmits(['change-slide']);

// Função para emitir o evento quando uma aba é clicada.
function changeSlide(index) {
  emit('change-slide', index);
}
</script>

<style scoped>
.tabs-container {
  position: fixed; /* Fixa na tela */
  right: 2rem; /* Alinhado à direita */
  top: 50%; /* Centralizado verticalmente */
  transform: translateY(-50%);
  z-index: 10; /* Garante que fique sobre os slides */
  background-color: rgba(22, 101, 52, 0.7); /* Verde escuro semi-transparente */
  border-radius: 2rem;
  padding: 0.75rem 0.5rem;
  backdrop-filter: blur(4px); /* Efeito de vidro fosco */
}

.tabs-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column; /* Deixa as abas na vertical */
  gap: 1rem;
}

.tabs-container li {
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
}

/* Bolinha que representa a aba */
.tabs-container li::before {
  content: '';
  position: absolute;
  left: -0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  transition: all 0.3s ease;
  opacity: 0.5;
}

.tabs-container li:hover,
.tabs-container li.active-tab {
  color: #4ade80; /* Verde claro ao passar o mouse ou quando ativo */
}

/* Estilo da bolinha para a aba ativa */
.tabs-container li.active-tab::before {
  opacity: 1;
  background-color: #4ade80; /* Verde claro */
  transform: translateY(-50%) scale(1.4); /* Aumenta o tamanho da bolinha ativa */
}
</style>