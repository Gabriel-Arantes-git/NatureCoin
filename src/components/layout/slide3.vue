<script>
export default {
    data() {
        return {
            developers: [
                { name: 'Danilo R. Toriy', github: '#', linkedin: '#', image: '/src/assets/icons/Logo.png' },
                { name: 'Gabriel Arantes', github: '#', linkedin: '#', image: '/src/assets/icons/Logo.png' },
                { name: 'Matheus P. Hermenegildo', github: '#', linkedin: '#', image: '/src/assets/icons/Logo.png' }
            ]
        };
    }
};
</script>

<template>
    <div class="slide3-container">
        
        <div class="Titulo">
            <h1 class="T1">NOSSA</h1><h1 class="T2">EQUIPE</h1>
        </div>

        <div class="cards-container">
            <div class="dev-card" v-for="dev in developers" :key="dev.name">
                
                <img :src="dev.image" class="Foto" alt="Foto do desenvolvedor">
                
                <h3 class="nome">{{ dev.name }}</h3>
                
                <div class="social-links">
                    <a :href="dev.github" target="_blank" rel="noopener noreferrer" class="social-btn github">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"></path>
                        </svg>
                        GitHub
                    </a>
                    <a :href="dev.linkedin" target="_blank" rel="noopener noreferrer" class="social-btn linkedin">
                         <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Adicionei 'scoped' para garantir que os estilos não afetem outros componentes */

.slide3-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 100%;
    height: 100%;
    padding: 7px;
}

.Titulo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.T1 {
    color: #4ADE80;
    font-size: 3rem;
    font-weight: bold;
    margin-right: 10px;
}

.T2 {
    color: #FFFFFF; /* Melhor contraste com o fundo */
    font-size: 3rem;
    font-weight: bold;
    margin-left: 10px;
}

.cards-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem; /* Espaço entre os cards */
}

/* 3. Estilo principal do card, usando flexbox para o alinhamento */
.dev-card {
    background-color: #ffffff;
    border-radius: 15px;
    padding: 2rem;
    width: 300px;
    display: flex;
    flex-direction: column; /* Organiza os itens em coluna */
    align-items: center;   /* Centraliza horizontalmente */
    gap: 1rem;             /* Espaço entre a foto, nome e links */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.dev-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.Foto {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid #4ADE80;
    object-fit: cover; /* Garante que a imagem preencha o espaço sem distorcer */
}

.nome {
    font-size: 1.5rem;
    color: #166534;
    font-weight: bold;
    text-align: center;
    margin: 0;
}

.social-links {
    display: flex;
    gap: 0.8rem; /* Espaço entre os botões */
}

.social-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem; /* Espaço entre ícone e texto reduzido */
    padding: 0.4rem 1rem; /* Espaçamento interno reduzido para diminuir o tamanho geral */
    border-radius: 7px;   
    text-decoration: none;
    font-weight: bold;
    font-size: 0.85rem; /* Tamanho da fonte levemente reduzido */
    color: white;
    transition: transform 0.2s;
}

.social-btn:hover {
    transform: scale(1.05);
}

.github { background-color: #333; }
.linkedin { background-color: #0077B5; }
</style>