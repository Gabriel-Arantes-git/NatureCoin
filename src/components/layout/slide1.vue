<script>
import PrimaryButton from '../utilities/PrimaryButton.vue'
import SecundaryButton from '../utilities/SecundaryButton.vue';

export default {
    components: {
        PrimaryButton,
        SecundaryButton
    },
    // O script não precisa de alterações.
}
</script>

<template>
    <div class="container-slide1">
        
        <div class="left-content">
            <div class="text-content">
                <h1 class="special animate-fade-in-down">TRANSFORME</h1>
                <h1 id="text-slide" class="animate-fade-in-down delay-1">
                    ALGO QUE SOBRA <br>
                    EM ALGO QUE
                </h1>
                <h1 class="special animate-fade-in-down delay-2">SOMA</h1>
                <div class="buttons animate-fade-in-up">
                    <PrimaryButton>Comece Agora</PrimaryButton>
                    <SecundaryButton>Saiba Mais</SecundaryButton>
                </div>
            </div>
        </div>

        <div class="right-content">
            <img 
                src="/src/assets/icons/Imagem-Principal-Home.png" 
                id="Imagem-Principal" 
                class="animate-float" 
                alt="Ilustração de sustentabilidade" 
            />
        </div>
    </div>
</template>

<style scoped>
/* Adicionado 'scoped' para garantir que os estilos sejam locais */

.container-slide1 {
    /* 1. Fundo verde removido para usar o fundo global do App.vue */
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 100vh;
    width: 100vw;
    /* 2. Usando padding e gap para um layout mais robusto */
    padding: 0 5%; 
    gap: 2rem;
    overflow: hidden; /* Garante que as animações não "vazem" */
}

.left-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-content {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
}

.right-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.special {
    color: #FFFFFF;
    /* 3. Tipografia ajustada para a fonte do projeto (Oxanium) */
    font-family: 'Oxanium', sans-serif;
    font-size: 5.5rem;
    font-weight: 800; /* Mais peso para a fonte Oxanium */
    /* 4. Sombra de texto mais suave e profissional */
    text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.35);
    margin: 0;
}

#text-slide {
    color: rgba(229, 231, 235, 0.9); /* Tom de branco levemente acinzentado */
    font-family: 'Oxanium', sans-serif;
    font-size: 3rem;
    text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
    margin: 0;
    font-weight: 400;
}

.buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2.5rem; /* Mais espaço acima dos botões */
}

#Imagem-Principal {
    width: 100%;
    max-width: 600px;
    height: auto;
    /* 5. Sombra sutil na imagem para dar profundidade */
    filter: drop-shadow(0px 10px 25px rgba(0,0,0,0.3));
}

/* --- ANIMAÇÕES --- */
/* 6. Keyframes para as animações de entrada e flutuação */

@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
}

/* Classes utilitárias para aplicar as animações */
.animate-fade-in-down {
    opacity: 0; /* Inicia invisível */
    animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fade-in-up {
    opacity: 0; /* Inicia invisível */
    animation: fadeInUp 0.8s ease-out forwards;
    animation-delay: 0.6s;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* Atraso para criar um efeito escalonado */
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }

</style>