<template>
  <div class="trouverpartenaire">
      <h1>Trouver une annonce en fonction de votre salle</h1>
      <div class="ensemble">

          <div class="recherche" id="rech" >
      <form  class="barre">
        <div class="barreUn">

      <input type="search" name="recherche" placeholder="Tape le nom de ta ville"  v-model="search" id="recherche" >
        </div>
      <div class="btnDeux"> 
        
        <button type="submit" class="btn-submit">Chercher</button>
        </div>
        </form>
        <div class="ajout">
            <button>Ajouter un poste</button>
        </div>
      </div>

      </div>

      <div class="card" v-for="annonce in annonces" :key="annonce.id">
        <div class="card-body">

            <p class="card-text"> Ville: {{annonce.Ville}}</p>

        </div>
      </div>









      <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
  </div>
</template>

<script>
export default {
    name: "annonce",
    props: ["annonces"],


} 
</script>

<style>

.trouverpartenaire h1{
    font-family: "roboto";
    text-align: center;
    color: #001a6d;

}

.trouverpartenaire .ensemble{
    background-image: url(../../assets/fondun.jpg);
    width: 100%;
    background-size: cover;
}

.trouverpartenaire .ensemble .recherche {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.trouverpartenaire .ensemble .recherche form{
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 50px 0px 30px 0px;
}

.trouverpartenaire .ensemble .recherche form .barreUn{
    width: 50%;
    margin-right: 15px;
}

.trouverpartenaire .ensemble .recherche form .barreUn input{
    width: 100%;
    height: 35px;
    padding-left: 10px;
    border: 1px solid;
}

.trouverpartenaire .ensemble .recherche form .btnDeux button{
    font-family: "roboto";
    color: white;
    border: none;
    height: 35px;
    width: 100px;
    background-color: #f7941d;
    font-size: 20px;
}

.trouverpartenaire .ensemble .recherche .ajout{
    width: 50%;
    transform: translateX(-57px);
}

.trouverpartenaire .ensemble .recherche .ajout button{
    font-family: "roboto";
    color: white;
    border: none;
    height: 30px;
    background-color: #f7941d;
    padding: 5px;
}



</style>