<template>
  <div>


<div class="mySection2">

    <h1 class="titre">Abonnement</h1>
    <div class="btn-prix">
    <label class="boutonSlider" for="checkbox">
      <input type="checkbox" id="checkbox"  @change="changeprix" >
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
            <p class="card-text1" v-show="prixUn"   >{{abonnement.Tarif.Tarif_de_Base}}</p>
            <p class="card-text1" v-show="prixDeux">{{abonnement.Tarif.Tarif_Libre_Acces}}</p>
            <p class="card-text3">{{abonnement.Condition}}</p>
            <i class="fas fa-gift"><p class="card-text4">{{abonnement.Seance_Offerte}}</p></i>
          <a href="/abonnement" class="btn-jeAbonne"> <button>Je m'abonne</button> </a>
        </div>
      </div>
    </div>
    <p class="textAcces">*Le Libre Accès vous permet d’accèder à nos salles à n’importe qu’elle heure</p>
  </div>


</div>
</template>

<script>
export default {
    name: "mySection2",
    props: ["abonnements"],

  data(){
    return{
        prixUn: true,
        prixDeux: false,
    }
},


   methods:{
       
        changeprix: function(){ this.prixUn = false; this.prixDeux = true }
    },
  
    


}
</script>

<style>
.mySection2 {
  background-color: #ebebeb;
  width: 100%;
}

.mySection2 .titre{
  font-family: "roboto";
  color: #001a6d;
      text-align: center;
    padding-top: 18px;
    font-size: 55px;
    margin: 0 auto;
} 

.card-body{
    height: 417px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

/* L'interrupteur - la boîte autour du curseur */
.boutonSlider {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Masquer la case à cocher HTML par défaut*/
.boutonSlider input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Le curseur */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #f7941d;
}

input:focus + .slider {
  box-shadow: 0 0 2px #001a6d;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Curseurs arrondis */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* ----------------------------- */

.mySection2 .row{
    display: flex;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}

.mySection2 .row .card{
  border-radius: 30px;
  height: 450px;
  border: 2px solid #f7941d;
  margin: 30.6px;
  width: 280px;
  transition: 1s;

}

.mySection2 .row .card:hover{
  border-radius: 30px;
  height: 450px;
  border: 2px solid #f7941d;
  margin: 50px;
  width: 280px;
  transform: scale(1.1);
  transition: 1s;
}

.mySection2 .row .card-title1{
    color: white;
    font-family: "roboto";
    background-color: #f7941d;
    margin: 0 auto;
    width: 101%;
    height: 31px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 26px 26px 0px 0px;
    font-size: 21px;
    margin-top: -1px;
    margin-left: -1px;
}

.mySection2 .row .card-title2{
  font-family: "roboto";
  color: #001a6d;
  font-size: 40px;
}

.mySection2 .row .card-text1{
  font-family: "roboto";
  color: #001a6d;
  font-size: 40px;
  text-align: end;
}

.mySection2 .row .partir{
  font-family: "roboto";
  color: #001a6d;
  font-size: 30px;
}

.mySection2 .row .card-text3{
    display: flex;
    flex-wrap: wrap;
    width: 183px;
    text-align: center;
    margin: 0 auto;
    font-family: Arial;
    font-weight: bold;
    color: black;
}

.row .card .card-body i{
    display: flex;
    font-size: 40px;
    color: #001a6d;
    margin-right: 20px;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    margin-top: 20px;
}

.row .card .card-body .card-text4{
    font-size: 12px;
    color: black;
    font-family: arial;
    margin: 0;
    font-weight: 100;
    margin-left: 15px;
}

.row .card .card-body .btn-jeAbonne{
  text-decoration: none !important;
}

.row .card .card-body .btn-jeAbonne button{
  background-color: #f7941d;
  width: 150px;
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  font-family: "roboto";
  font-size: 20px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  margin-top: 15px;
  align-items: center;
}

.textAcces{
 color: #001a6d;
 font-family: "arial";
 margin-left: 30px;
}

.mySection2 .btn-prix{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
}


</style>
