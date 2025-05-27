<script setup>
</script>

<template>
    <div class="conteiner">

        <div class="logo">AAAAAA</div>
        <div class="opcoes ">BBBB</div>
        <div class="botoesLogin">CCC</div>

    </div>
</template>

<style>
    .conteiner{
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-content: center;
        justify-items: start;
    }
    .logo{
        justify-content: start;
        margin-right: 1.25rem;
    }
    .opcoes{
        justify-content: center;
    }
    .botoesLogin{
        justify-content: end;
    }
</style>