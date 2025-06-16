<script>
import PrimaryButton from '../utilities/PrimaryButton.vue';
export default {
    components: {
        PrimaryButton
    },
    data() {
        return {
            developers: [
                { name: 'Danilo R. Toriy', github: '#', linkedin: '#' },
                { name: 'Gabriel Arantes', github: '#', linkedin: '#' },
                { name: 'Matheus P. Hermenegildo', github: '#', linkedin: '#' }
            ]
        };
    }
};
</script>

<template>
<div>
 <div class="Titulo">
        <h1 class="T1">DESEN</h1><h1 class="T2">VOLVEDORES</h1>
    </div>
    <div class="container">
        <div class="cards">
            <div class="card1">
                <h3 class="nomes">Danilo R. Toriy</h3>
                <img src="/src/assets/icons/Logo.png" class="Foto">
                <button class="Github">oi</button>
                <button class="linkedIn">oi</button>
            </div>
            <div class="card2">
                <h3 class="nomes">Gabriel Arantes</h3>
                <img src="/src/assets/icons/Logo.png" class="Foto">
                <button class="Github">oi</button>
                <button class="linkedIn">oi</button>
            </div>
            <div class="card3">
                <h3 class="nomes">Matheus P. Hermenegildo</h3>
                <img src="/src/assets/icons/Logo.png" class="Foto">
                <button class="Github">oi</button>
                <button class="linkedIn">oi</button>
            </div>
        </div>
    </div>
</div>
   
    
</template>

<style>
.T1{
    color: #4ADE80;
    font-size: 3rem;
    font-weight: bold;
    margin-right: 10px;
}

.T2{
    color: darkgreen;
    font-size: 3rem;
    font-weight: bold;
    margin-left: 10px;
}
.Titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.container{
    display: flex; 
    grid-template-columns: 1fr 1fr 1fr;
}

.nomes {
    text-align: center;
    font-size: 1.5rem;
    color: #4ADE80;
}
.Foto {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px auto;
}
.Github{
    background-color: #4ADE80;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    margin: 5px;
}

.linkedIn {
    background-color: #4ADE80;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    margin: 5px;
}

.cards {
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>