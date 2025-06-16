<script setup>
import { useRouter } from 'vue-router';
import PrimaryButton from '../utilities/PrimaryButton.vue';
import SecundaryButton from '../utilities/SecundaryButton.vue';

const router = useRouter();
console.log(router);
const irParaHome = () => router.push({ name: 'Home' });
const irParaPremios = () => router.push({ name: 'Premios' });
const irParaPainel = () => router.push({ name: 'Dashboard' });
</script>

<template>
    <div class="corpoNavbar">
        <div class="conteiner">
            <div class="inicio">
                <img src="../../assets/icons/Logo.png" style="width: 2.5rem; height: 2.5rem;" alt="">
                <span id ="home" @click="irParaHome">NatureCoin</span>
            </div>
            
            <div class="botoes">
                <button class="opcoes" @click="irParaHome" >Inicio</button>
                <button class="opcoes" @click="irParaPremios">Prêmios</button>
                <button class="opcoes" @click="irParaPainel">Painel</button>
            </div>
            
            <div class="botoesLogin">
                <SecundaryButton>Entrar</SecundaryButton>
                <PrimaryButton>Cadastre-se</PrimaryButton>
                
            </div>
        </div>
    </div>
</template>

<style>
    .corpoNavbar:hover{
        transition: background-color 0.3s ease;
        transform: scale(1.005);
    }
    .opcoes:hover {
     color: #41E520;
     transition: background-color 0.3s ease;
     transform: scale(1.25);
     text-decoration: underline;
    }
    #home{
        font-size: 1.5rem;
        color: #FFFFFF;
        text-decoration: none;
    }
    .inicio{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
    .corpoNavbar{
        
        z-index: 2;
        background-color: rgba(21, 128, 61, 0.7);
        border-radius:1rem;
        height: 2.5rem;
        justify-content: center;
        
        

    }
    .conteiner{
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-content: center;
        
        padding: 0 20px;
    }
    .logo{
        justify-content: start;
        margin-right: 1.25rem;
    }
    .botoes{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;

    }
    .botoesLogin{
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 0.75rem;
    }
    .opcoes{
        all: unset;
        cursor: pointer;
        margin-left:1rem;
        color: #FFFFFF;
        font-size: 1.25rem;
    }
</style>