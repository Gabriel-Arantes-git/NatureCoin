<script setup>
</script>

<template>
    <div class="corpoNavbar">
        <div class="conteiner">
            <div class="inicio">
                <img src="../../assets/icons/Logo.png" style="width: 2.5rem; height: 2.5rem;" alt="">
                <a href="../../pages/Home_Page.vue">NatureCoin</a>
            </div>
            
            <div class="botoes">
                <div class="opcoes ">Inicio</div>
                <div class="opcoes ">Prêmios</div>
                <div class="opcoes ">Painel</div>
            </div>
            
            <div class="botoesLogin">CCC</div>
        </div>
    </div>
</template>

<style>
    a{
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
        
        background-color: #15803D;
        border-radius:1rem;
        height: 2.5rem;
        justify-content: center;

    }
    .conteiner{
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-content: center;
        justify-items: start;
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

    }
    .botoesLogin{
        justify-content: end;
    }
    .opcoes{
        margin-left:1rem;
        color: #FFFFFF;
    }
</style>