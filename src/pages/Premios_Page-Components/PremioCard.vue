<template>
  <div class="premio-card">
    <div class="premio-header">
      <span class="premio-title">{{ nome }}</span>
      <span class="premio-badge">Desconto</span>
    </div>
    <div class="premio-content">
      <p class="premio-desc">{{ descricao }}</p>
      <div class="premio-footer">
        <span class="premio-pontos">{{ pontos }} pontos</span>
        <TerciaryButton @click="$emit('resgatar')">Resgatar</TerciaryButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import TerciaryButton from '../../components/utilities/TerciaryButton.vue'
defineProps({
  nome: String,
  descricao: String,
  pontos: Number
})
defineEmits(['resgatar']);
</script>

<style scoped>

.premio-card {
   background: #ffffff;
  border: 1px solid #4ADE80;
  border-radius: 12px;
  padding: 1rem;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  box-shadow: 0 2px 8px #0001;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 9rem;
}
.premio-card:hover {
  box-shadow: 0 4px 16px #0002;
}
.premio-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.premio-title {
  font-size: 1.1rem;
  font-weight: bold;
}
.premio-badge {
  background: #bbf7d0;
  color: #166534;
  border-radius: 6px;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
}
.premio-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.premio-icon {
  width: 3rem;
  height: 3rem;
  background: #bbf7d0;
  color: #16a34a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1rem auto;
}
.premio-desc {
  color: #525252;
  margin-bottom: 1rem;
  text-align: center;
}
.premio-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

}
.premio-pontos {
  font-size: 1.2rem;
  font-weight: bold;
  color: #16a34a;
}

</style>