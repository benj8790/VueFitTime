<template>
  <div class="mysection11">
      <div class="ensemble">

          <h1>Les dernières annonces</h1>

      <div class="ensemblecarte">

      <div class="carte" v-for="annonce in annonces.slice(0, 3)" :key="annonce.id">


        
        <div class="cartecorps"> 
     <!-- le v-if= c'est une confition dans vue.js la si le message est différent de vide -->
          <div class="ensembleimageprofil">
            <div class="centrer">
              <div class="imageprofil">
                  <img
                    v-if="annonce.Adherent.Image !== ''"
                    :src="urlImg + annonce.Adherent.Image"
                    class="avatar img-fluid"
                    alt="avatar"
                  />
                  <img
                    v-else
                    src="../../../../Fit-Time/public/1fdb7bf257b90ba809da046b5f74afe9.jpg"
                    class="avatar img-fluid"
                    alt="avatar"
                  />
                
              </div>
            </div>
          </div>

                    <div class="ensemblecontenu">

          <h3>{{annonce.Adherent.Prenom}}</h3>

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
      </div>

        <div class="btn">
            <a :href="`/trouverPartenaire/${id}`"> <button>Trouver un partenaire <br> d'entrainement</button> </a>
        </div>


      </div>



    </div>


  </div>
</template>

<script>
export default {
    name: "mySection11",
      props: ["annonces"],



  data() {
    return {
      adherent: {},
      urlImg: "http://localhost:3000/static/",
                  id: this.$route.params.id


     
    };
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
        display: flex;
    align-items: center;

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

/* ----------------image profil------------------------ */

.mysection11 .ensemble .carte .cartecorps .ensembleimageprofil .imageprofil {
  border-radius: 500px;
  height: 100%;
  width: 100%;
  max-height: 150px;
  max-width: 150px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.mysection11 .ensemble .carte .cartecorps .ensembleimageprofil .centrer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.mysection11 .ensemble .carte .cartecorps .ensembleimageprofil .centrer .file-upload {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.mysection11 .ensemble .carte .cartecorps .ensembleimageprofil .centrer img{
  max-width: 300px !important;
}

</style>