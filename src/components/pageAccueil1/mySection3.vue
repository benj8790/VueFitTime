<template>
<div>
  <div class="mySection3">
      <h1>Trouver ma salle</h1>
      <div class="contenu">

          <div class="club">
      <h2 class="vos">Vos Clubs Fit-Time</h2>
      <h2 class="cent">100</h2>
          </div>

    <div class="barreSalle">
        <div class="recherche">

      <input type="text" name="ville" id="ville" placeholder="Trouver ma salle" v-model="ville_inscription">
      <button type="submit" class="btn-submit">Trouver</button>
        </div>



      <img src="../../assets/carte de francce .png" alt="carte">
    </div>
      
      </div>

        <h1 class="clubOuverture">CLUBS EN PRé-OUVERTURE</h1>
        <div class="marquee-rtl">
        <!-- le contenu défilant -->
        <div><p>QUIMPER</p> <p>DEAUVILLE</p> <p>MONTPELLIER</p></div>
        </div>
  </div>
      <p class="descTrouvSalle">Trouver la salle la plus proche de chez vous en tapant le nom de votre ville <br>
Nos salles sont ouvertes du lundi au dimanche de 9h00 à 21h 
</p>
</div>
</template>

<script>
export default {
    name: "mySection3",

}
</script>

<style>

.mySection3{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.mySection3 h1{
    color:  #001a6d;
    font-family: "roboto";
}


.mySection3 .contenu{
    width: 100%;
    display: flex;
    margin-top: 50px;
}

.mySection3 .contenu .club{
    display: flex;
    height: 101px;
    align-items: flex-end;
    font-family: "roboto";
    text-align: center;
    position: absolute;
}

.mySection3 .contenu .club .vos{
    color:#f7941d;
    width: 170px;
}

.mySection3 .contenu .club .cent{
    color: #001a6d;
}

.mySection3 .contenu img{
    width: 50%;
    max-width: 560px;
}

.mySection3 .contenu .barreSalle{
    justify-content: flex-end;
    display: flex;
    align-items: center;
    width: 100%;
    }

.mySection3 .contenu .barreSalle .recherche{
    width: 100%;
    transform: translateX(340px);
    display: flex;
    }

.mySection3 .contenu .barreSalle input{
    width: 90%;
    border: 2px solid #f7941d;
    border-radius: 15px;
    height: 43px;
    min-width: 480px;
    outline: none;
        }

.mySection3 .contenu .barreSalle button{
    border: none;
    font-family: "roboto";
    color: white;
    width: 135px;
    transform: translateX(-13px);
    z-index: -1;
    border-radius: 0px 15px 15px 0px;
    background-color: #f7941d;
        }



.clubOuverture{
    text-transform: uppercase;
    font-size: 25px;
    transform: translate(-150px, -620%);
}

/* ------------------------------ */

/* le block conteneur */
.marquee-rtl {
    overflow: hidden;                     /* masque tout ce qui dépasse */
    transform: translate(-18px, -457%);
    width: 200px;
}


/* le bloc défilant */
.marquee-rtl > :first-child {
  display: inline-block;                /* modèle de boîte en ligne */
  padding-right: 2em;                   /* un peu d'espace pour la transition */
  padding-left: 100%;                   /* placement à droite du conteneur */
  white-space: nowrap;                  /* pas de passage à la ligne */
  animation: defilement-rtl 15s infinite linear;
  color: #f7941d;
  display: flex;
}

.marquee-rtl > :first-child p{
    font-size: 25px;
    margin: 0px 50px;
    font-family: "roboto";
}

@keyframes defilement-rtl {
  0% {
    transform: translate3d(0,0,0);      /* position initiale à droite */
  }
  100% {
    transform: translate3d(-380%,0,0);  /* position finale à gauche */
  }
}

/* --------------------- */


.descTrouvSalle{
    margin: -130px 0px 90px 30px;
    font-family: "Arial";
}


</style>