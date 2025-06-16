<script setup>
import PremioCard from './Premios_Page-Components/PremioCard.vue';

const premios = [
    {
        nome: "Desconto 15% - Loja de Roupas Eco",
        descricao: "15% off em roupas sustentáveis",
        pontos: 200
    },
    {
        nome: "Copo Ecológico",
        descricao: "Copo reutilizável feito de bambu",
        pontos: 120
    },
    {
        nome: "Vale-Transporte Verde",
        descricao: "Passe mensal para transporte público",
        pontos: 350
    },
    {
        nome: "Kit Sementes",
        descricao: "Kit com sementes de árvores nativas",
        pontos: 80
    },
    {
        nome: "Desconto 10% - Mercado Orgânico",
        descricao: "10% de desconto em compras acima de R$50",
        pontos: 150
    },
    {
    nome: "Garrafa Térmica Sustentável",
    descricao: "Garrafa reutilizável feita de aço inoxidável",
    pontos: 180
    },
    {
    nome: "Ecobag Personalizada",
    descricao: "Sacola ecológica personalizada para compras",
    pontos: 90
    },
    {
    nome: "Desconto 20% - Restaurante Vegano",
    descricao: "20% de desconto em refeições veganas selecionadas",
    pontos: 250
    }
];
</script>
<template>
    
    <div class="texto-principal">
        <h1 class="titulo-pagina">Prêmios Sust<span style="color:#4ADE80;">entáveis</span></h1>
        <p class="descricao-pagina">Troque seus pontos por prêmios que ajudam o meio ambiente!</p>
    </div>
    <div class="conteiner-geral">
        <div class="conteiner-pg">
            <PremioCard
                v-for="premio in premios"
                :key="premio.nome"
                :nome="premio.nome"
                :descricao="premio.descricao"
                :pontos="premio.pontos"/>
        </div> 
    </div>
    
   
</template>
<style>
.conteiner-geral{
    display: grid;
    grid-template-columns: 5fr 0.1fr;
}
.texto-principal{
    color: #FFFFFF;
}
.conteiner-pg {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2%;
    gap: 7%;
    align-items: stretch;
    justify-items: stretch;
    box-sizing: border-box;
    width: 100%;
}
.texto-principal {
    text-align: center;
    margin-bottom: 1rem;
}
</style>