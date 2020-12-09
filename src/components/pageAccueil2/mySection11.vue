<template>
  <div class="mysection11">
      <div class="ensemble">

          <h1>Les dernières annonces</h1>

      <div class="ensemblecarte">

      <div class="carte" v-for="annonce in annonces" :key="annonce.id">
        <div class="cartecorps"> 

          <h3>Olivia 29 ans</h3>

          <div class="premiereligne">
            <p><i class="fas fa-dumbbell"></i> Partenaire d'entrainement pour le <span> {{annonce.disponibilite}}</span> </p>
            <p class="card-text"> <i class="fas fa-map-marker-alt"></i> {{annonce.Ville}} </p>
            <p> <i class="far fa-clock"></i> {{annonce.Horaire}}</p>
          </div>

          <div class="deuxiemeligne">
            <p> {{annonce.Vos_Attente}} </p>
            <button>Répondre</button>
          </div>

        </div>
      </div>

        <div class="btn">
            <a href="/trouverpartenaire"> <button>Trouver un partenaire <br> d'entrainement</button> </a>
        </div>


      </div>



    </div>


  </div>
</template>

<script>
export default {
    name: "annonce",

  data() {
    return {
      annonces: {},
     
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/annonce/findLimit")
      .then((res) => {
        console.log(res);
        this.annonces = res.data.annonce;
      })
      .catch((err) => {
        alert(err);
      });
  },


  

} 




</script>

<style>

.mysection11 h1{
    color: #001a6d;
    font-family: "roboto";
    text-align: center;
    margin-bottom: 30px;
}

.mysection11 .btn{
    display: flex;
    justify-content: center;
    width: 100%;
}

.mysection11 .btn button{
    border: none;
    background-color: #f7941d;
    color: white;
    border-radius: 5px;
    font-family: "roboto";
    padding: 5px 10px;
    margin-bottom: 30px;
}


.mysection11 .carte {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.mysection11 .carte .cartecorps {
    box-shadow: 0 0 0.5em gray;
    width: 80%;
    background-color: white;
    margin: 20px 0px;
}

.mysection11 .carte .cartecorps .premiereligne{
    display: flex;
}

.mysection11 .carte .cartecorps .premiereligne i{
    color: #f7941d;
}

.mysection11 .carte .cartecorps .premiereligne p span{
    color: white;
    background-color: #f7941d;
    font-family: "roboto";
    padding: 2px;
}

.mysection11 .carte .cartecorps .premiereligne p{
    margin: 0px 10px;
}

.mysection11 .carte .cartecorps .deuxiemeligne p{
    margin: 10px 0px 0px 10px;
    width: 50%;
}

.mysection11 .carte .cartecorps .deuxiemeligne button{
    border: none;
    color: white;
    background-color: #f7941d;
    font-family: "roboto";
    margin: 15px 10px;
    border-radius: 50px;
    padding: 2px 10px;
}



</style>