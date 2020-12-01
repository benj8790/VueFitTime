<template>
  <div class="coursCollectif">

      <div class="titre">
          <h1>Cours Collectif</h1>
          <img src="../assets/ft.png" alt="">
        </div>
    
    <div class="recherche">

      <input type="text" name="ville" id="ville" placeholder="Cherche ta salle..." v-model="ville_inscription">
      <button type="submit" class="btn-submit"><i class="fas fa-search"></i></button>
    </div>

    <p class="p">Trouve t’es Cours Collectif en fonction de ta salle</p>




  </div>
</template>

<script>
export default {

}
</script>

<style>

.coursCollectif .titre{
    color:  #f7941d;
    font-family: "roboto";
    display: flex;
    justify-content: center;
    align-items: center;
}

.coursCollectif .titre img{
    width: 100%;
}

.coursCollectif .titre h1{
    color:  #f7941d;
    font-family: "roboto";
    text-align: center;
    font-size: 45px;
    position: absolute;
}

.coursCollectif .recherche{
    text-align: center;
}

.coursCollectif .recherche input{
    width: 40%;
    height: 35px;
    background-color: #ebebeb;
    border: 1px solid #f7941d;
    padding-left: 10px;
}

.coursCollectif .recherche button{
    width: 80px;
    height: 35px;
    background-color: #f7941d;
    border: 1px solid #f7941d;
    font-size: 26px;
    transform: translateY(5px);
    border-radius: 0px 10px 10px 0px;
}

.coursCollectif .p{
    font-family: 'Arial';
    color: #001a6d;
    font-weight: bold;
    margin: 30px 0px;
    text-align: center;
}




</style>