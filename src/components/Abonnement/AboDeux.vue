<template>
    <div class="aboDeux">
        <h1>Choisissez votre formule</h1>
<div class="compteur">
        <div class="aUn">
         <button class="btnUn">1</button>
         <a href="">Choix de la salle</a>

        </div>
         <span></span>
         <div>
         <button class="btnDeux">2</button>
         </div>
         <span></span>
         <div>
         <button>3</button>
         <a href="">Vos coordonées</a>
         </div>
         <span></span>
         <div>
         <button>4</button>
         <a href="">Paiement</a>
         </div>
</div>
     <div>


<div class="mySection2">

    <div class="btn-prix">
    <label class="boutonSlider" for="checkbox">
      <input type="checkbox" id="checkbox"  v-model="checked" v-on:click="soso('soso', false)">
      <span class="slider round"></span>
    </label>
    <p class="textAcces">Libre Accès</p>
    </div>
    <div class="row">
      <div class="card" v-for="abonnement in abonnements" :key="abonnement.Id">
             <h5 class="card-title1">{{abonnement.Engagement}}</h5>
        <div class="card-body">
             <h5 class="card-title2">{{abonnement.Nom}}</h5>
             <p class="partir">A partir de</p>
            <p class="card-text1">{{abonnement.Tarif.Tarif_de_Base}}</p>
            <p class="card-text2">{{abonnement.Tarif.Tarif_Libre_Acces}}</p>
            <p class="card-text3">{{abonnement.Condition}}</p>
            <i class="fas fa-gift"><p class="card-text4">{{abonnement.Seance_Offerte}}</p></i>
          <a href="/abonnement" class="btn-jeAbonne"> <button>Choisir</button> </a>
        </div>
      </div>
    </div>
    <p class="textAcces">*Le Libre Accès vous permet d’accèder à nos salles à n’importe qu’elle heure</p>
  </div>


</div>
  <button v-on:click="$emit('show', false)">Selectionner</button>
    </div>
</template>

<script>
export default {
    name: "abodeux",
    props: ["abonnements"],
}
</script>

<style>

.aboDeux h1{
  font-family: "roboto";
  color:  #001a6d;
  text-align: center;
}

.aboDeux .compteur .btnUn{
    color: white !important;
    border: none !important;
    background-color: #f7941d !important;
}

.aboDeux .compteur .aUn a{
    color: black !important;
}

.aboDeux .compteur .btnDeux{
    transform: translateY(-8px);
    color: white !important;
    border: none !important;
    background-color: #f7941d !important;
    box-shadow: 0 0 0.5em grey;
}

.aboDeux .compteur a{
    font-size: 12px;
    color: #888888;
    text-decoration: none;
}

.aboDeux .compteur span{
    width: 80px;
    height: 5px;
    background-color: #061a57;
    margin: 0px 20px;
}

.aboDeux .compteur{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 80px;
}

.aboDeux .compteur div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.aboDeux .compteur button{
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



</style>