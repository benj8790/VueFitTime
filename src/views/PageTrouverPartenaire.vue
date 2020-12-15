<template>
    <div>
        <myNavbar2 :adherents="adherent"/>
          <div class="trouverpartenaire">
      <h1>Trouver une annonce en fonction de votre salle</h1>

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
           <a :href="`/ajouterPoste/${id}`"> <button>Ajouter un poste</button> </a> 
        </div>
      </div>
          </div>
        <trouverpartenaire :annonces="filteredList" :adherents="adherent"/>
        <myFooter/>

    </div>
</template>
<script>

import myNavbar2 from '../components/myNavbar2'
import trouverpartenaire from '../components/trouverPartenaire/trouverPartenaire'
import myFooter from '../components/myFooter'

export default {
    name:"pagepartenaire",

data(){
        return{
            annonces:[],
            search: '',
            adherent: "",
            id: this.$route.params.id

        }

        
    },


   computed: {
    filteredList() {
        if(this.search != ''){
      return this.annonces.filter(item => {
        return item.Ville.toLowerCase().includes(this.search.toLowerCase())
      })
        }
        else{
            return null;
        }
    }
  },
  

created () {
      this.axios.get("http://localhost:3000/annonce/FindAll")
      .then(res => {
          console.log(res.data);
          this.annonces = res.data.annonce
      })
      .catch(err => {
          alert(err);
      })

          this.axios
      .get("http://localhost:3000/adherent/getById/" + this.$route.params.id)
      .then((res) => {
        console.log(res);
        console.log(res.data.adherent);
        this.adherent = res.data.adherent
       
      })
      .catch((err) => {
        alert(err);
      });
  }, 


    components:{
        myNavbar2,
        trouverpartenaire,
        myFooter,
    }
}
</script>
<style>
.trouverpartenaire  .recherche {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.trouverpartenaire  .recherche form{
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 50px 0px 30px 0px;
}

.trouverpartenaire  .recherche form .barreUn{
    width: 50%;
    margin-right: 15px;
}

.trouverpartenaire  .recherche form .barreUn input{
    width: 100%;
    height: 35px;
    padding-left: 10px;
    border: 1px solid;
}

.trouverpartenaire  .recherche form .btnDeux button{
    font-family: "roboto";
    color: white;
    border: none;
    height: 35px;
    width: 100px;
    background-color: #f7941d;
    font-size: 20px;
}

.trouverpartenaire  .recherche .ajout{
    width: 50%;
    transform: translateX(-57px);
    margin-bottom: 30px;
}

.trouverpartenaire  .recherche .ajout button{
    font-family: "roboto";
    color: white;
    border: none;
    height: 30px;
    background-color: #f7941d;
    padding: 5px;
}
</style>