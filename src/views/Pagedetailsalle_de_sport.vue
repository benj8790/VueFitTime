<template>
    <div>
        <myNavbar/>
          
        <detailSalle :salle_de_sports="salle_de_sports"/>
        <myFooter/>

    </div>
</template>
<script> 

import myNavbar from '../components/myNavbar'
import detailSalle from '../components/chercheTaSalle/detailsalle_de_sport'
import myFooter from '../components/myFooter'

export default {
    name:"pageAccueil",


    components:{
        myNavbar,
        detailSalle,
        myFooter,
    }
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