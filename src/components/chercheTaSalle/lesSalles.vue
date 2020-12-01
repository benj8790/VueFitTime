<template>
    <div class="lesSalles">

        <div class="row">

      <div class="card" v-for="salle_de_sport in salle_de_sports" :key="salle_de_sport.id">

        <img v-if="salle_de_sport.Img" :src="require(`@/assets/${salle_de_sport.Img}.jpg`)"
         class="card-Img-top" alt="`${salle_de_sport.Img}`">
        <div class="card-body">

             <h5 class="card-title">{{salle_de_sport.Nom}}</h5>
            <p class="card-text"> Ville: {{salle_de_sport.Ville}}</p>
            <p class="card-text">Adresse: {{salle_de_sport.Adresse}}</p>
            <p class="card-text">Numéro de téléphone: {{salle_de_sport.Tel}}</p>

            <router-link :to="`/detailsalle_de_sport/${salle_de_sport.Id}`">
          <a href="#" class="btn btn-candidaté"> Détail</a>
        </router-link>     
        </div>
    </div>
  </div>
    </div>
</template>

<script>
export default {
    name: "lesSalles",
    props: ["salle_de_sports"],

  
}
</script>

<style>



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