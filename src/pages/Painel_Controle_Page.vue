<script setup>
import { ref } from 'vue';
import PrimaryButton from '../components/utilities/PrimaryButton.vue';
// O componente global Alerta.vue não é mais necessário aqui.

// --- Estado Reativo para o Formulário ---
const nomeAcao = ref('');
const descricaoAcao = ref('');
const categoriaAcao = ref('doacao');
const fotoComprovante = ref(null);

// --- Estado Reativo para o Histórico de Ações ---
const acoesCadastradas = ref([
  { id: 1, nome: 'Doação de Agasalhos', categoria: 'Doação', status: 'Aprovado', pontos: 50 },
  { id: 2, nome: 'Reciclagem de 5kg de Plástico', categoria: 'Reciclagem', status: 'Pendente', pontos: 0 }
]);

// --- MUDANÇA: Estado para o novo Pop-up de Sucesso ---
const mostrarPopupSucesso = ref(false);
const ultimaAcaoCadastrada = ref(null); // Vai guardar os dados da ação recém-criada

/**
 * Função chamada quando o formulário é enviado.
 */
function cadastrarAcao() {
  if (nomeAcao.value.trim() === '') {
    // Para simplificar, vamos remover a validação por alerta por enquanto.
    // Uma validação mais visual pode ser adicionada depois.
    alert('Por favor, preencha o nome da ação.');
    return;
  }

  const novaAcao = {
    id: Date.now(),
    nome: nomeAcao.value,
    // Deixa a primeira letra maiúscula: "doacao" -> "Doação"
    categoria: categoriaAcao.value.charAt(0).toUpperCase() + categoriaAcao.value.slice(1),
    status: 'Pendente',
    pontos: 0
  };

  acoesCadastradas.value.unshift(novaAcao);

  // --- MUDANÇA: Lógica do Pop-up ---
  // Guarda a ação que acabamos de criar.
  ultimaAcaoCadastrada.value = novaAcao; 
  // Ativa a exibição do novo pop-up de sucesso.
  mostrarPopupSucesso.value = true;

  // Limpa os campos do formulário.
  nomeAcao.value = '';
  descricaoAcao.value = '';
  categoriaAcao.value = 'doacao';
  fotoComprovante.value = null;
  // Limpa o input de arquivo visualmente
  document.getElementById('foto-comprovante').value = ''; 
}
</script>

<template>
  <div class="painel-container">
    <h1 class="titulo-pagina">Painel de Controle</h1>
    <p class="descricao-pagina">Cadastre suas ações e acompanhe seus pontos!</p>

    <div class="form-section">
      <h2 class="section-title">Cadastrar Nova Ação Sustentável</h2>
      <form @submit.prevent="cadastrarAcao" class="acao-form">
        <div class="form-group">
          <label for="nome-acao">Nome da Ação (Ex: Doação de roupas)</label>
          <input id="nome-acao" type="text" v-model="nomeAcao" placeholder="Digite o nome da sua ação" required>
        </div>
        <div class="form-group">
          <label for="descricao-acao">Descrição (Opcional)</label>
          <textarea id="descricao-acao" v-model="descricaoAcao" rows="3" placeholder="Descreva os itens ou a ação realizada"></textarea>
        </div>
        <div class="form-group">
          <label for="categoria-acao">Categoria</label>
          <select id="categoria-acao" v-model="categoriaAcao">
            <option value="doacao">Doação</option>
            <option value="reciclagem">Reciclagem</option>
            <option value="voluntariado">Trabalho Voluntário</option>
            <option value="outra">Outra</option>
          </select>
        </div>
        <div class="form-group">
          <label for="foto-comprovante">Foto de Comprovação</label>
          <input id="foto-comprovante" type="file" @change="fotoComprovante = $event.target.files[0]">
        </div>
        <PrimaryButton type="submit">Cadastrar Ação</PrimaryButton>
      </form>
    </div>

    <div class="history-section">
      <h2 class="section-title">Minhas Ações</h2>
      <div v-if="acoesCadastradas.length > 0" class="acoes-list">
        <div v-for="acao in acoesCadastradas" :key="acao.id" class="acao-card" :class="`status-border-${acao.status.toLowerCase()}`">
          <div class="acao-info">
            <h3 class="acao-nome">{{ acao.nome }}</h3>
            <p class="acao-categoria">{{ acao.categoria }}</p>
          </div>
          <div class="acao-status" :class="`status-text-${acao.status.toLowerCase()}`">
            <span>{{ acao.status }}</span>
            <span v-if="acao.status === 'Aprovado'" class="acao-pontos">+{{ acao.pontos }} pontos</span>
          </div>
        </div>
      </div>
      <p v-else class="sem-acoes">Você ainda não cadastrou nenhuma ação.</p>
    </div>

    <div v-if="mostrarPopupSucesso" class="success-popup-overlay">
      <div class="success-popup-content">
        <h3>Ação Cadastrada! 🚀</h3>
        <p>Sua ação foi enviada para análise.</p>
        <div class="acao-details">
          <strong>Nome:</strong> {{ ultimaAcaoCadastrada.nome }}<br>
          <strong>Categoria:</strong> {{ ultimaAcaoCadastrada.categoria }}
        </div>
        <button @click="mostrarPopupSucesso = false" class="close-btn">Fechar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos gerais para o container do painel */
.painel-container {
  color: #FFFFFF;
  padding: 2rem;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.titulo-pagina {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.descricao-pagina {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #D1D5DB;
}

/* Estilos para as seções */
.form-section, .history-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border-left: 4px solid #4ADE80;
  padding-left: 0.75rem;
}

/* Estilos para o formulário */
.acao-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input[type="text"],
.form-group textarea,
.form-group select,
.form-group input[type="file"] {
  background-color: #F9FAFB;
  border: 1px solid #D1D5DB;
  border-radius: 0.5rem;
  padding: 0.75rem;
  color: #1F2937;
  font-family: 'Oxanium', sans-serif;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #9CA3AF;
}

/* Estilos para a lista de histórico */
.history-section .sem-acoes {
  color: #D1D5DB;
  text-align: center;
  padding: 1rem;
}

.acoes-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.acao-card {
  background-color: #FFFFFF;
  color: #1F2937;
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 5px solid transparent;
  transition: all 0.2s ease;
}

.acao-card:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.acao-nome {
  font-size: 1.1rem;
  font-weight: bold;
}

.acao-categoria {
  color: #6B7280;
  font-size: 0.9rem;
}

.acao-status {
  text-align: right;
}

.acao-status span {
  display: block;
  font-weight: bold;
}

.acao-pontos {
  font-size: 0.9rem;
  color: #16A34A;
}

/* Cores dinâmicas para o status */
.status-text-aprovado { color: #16A34A; }
.status-border-aprovado { border-left-color: #16A34A; }

.status-text-pendente { color: #F59E0B; }
.status-border-pendente { border-left-color: #F59E0B; }

.status-text-rejeitado { color: #EF4444; }
.status-border-rejeitado { border-left-color: #EF4444; }


/* --- MUDANÇA: Estilos para o novo Pop-up de Sucesso --- */
.success-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.success-popup-content {
  background-color: #FFFFFF;
  color: #1F2937;
  padding: 2rem;
  border-radius: 0.75rem;
  text-align: center;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.success-popup-content h3 {
  font-size: 1.5rem;
  color: #16A34A;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.success-popup-content p {
  margin-bottom: 1rem;
}

.acao-details {
  background-color: #F3F4F6;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #4ADE80;
}

.close-btn {
  all: unset;
  cursor: pointer;
  background-color: #4ADE80;
  color: #FFFFFF;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background-color: #16A34A;
  transform: scale(1.05);
}
</style>