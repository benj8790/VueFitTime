<template>
<div class="espace4">
    <div class="ensemble">
        <div class="menu">
            <div class="hautmenu">

                <div class="circle">
                <i class="far fa-times-circle"></i>
                </div>

                <div class="user">
                <a href="/">Déconnexion</a>

                </div>
            </div>


            <ul>
        <li v-on:click="$emit('espaceun', false)">Mon profil</li>
        <li v-on:click="$emit('espacedeux', false)">Mes postes</li>
        <li  v-on:click="$emit('espacetrois', false)">Mon coach / Suivis</li>
        <li  class="programme">Mon programme</li>
            </ul>
    </div>

        <div class="contenu"  >

            <div class="jour" v-for="programme  in adherents" :key="programme.id">
                <h1>Lundi</h1>
               

                <div class="programme" >
                    <button type="button" class="btn btn-info" data-toggle="collapse" :data-target="'#demo'+programme.Id">Pectoraux <i class="fas fa-sort-down"></i> </button>
                    <table>

                        <thead>
                            <tr>
                                 <th >Exercice</th>
                                 <th >Série</th>
                                 <th >Répétition</th>
                                 <th >Charges</th>
                                 <th>Temps de récupération</th>

                             </tr>
                        </thead>
                    </table>
  <div :id="'demo'+programme.Id" class="collapse">
                    <table>


                                <tbody>

                             <tr >
                                 <td>{{programme.Exercice}}</td>
                                 <td>{{programme.Serie}}</td>
                                 <td>{{programme.Repetition}}</td>
                                 <td>{{programme.Charge}}%</td>
                                 <td>{{programme.Temps_Recup}}</td>
                                 
                            </tr>
                                </tbody>

                    </table>
  </div>
                </div>
            </div>

           




        </div>





        <div class="logo">
        <img src="../../assets/Logo_Fit-Time__Avec_le_cercle.png" alt="">
        </div>
    </div>

    <div class="copy">
        <p>©Copyright 2020 Benjamin Lorillon</p>
    </div>
</div>
    
</template>

<script>
export default {
    name: "espace4",
    props: ["adherents"],

          data() {
    return {
      message: null,
      pic: null,
      
    };
  },
   
   computed: {
    groupedDays() {
      return groupBy(this.conferenceDays, day => day.date.toDateString());
    }
  }
  
 

}
</script>

<style>

.espace4 .menu{
    background-color: #f7941d;
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 170px;
    min-height: 100vh;
    }

.espace4 .menu ul li{
    cursor: pointer;
    text-align: center;
    padding: 15px 15px 0px 15px;
    margin-bottom: 15px;    
    color: #c5c2c2;
    font-family: roboto;
    font-size: 18px;
    list-style: none;
}
.espace4 .menu ul .programme{
    cursor: pointer;
    text-align: center;
    padding: 15px 15px 0px 15px;
    margin-bottom: 15px;    
    color: white;
    font-family: roboto;
    font-size: 18px;
    border-bottom: 3px solid #001a6d;
    list-style: none;
    width: 164px;
}

.espace4 .menu ul {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.espace4 .menu .hautmenu{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.espace4 .menu .hautmenu .circle{
    display: flex;
    padding: 10px;
    justify-content: flex-start;
    width: 100%;
    font-size: 20px;
    color: white;
    cursor: pointer;
}

.espace4 .menu .hautmenu .user a{
    color: black;
    text-decoration: none;
    font-family: roboto;
    font-size: 18px;
}

.espace4 .copy p{
    margin: 0 auto;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8888;
    color: white;
}

.espace4 .ensemble {
    display: flex;
    justify-content: space-between;
}

.espace4 .ensemble .logo img {
    width: 200px;
}

/* ------------------------------------- */

.espace4 .ensemble .contenu {
    width: 70%;

}

.espace4 .ensemble .contenu .jour{
    width: 100%;
    margin: 20px 0px;
}

.espace4 .ensemble .contenu .jour .programme table{
    box-shadow: 0 0 0.5em gray;
    width: 100%;
}

.espace4 .ensemble .contenu .jour h1 {
    font-family: "roboto";
    color: #001a6d;
    text-align: center;
}

.espace4 .ensemble .contenu th{
    width: 20%;
    border-bottom:  2px solid;
    border-right:  2px solid;
    text-align: center;
    color: gray;
    padding: 10px;
    
}

.espace4 .ensemble .contenu td{
    width: 20% !important;
    border-bottom:  2px solid !important;
    border-right:  2px solid !important;
    text-align: center !important;
    color: gray !important;
    padding: 5px;
}

.espace4 .ensemble .contenu .jour .programme .btn {
    font-family: "roboto";
    margin-bottom: 20px;
    z-index: 1;
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    background-color: gray ;
}

.espace4 .ensemble .contenu .jour .programme .btn:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}







</style>