<template>
<div>
    <div class="detailSalle" v-for="salle in salle_de_sport" :key="salle.id">

        <h1 class="Titre">Salle de {{salle.Ville}}</h1>


        <div :style="{'background-image': 'url(' + require(`@/assets/${salle.Img}.jpg`) + ')'} " class="BG" >
        
        <div class="contenu">
            
            <div class="logo">
            <img src="../../assets/Logo_Fit-Time__Avec_le_cercle.png" alt="">
            </div>
            <div class="text">
            <i class="fas fa-map-marker-alt i"><p>{{salle.Adresse}}</p></i>
            <i class="far fa-clock i"><p>Ouvert du Lundi au Dimanche de 9h à 21h</p></i>

                <h3>Il y a actuellement:</h3>
                <div class="adherent">
                <h4 class="un">20</h4>
                <h4 class="deux">adhérents dans votre salle</h4>
                </div>
            </div>
        </div>
        
        </div>
        <div class="equipement">
            <div class="titre">

            <h1>LISTE DES EQUIPEMENTS PRESENT DANS VOTRE SALLE </h1>

            <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo"><i class="fas fa-caret-down"></i></button>
            
            <div id="demo" class="collapse">

                <p class="Titre">Salle de {{salle.Equipements[0].Type_Equipement}}</p>

            </div>
            
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "detailSalle",
  data() {
    return {
      salle_de_sport: {},
      id: this.$route.params.id,
      equipement: {},
      Salle_de_SportId: this.$route.params.Salle_de_SportId,
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/salle_de_sport/getById/" + this.id)
      .then((res) => {
        console.log(res);
        this.salle_de_sport = res.data.salle_de_sport;
       
      })
      .catch((err) => {
        alert(err);
      });

    
  },

  
}
</script>

<style>

.detailSalle .imgSalle{
    width: 100%;
}

.detailSalle .Titre{
    font-family: "roboto";
    color: #061a57;
    text-align: center;
}

.detailSalle .BG{
    background-position: center;
    background-size: cover;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.detailSalle .BG .contenu{
    min-width: 320px;
    max-width: 450px;
    width: 100%;
    height: 285px;
    box-shadow: 0 0 1em grey;
    background-color: white;
    margin: 0px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.detailSalle .BG .contenu img{
    width: 75px;
    
}

.detailSalle .equipement{
    width: 80%;
    height: 100px;
    box-shadow: 0 0 1em grey;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

.detailSalle .contenu .text i{
  width: 100%;
  display: flex;
  color: #f7941d;
  margin: 10px 0px;
}

.detailSalle .contenu .text i p{
  margin-left: 15px;
  font-family: "arial";
  font-weight: 600;
  color: black;
}

.detailSalle .contenu h3{
    font-family: "roboto";
    color: black;
    font-size: 22px;

}

.detailSalle .contenu .adherent{
    font-family: "roboto";
    display: flex;

}

.detailSalle .contenu .adherent .un{
    color: #f7941d;
    margin-right: 15px;

}

.detailSalle .contenu .adherent .deux{
    color: #061a57;

}

.detailSalle .contenu .logo {
    width: 100%;
    display: flex;
    justify-content: flex-end;

}

.detailSalle .contenu .text {
    transform: translateY(-30px);
}


/* ------------------------------------------- */


.detailSalle .equipement .btn:focus{
    transform: rotate(-90deg);
}












</style>