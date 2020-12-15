<template>
  <div class="espace1">

    <div class="ensemble">

      <div class="menu">

        <div class="hautmenu">

          <div class="circle">
            <a :href="`/pageAccueil2/${adherent.Id}`">
            <i class="far fa-times-circle"></i>
            </a>
            
          </div>
          <!-- le v-if= c'est une confition dans vue.js la si le message est différent de vide -->
          <div class="ensembleimageprofil">
            <div class="centrer">
              <div class="imageprofil">
                <label for="file" class="file">
                  <img
                    v-if="adherent.Image !== ''"
                    :src="urlImg + adherents[0].Image"
                    class="avatar img-fluid"
                    alt="avatar"
                  />
                  <img
                    v-else
                    src="../../../../Fit-Time/public/1fdb7bf257b90ba809da046b5f74afe9.jpg"
                    class="avatar img-fluid"
                    alt="avatar"
                  />
                </label>
              </div>

              <div class="file-upload">
                <label for="file" class="file">choisir une image</label>


                <input type="file" class="none" id="file" @change="onFileChange" />

                <div class="valider">

                <div v-if="progress" class="progess-bar" :style="{ width: progress }">
                  {{ progress }}
                </div>
                <button @click="onUploadFile" class="upload-button" :disabled="!this.selectedFile" >
                  valider
                </button>
                </div>

              </div>
            </div>
          </div>

          <div class="user">
            <a href="/" @click="logout">Déconnexion</a>
          </div>
        </div>

        <ul>
          <li class="profil">Mon profil</li>
          <li v-on:click="$emit('espacedeux', false)">Mes postes</li>
          <li v-on:click="$emit('espacetrois', false)">Mon coach / Suivis</li>
          <li v-on:click="$emit('espacequatre', false)">Mon programme</li>
        </ul>
      </div>

      <div class="contenu">
        <div class="conteneur">
          <div class="titrehaut">
            <h1>{{ adherent.Nom }} - {{ adherent.Prenom }}</h1>
            <h1>{{ adherent.Date_Naissance }}</h1>
          </div>
          <div class="titrebas">
            <h1>ID: {{ adherent.Identifiant }}</h1>
          </div>

          <div class="formUpdate ">
            <form action="" @submit.prevent="update">
              <div class="inputform">
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  id="email"
                  v-model="adherent.Email"
                />
                <input class="form-control" type="text" name="tel" id="tel" v-model="adherent.Tel"/>
                <input
                  class="form-control"
                  type="text"
                  name="adresse"
                  id="adresse"
                  v-model="adherent.Adresse"
                />
                <input
                  class="form-control"
                  type="text"
                  name="cp"
                  id="cp"
                  v-model="adherent.Cp"
                />
                <input
                  class="form-control"
                  type="text"
                  name="ville"
                  id="ville"
                  v-model="adherent.Ville"
                />
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  id="password"
                  v-model="adherent.Password"
                  required
                />
              </div>

              <div class="row" v-if="message !== null">
                <!--  les deux {{}} permet d'afficher la  un message -->

                {{ message }}
              </div>

              <div class="btnform">
                <input
                  type="submit"
                  class="btn btn-primary"
                  value="Enregister"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="logo">
        <img src="../../assets/Logo_Fit-Time__Avec_le_cercle.png" alt=""/>
      </div>
    </div>

    <div class="copy">
      <p>©Copyright 2020 Benjamin Lorillon</p>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "espace",
  props: ["adherents"],

  data() {
    return {
      adherent: {},
      message: null,
      pic: null,
      selectedFile: "",
      progress: 0,
      urlImg: "http://localhost:3000/static/",
    };
  },

  created: function() {
    this.adherent = this.adherents[0];
    if (localStorage.getItem("token") === null) {
      this.$router.push({ name: "Login" });
    } else {
      this.adherent = VueJwtDecode.decode(localStorage.getItem("token"));
      console.log(this.adherent);
    }
  },

  methods: {
    logout() {
      localStorage.removeItem("token");
    },
    onFileChange(e) {
      const selectedFile = e.target.files[0];
      this.selectedFile = selectedFile;
      this.progress = 0;
    },
    onUploadFile() {
      const formData = new FormData();
      formData.append("file", this.selectedFile); // appending file

      this.axios
        .post("http://localhost:3000/upload", formData, {
          onUploadProgress: (ProgressEvent) => {
            let progress =
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%";
            this.progress = progress;
          },
        })
        .then((res) => {
          console.log(res);
          this.adherent.Image = res.data.name;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    update: function() {
      this.axios
        .put(
          "http://localhost:3000/adherent/update/" + this.$route.params.id,
          this.adherent
        )
        .then((res) => {
          console.log(res);
          if (res.data.token) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            this.adherent = VueJwtDecode.decode(res.data.token);
            window.location.reload();
            console.log(this.adherent);
            this.message = "votre profil est a jour";
          } else {
            this.message = "error: votre profil n'est pas mis a jour";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.espace1 .menu {
  background-color: #f7941d;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 170px;
}

.espace1 .menu ul li {
  cursor: pointer;
  text-align: center;
  padding: 15px 15px 0px 15px;
  margin-bottom: 15px;
  color: #c5c2c2;
  font-family: roboto;
  font-size: 18px;
  list-style: none;
}
.espace1 .menu ul .profil {
  cursor: pointer;
  text-align: center;
  padding: 15px 15px 0px 15px;
  margin-bottom: 15px;
  color: white;
  font-family: roboto;
  font-size: 18px;
  border-bottom: 3px solid #001a6d;
  list-style: none;
  width: 120px;
}

.espace1 .menu ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.espace1 .menu .hautmenu {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.espace1 .menu .hautmenu .circle {
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  width: 100%;
  font-size: 20px;
  color: white;
}

.espace1 .menu .hautmenu .circle a{
  color: white;
  cursor: pointer;
}

.espace1 .menu .hautmenu .user a {
  color: black;
  text-decoration: none;
  font-family: roboto;
  font-size: 18px;
}

.espace1 .copy p {
  margin: 0 auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8888;
  color: white;
}

.espace1 .ensemble {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  min-height: 870px;
}

.espace1 .ensemble .logo {
  width: 15%;
}

.espace1 .ensemble .logo img {
  width: 100%;
}

/* ------------contenu profil------- */
.espace1 .ensemble .contenu {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateX(50px);
}

.espace1 .ensemble .contenu .conteneur {
  box-shadow: 0 0 0.5em gray;
  width: 100%;
  padding: 30px;
}

.espace1 .ensemble .contenu .conteneur .titrehaut {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: "roboto";
  color: black;
}

.espace1 .ensemble .contenu .conteneur .titrebas {
  font-family: "roboto";
  color: black;
}

.espace1 .ensemble .contenu .conteneur .formUpdate .inputform {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
}

.espace1 .ensemble .contenu .conteneur .formUpdate .inputform input {
  width: 45%;
  margin: 20px 0px;
}

.espace1 .ensemble .contenu .conteneur .formUpdate .btnform {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.espace1 .ensemble .contenu .conteneur .formUpdate .btnform input {
  font-family: "roboto";
  background-color: #f7941d;
  border: none;
  border-radius: 0px;
  height: 50px;
  width: 150px;
  font-size: 23px;
  outline: none;
}

/* ----------------image profil------------------------ */

.espace1 .menu .hautmenu .ensembleimageprofil .imageprofil {
  border-radius: 500px;
  height: 100%;
  width: 100%;
  max-height: 100px;
  max-width: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.espace1 .menu .hautmenu .ensembleimageprofil .centrer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.espace1 .menu .hautmenu .ensembleimageprofil .centrer .file-upload {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.espace1 .menu .hautmenu .ensembleimageprofil .centrer .file {
  cursor: pointer;
  max-width: 200px !important;
}

.espace1 .menu .hautmenu .ensembleimageprofil .centrer .file img{
  max-width: 200px !important;
}

.espace1 .menu .hautmenu .file-upload button {
  background-color: #1ed760;
  border: none;
  padding: 2px 10px;
  font-family: roboto;
  border-radius: 3px;
  margin-bottom: 15px;
  cursor: pointer;
}

.espace1 .menu .hautmenu .file-upload .none {
  display: none;
}

.espace1 .menu .hautmenu .file-upload .valider {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
}

.espace1 .menu .hautmenu .file-upload .progess-bar {
    width: auto !important;
}
</style>
