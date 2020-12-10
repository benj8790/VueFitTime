<template>
  <div class="espace3">
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
          <li class="coach">Mon coach / Suivis</li>
          <li v-on:click="$emit('espacequatre', false)">Mon programme</li>
        </ul>
      </div>

      <div class="contenu" v-for="adherent in adherents" :key="adherent.id">
        <div class="contenuhaut">
          <img
            v-if="adherent.Coach.Image"
            :src="require(`@/assets/${adherent.Coach.Image}.jpg`)"
            class="card-Img-top"
            alt="`${adherent.Coach.Image}`"
          />

          <div class="text">
            <p>{{ adherent.Coach.Prenom }}</p>
            <p>{{ adherent.Coach.Age }} ans</p>
            <p>Coach chez Fit-Time depuis {{ adherent.Coach.Anciennete }}</p>
          </div>
        </div>

        <div class="titrecontenubas">
          <h5>Vos objectifs</h5>

          <div class="contenubas">
            <div
              class="progression"
              v-for="Suivis in adherent.Suivis"
              :key="Suivis.id"
            >
              <label for="file">{{ Suivis.Objectif }}:</label>
              <progress id="file" max="100" :value="Suivis.Progression">
                {{ Suivis.Progression }}%
              </progress>
            </div>
          </div>
        </div>
      </div>

      <div class="logo">
        <img src="../../assets/Logo_Fit-Time__Avec_le_cercle.png" alt="" />
      </div>
    </div>

    <div class="copy">
      <p>©Copyright 2020 Benjamin Lorillon</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "espace3",
  props: ["adherents"],

  data() {
    return {
      adherent: {},
      message: null,
      pic: null,
    };
  },
};
</script>

<style>
.espace3 .menu {
  background-color: #f7941d;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 170px;
  min-height: 100vh;
}

.espace3 .menu ul li {
  cursor: pointer;
  text-align: center;
  padding: 15px 15px 0px 15px;
  margin-bottom: 15px;
  color: #c5c2c2;
  font-family: roboto;
  font-size: 18px;
  list-style: none;
}
.espace3 .menu ul .coach {
  cursor: pointer;
  text-align: center;
  padding: 15px 15px 0px 15px;
  margin-bottom: 15px;
  color: white;
  font-family: roboto;
  font-size: 18px;
  border-bottom: 3px solid #001a6d;
  list-style: none;
  width: 185px;
}

.espace3 .menu ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.espace3 .menu .hautmenu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.espace3 .menu .hautmenu .circle {
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  width: 100%;
  font-size: 20px;
  color: white;
  cursor: pointer;
}

.espace3 .menu .hautmenu .user a {
  color: black;
  text-decoration: none;
  font-family: roboto;
  font-size: 18px;
}

.espace3 .copy p {
  margin: 0 auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8888;
  color: white;
}

.espace3 .ensemble {
  display: flex;
  justify-content: space-between;
}

.espace3 .ensemble .logo {
  width: 15%;
}

.espace3 .ensemble .logo img {
  width: 100%;
}
/* ---------------- */

.espace3 .ensemble .contenu {
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.espace3 .ensemble .contenu .contenuhaut {
  box-shadow: 0 0 0.5em gray;
  width: 70%;
  padding: 20px 20px 0px 20px;
  display: flex;
  margin-bottom: 50px;
}

.espace3 .ensemble .contenu .contenuhaut img {
  width: 50%;
  max-width: 200px;
}

.espace3 .ensemble .contenu .contenuhaut .text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 110px;
}

.espace3 .ensemble .contenu .titrecontenubas {
  width: 80%;
}

.espace3 .ensemble .contenu .titrecontenubas h5 {
  font-size: 25px;
  margin-bottom: 25px;
}

.espace3 .ensemble .contenu .contenubas {
  box-shadow: 0 0 0.5em gray;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px;
}

.espace3 .ensemble .contenu .contenubas .progression {
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
}
</style>
