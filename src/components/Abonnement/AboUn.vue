<template>
    <div class="lesSalles">
      <div class="trouverMaSalle">

         <h1>Trouve ta salle</h1>
<div class="compteur">

         <button>1</button>
         <span></span>
         <div>
         <button>2</button>
         <a href="">Votre formule</a>
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
    
    <div class="recherchepas">
      <form  class="barre">
        <div class="barreUn">

      <input type="search" name="recherche" placeholder="Tape le nom de ta ville"  v-model="search" id="recherche" >
      <span></span>
        <i class="fas fa-map-marked-alt"></i>
        </div>
      <div class="btnDeux"> 
        
        <button type="submit" class="btn-submit">Trouver</button>
        </div>
        </form>
      </div>
          </div>
        <div class="row">

      <div class="card" v-for="salle_de_sport in filteredList" :key="salle_de_sport.id">

        <img v-if="salle_de_sport.Img" :src="require(`@/assets/${salle_de_sport.Img}.jpg`)"
         class="card-Img-top" alt="`${salle_de_sport.Img}`">
        <div class="card-body">

             <h5 class="card-title">{{salle_de_sport.Nom}}</h5>
            <p class="card-text"> Ville: {{salle_de_sport.Ville}}</p>
            <p class="card-text">Adresse: {{salle_de_sport.Adresse}}</p>
            <p class="card-text">Numéro de téléphone: {{salle_de_sport.Tel}}</p>

          <a href="#" class="btn btn-candidaté"  v-on:click="$emit('show', false)"> Selectionner</a>
        </div>
    </div>
  </div>
  <button v-on:click="$emit('show', false)">Selectionner</button>
    </div>
</template>

<script>
export default {
    name: "aboUn",
    props: ["salle_de_sports"],
    data()
{return{
  search: ''
}},
   computed: {
    filteredList() {
        if(this.search != ''){
      return this.salle_de_sports.filter(item => {
        return item.Ville.toLowerCase().includes(this.search.toLowerCase())
      })
        }
        else{
            return null;
        }
    }
  },
}
</script>

<style>
.trouverMaSalle h1{
  font-family: "roboto";
  color:  #001a6d;
  text-align: center;
}

.trouverMaSalle .barre {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.trouverMaSalle .barre .barreUn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.trouverMaSalle .barre input{
  width: 40%;
  border-radius: 20px;
  border: 1px solid #f7941d;
  height: 35px;
  padding-left: 10px;
  outline: none;
}

.trouverMaSalle .barre span{
    width: 3px;
    height: 23px;
    background-color: #ebebeb;
    z-index: 2;
    transform: translateX(-10px);
}

.trouverMaSalle .barre i{
    width: 80px;
    border-radius: 0px 20px 20px 0px;
    border: 1px solid #f7941d;
    height: 35px;
    color: #f7941d;
    background-color: white;
    border-left: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    z-index: 1;
    transform: translateX(-18px);
}

.trouverMaSalle .recherchepas{
     background-image: url(../../assets/Tsalle.jpg);
    width: 100%;
    height: 350px;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-position-y: center;
}

.trouverMaSalle .recherchepas button{
   width: 150px;
   height: 40px;
   font-family: "roboto";
   font-size: 25px;
   background-color: #f7941d;
   color: white;
   border-radius: 30px;
   border: none;
   margin-top: 50px;
}


.lesSalles .trouverMaSalle .compteur > button{
    transform: translateY(-8px);
    color: white !important;
    border: none !important;
    background-color: #f7941d !important;
    box-shadow: 0 0 0.5em grey;
}

.lesSalles .trouverMaSalle .compteur a{
    font-size: 12px;
    color: #888888;
    text-decoration: none;
}

.lesSalles .trouverMaSalle .compteur span{
    width: 80px;
    height: 5px;
    background-color: #061a57;
    margin: 0px 20px;
}

.lesSalles .trouverMaSalle .compteur{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 80px;
}

.lesSalles .trouverMaSalle .compteur div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.lesSalles .trouverMaSalle .compteur button{
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



.lesSalles .fa-search:before{
    font-size: 50px;
    }

.lesSalles .titreformation{
    color: #061a57;
    margin: 0 auto;
    margin-top: 40px;
    font-size: 50px;
}
.lesSalles .row{
    display: flex;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;    }

.lesSalles .row Img{
    border-radius: 0px !important;
    height: 200px;

}
.lesSalles .card-title{
    font-size: 35px;
    margin-bottom: 30px;
    font-family: "roboto";
    }

.lesSalles .card-body{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #061a57;
}

.lesSalles .card-text{
    height: 135px;
    overflow: hidden;
    font-size: 19px;
    text-align: justify;
    font-family: "arial";
    }
.lesSalles .card{
    width: 350px;
    border: 2px solid #061a57;
    height: 500px;
    margin: 30px 10px;
    }

.lesSalles .btn-candidaté{
    text-decoration: none !important;
    color: white !important;
    font-family: "roboto";
    background-color: #061a57 !important;
    border-radius: 50px !important;
    width: 200px !important;
    height: 45px !important;
    font-size: 25px !important;
    border: none !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}

</style>