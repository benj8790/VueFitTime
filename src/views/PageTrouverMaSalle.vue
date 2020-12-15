<template>
    <div>
        <myNavbar v-if="myNavbar" :adherents="adherent"/>
        <myNavbar2 v-else :adherents="adherent"/>
          <div class="trouverMaSalle">

         <h1>Cherche ta salle</h1>
    
    <div class="recherche" id="rech" >
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
        <lesSalles :salle_de_sports="filteredList"/>
        <myFooter/>

    </div>
</template>
<script>

import myNavbar from '../components/myNavbar'
import myNavbar2 from '../components/myNavbar2'
import lesSalles from '../components/chercheTaSalle/lesSalles'
import myFooter from '../components/myFooter'

export default {
  name:"pageAccueil",

data(){
        return{
          salle_de_sports:[],
            search: '',
            adherent:"",
            myNavbar: true,
            myNavbar2: false
        }
    },

     components:{
         myNavbar,
         myNavbar2,
         lesSalles,
         myFooter,
     },

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
 
   
    
created () {
  this.axios.get("http://localhost:3000/salle_de_sport/FindAll")
      .then(res => {
        console.log(res.data);
          this.salle_de_sports = res.data.salle_de_sport
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
        if( localStorage.getItem("token")){
          this.myNavbar = false;
        } else  {
         this.myNavbar = true;

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

.trouverMaSalle .recherche{
     background-image: url(../assets/Tsalle.jpg);
    width: 100%;
    height: 500px;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-position-y: center;
}

.trouverMaSalle .recherche button{
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



</style>