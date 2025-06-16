<script>
import PrimaryButton from '../utilities/PrimaryButton.vue';

</script>

<template>
<div>
    <img src="/src/assets/icons/Logo.png" id="logo">
    <div class="Borda">
        <div class="titulos">
            <h1 id="Principal">Recicle e Adquira</h1>
            <h1 id="Secundario">NatureCoins</h1>
        </div>
        <div class="cards-info-container">
            <div class="card-info" id="card1">
                <img src="/src/assets/icons/Icon-Reuso.png" class="card-icon">
                <h2 class="card-title">RECICLE MAIS</h2>
                <p class="card-description">Registre ações sustentáveis em um de nossos postos e receba pontos automaticamente!</p>
            </div>
            <div class="card-info" id="card2">
                <img src="/src/assets/icons/Icon-Trofeu.png" class="card-icon">
                <h2 class="card-title">GANHE PONTOS</h2>
                <p class="card-description">Através do apoio à ações sustentáveis, ganhe pontos, os NatureCoins!</p>
            </div>
            <div class="card-info" id="card3">
                <img src="/src/assets/icons/Icon-Presente.png" class="card-icon">
                <h2 class="card-title">ADQUIRE PRÊMIOS</h2>
                <p class="card-description">Troque seus NatureCoins por prêmios, descontos e experiências exclusivas!</p>
            </div>
            <PrimaryButton>Comece Agora</PrimaryButton>
        </div>
    </div>
</div>    
</template>

<style>
#logo {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100px;
}

.Borda {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border: 5px solid #4ADE80;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.titulos {
    text-align: center;
}

#Principal {
    font-size: 3rem;
    color: #4ADE80;
    margin-bottom: 0.5rem;
}

#Secundario {
    font-size: 2rem;
    color: #4ADE80;
}

.cards-info-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

}

.card-info {
    background-color: #ffffff;
    border: 2px solid #4ADE80;
    border-radius: 10px;
    padding: 20px;
    width: 250px;
    text-align: center;
}

.card-icon {
    width: 50px;
    height: 50px;
}

.card-title {
    font-size: 1.5rem;
    color: #4ADE80;
    margin: 10px 0;
}

.card-description {
    font-size: 1rem;
    color: #333333;
}

#card1 {
    grid-column: 1;
}

#card2 {
    grid-column: 2;
}

#card3 {
    grid-column: 3;
}

</style>