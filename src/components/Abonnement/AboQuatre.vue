<template>
    <div class="aboQuatre">
      <h1>Paiement</h1>
<div class="compteur">
        <div class="aUn">
         <button class="btnUn">1</button>
         <a href="">Vos coordonées</a>

        </div>
         <span></span>
         <div class="aUn">
         <button class="btnUn">2</button>
         <a href="" >Votre formule</a>
         </div>
         <span></span>
         <div class="aUn">
         <button  class="btnUn">3</button>
         <a href="">Vos coordonées</a>
         </div>
         <span></span>
         <div>
         <button class="btnDeux">4</button>
         </div>
</div>
    

    <div class="Paiement">

<div class="infoFormule">

</div>

<div class="prix">
    <div class="prix1">

    </div>
    <div class="prix2">

    </div>
</div>

<div class="infoPaiement">

</div>
    </div>


  <button v-on:click="$emit('show', false)">Selectionner</button>
    </div>
</template>

<script>
export default {
}
</script>

<style>

.aboQuatre h1{
  font-family: "roboto";
  color:  #001a6d;
  text-align: center;
}

.aboQuatre .compteur .btnUn{
    color: white !important;
    border: none !important;
    background-color: #f7941d !important;
}

.aboQuatre .compteur .aUn a{
    color: black !important;
}

.aboQuatre .compteur .btnDeux{
    transform: translateY(-8px);
    color: white !important;
    border: none !important;
    background-color: #f7941d !important;
    box-shadow: 0 0 0.5em grey;
}

.aboQuatre .compteur a{
    font-size: 12px;
    color: #888888;
    text-decoration: none;
}

.aboQuatre .compteur span{
    width: 80px;
    height: 5px;
    background-color: #061a57;
    margin: 0px 20px;
}

.aboQuatre .compteur{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 80px;
}

.aboQuatre .compteur div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.aboQuatre .compteur button{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: 3px solid #888888;
    color: #888888;
    background-color: white;
    font-size: 30px;
    font-family: "roboto";
    cursor: unset;
    outline: none;
}

/* ----------------------- */

.aboQuatre  {
    display: flex;
    flex-direction: column;
    align-items: center;}

.aboQuatre .Paiement {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.aboQuatre .Paiement .infoFormule{
    width: 100%;
    height: 30px;
    box-shadow: 0 0 0.5em gray;
    outline: none;
    border: none;
    padding-left: 10px;
    margin: 20px 15px;
}

.aboQuatre .Paiement .prix {
    display: flex;
}

.aboQuatre .Paiement .prix .prix1{
    width: 100px;
    height: 30px;
    box-shadow: 0 0 0.5em gray;
    outline: none;
    border: none;
    padding-left: 10px;
    margin: 20px 15px;
}

.aboQuatre .Paiement .prix .prix2{
    width: 100px;
    height: 30px;
    box-shadow: 0 0 0.5em gray;
    outline: none;
    border: none;
    padding-left: 10px;
    margin: 20px 15px;
}

.aboQuatre .Paiement .infoPaiement{
    width: 100%;
    height: 30px;
    box-shadow: 0 0 0.5em gray;
    outline: none;
    border: none;
    padding-left: 10px;
    margin: 20px 15px;
}



</style>