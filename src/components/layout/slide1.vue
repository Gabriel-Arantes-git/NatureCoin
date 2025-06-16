<script>
import PrimaryButton from '../utilities/PrimaryButton.vue'
import SecundaryButton from '../utilities/SecundaryButton.vue';
// export default {
//     methods: {
//         IrParaSlide2(){
//             this.$emit('mudar-slide', 1);
//         }
//     }
// }
</script>


<template>
    <div class="container">
        <div class="left-content">
            <div class="text-content">
            <h1 class="special">TRANSFORME</h1>
            <h1 id="text-slide">ALGO QUE SOBRA <br>
                EM ALGO QUE
            </h1>
            <h1 class="special">SOMA</h1>
            <div class="buttons">
            <PrimaryButton>Comece Agora</PrimaryButton>
            <SecundaryButton >Saiba Mais</SecundaryButton>
            </div>
            </div>
        </div>
        <div class="right-content">
            <img src="/src/assets/icons/Imagem-Principal-Home.png" id="Imagem-Principal" />
        </div>
    </div>
</template>

<style>
body{
    margin: 0;
    padding: 0;
    min-height: 100vh;;
}
.container {
    background-color: green;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    min-height: 100vh;
}

.text-content {
    display: flex;
    flex-direction: column;
    line-height: 1;
}
.left-content {
    grid-column: 1;
}

.right-content {
    grid-column: 2;
}
.special {
    color: whitesmoke;
    font-size: 5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: left;
    font-family: Century Gothic, sans-serif;
    left: 12%;
    transform: translate(12%, 0);
    margin-top: 0;
    margin-bottom: 0;
}
.buttons {
    display: flex;
    gap: 0.5rem;
    left: 12%;
    transform: translate(12%, 0);
}
#Imagem-Principal {
    width: 100%;
    height: auto;
    max-width: 600px;
    margin: 0 auto;
}
#text-slide {
    color:rgba(0, 0, 0, 0.5);
    font-size: 3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: left;
    left: 12%;
    transform: translate(12%, 0);
    margin-top: 0;
    margin-bottom: 0;;
    font-family: Century Gothic, sans-serif;
}
</style>