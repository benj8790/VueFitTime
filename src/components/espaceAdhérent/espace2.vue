<template>
<div class="espace2">
    <div class="ensemble">
        <div class="menu">
            <div class="hautmenu">

                <div class="circle">
                <i class="far fa-times-circle"></i>
                </div>

                <div class="user">
                <a href="/">Déconnexion</a>

                </div>
            </div>


            <ul>
        <li v-on:click="$emit('espaceun', false)">Mon profil</li>
        <li class="postes">Mes postes</li>
        <li v-on:click="$emit('espacetrois', false)">Mon coach / Suivis</li>
        <li v-on:click="$emit('espacequatre', false)">Mon programme</li>
            </ul>
    </div>
        <div class="logo">
        <img src="../../assets/Logo_Fit-Time__Avec_le_cercle.png" alt="">
        </div>
    </div>

    <div class="copy">
        <p>©Copyright 2020 Benjamin Lorillon</p>
    </div>
</div>


</template>

<script>
export default {
    name: "espace2",
    props: ["espaces"],
}
</script>

<style>
.espace2 .menu{
   background-color: #f7941d;
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 170px;
    min-height: 100vh;
    }

.espace2 .menu ul li{
    cursor: pointer;
    text-align: center;
    padding: 15px 15px 0px 15px;
    margin-bottom: 15px;    
    color: #c5c2c2;
    font-family: roboto;
    font-size: 18px;
    list-style: none;
}
.espace2 .menu ul .postes{
    cursor: pointer;
    text-align: center;
    padding: 15px 15px 0px 15px;
    margin-bottom: 15px;    
    color: white;
    font-family: roboto;
    font-size: 18px;
    border-bottom: 3px solid #001a6d;
    list-style: none;
    width: 124px;
}

.espace2 .menu ul {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.espace2 .menu .hautmenu{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.espace2 .menu .hautmenu .circle{
    display: flex;
    padding: 10px;
    justify-content: flex-start;
    width: 100%;
    font-size: 20px;
    color: white;
    cursor: pointer;
}

.espace2 .menu .hautmenu .user a{
    color: black;
    text-decoration: none;
    font-family: roboto;
    font-size: 18px;
}

.espace2 .copy p{
    margin: 0 auto;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8888;
    color: white;
}

.espace2 .ensemble {
    display: flex;
    justify-content: space-between;
}

.espace2 .ensemble .logo img {
    width: 200px;
}

</style>