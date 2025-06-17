<script>
</script>

<template>
    <div class="slide2-container">
        
        <div class="titulos">
            <h1 id="Principal">Recicle e Adquira</h1>
            <h1 id="Secundario">NatureCoins</h1>
        </div>
        
        <div class="Borda">
            <div class="cards-info-container">
                <div class="card-info">
                    <img src="/src/assets/icons/Icon-Reuso.png" class="card-icon" alt="Ícone de reciclagem">
                    <h2 class="card-title">RECICLE MAIS</h2>
                    <p class="card-description">Registre ações sustentáveis em um de nossos postos e receba pontos automaticamente!</p>
                </div>
                <div class="card-info">
                    <img src="/src/assets/icons/Icon-Trofeu.png" class="card-icon" alt="Ícone de troféu">
                    <h2 class="card-title">GANHE PONTOS</h2>
                    <p class="card-description">Através do apoio à ações sustentáveis, ganhe pontos, os NatureCoins!</p>
                </div>
                <div class="card-info">
                    <img src="/src/assets/icons/Icon-Presente.png" class="card-icon" alt="Ícone de presente">
                    <h2 class="card-title">ADQUIRE PRÊMIOS</h2>
                    <p class="card-description">Troque seus NatureCoins por prêmios, descontos e experiências exclusivas!</p>
                </div>
                </div>
        </div>
    </div>    
</template>

<style scoped>
/* Adicionei 'scoped' para garantir que estes estilos afetem apenas este componente */

/* 5. Estilos para a logo e posicionamentos absolutos foram removidos */

.slide2-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 3px; /* Espaçamento entre o título e a caixa de cards */
    padding: 3px; /* Adiciona um respiro nas laterais */
}

.titulos {
    text-align: center;
}

#Principal {
    font-size: 3rem;
    color: #4ADE80; /* verde-claro */
    margin-bottom: 3px;
    font-weight: bold;
}

#Secundario {
    font-size: 2.5rem;
    color: #FFFFFF; /* Branco para melhor contraste com o fundo verde */
    font-weight: bold;
}

/* A borda agora apenas decora o container dos cards */
.Borda {
    width: 100%;
    max-width: 1100px; /* Limita a largura máxima da caixa de cards */
    border: 5px solid #4ADE80;
    border-radius: 20px;
    padding: 7px; /* Aumenta o espaçamento interno */
    background-color: rgba(0, 0, 0, 0.1); /* Fundo levemente escuro para destacar */
    backdrop-filter: blur(5px);
}

.cards-info-container {
    display: flex;
    flex-wrap: wrap; /* Permite que os cards quebrem a linha em telas menores */
    justify-content: center;
    align-items: stretch; /* Faz com que todos os cards tenham a mesma altura */
    gap: 2rem;
    width: 100%;
}

.card-info {
    background-color: #ffffff;
    border: 2px solid #4ADE80;
    border-radius: 10px;
    padding: 20px;
    width: 270px; /* Aumentei um pouco a largura */
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-info:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.card-icon {
    width: 50px;
    height: 50px;
}

.card-title {
    font-size: 1.5rem;
    color: #16A34A;
    margin: 10px 0;
    font-weight: bold;
}

.card-description {
    font-size: 1rem;
    color: #333333;
    line-height: 1.4;
}

</style>