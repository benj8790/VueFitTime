<template>
  <div class="ajouterposte">
    <h1>Passer une annonce</h1>
    <div class="ensemble">
        
        <div class="fleche">
            <a :href="`/trouverpartenaire/${id}`"><i class="fas fa-arrow-left"></i></a>
        </div>
 
        <div class="contenu">

          <!-- le v-if= c'est une confition dans vue.js la si le message est différent de vide -->
          <div class="ensembleimageprofil">
            <div class="centrer">
              <div class="imageprofil">
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
                
              </div>
            </div>
          </div> 
            <h3>{{adherent.Prenom}}</h3>
            <form action=""  @submit.prevent="annonce">
            
                <div class="inputform">
                     <input class="form-control" type="text" name="Ville" id="Ville" placeholder="Ville" v-model=" ville_annonce"/>
                     <input class="form-control" type="email" name="email" id="email" placeholder="Adresse email"  v-model=" email_annonce"/>
                </div>

                    
                <div class="inputformhoraire">
                    <div class="global">

                        <h4>Horaire</h4>
                    <div class="titreselect">
                        <div class="horaire">

                        <p>De</p>
                    <select name="select" required>
                    <option value=""  disabled selected hidden> </option>

                     <option value="9h">9h</option>
                     <option value="10h">10h</option>
                     <option value="11h">11h</option>
                     <option value="12h">12h</option>
                     <option value="13h">13h</option>
                     <option value="14h">14h</option>
                     <option value="15h">15h</option>
                     <option value="16h">16h</option>
                     <option value="17h">17h</option>
                     <option value="18h">18h</option>
                     <option value="19h">19h</option>
                     <option value="20h">20h</option>
                    </select>
                        </div>


                    <div class="horaire">

                    <p>à</p>
                    <select name="select" required>
                    <option value=""  disabled selected hidden> </option>

                     <option value="10h">10h</option>
                     <option value="11h">11h</option>
                     <option value="12h">12h</option>
                     <option value="13h">13h</option>
                     <option value="14h">14h</option>
                     <option value="15h">15h</option>
                     <option value="16h">16h</option>
                     <option value="17h">17h</option>
                     <option value="18h">18h</option>
                     <option value="19h">19h</option>
                     <option value="20h">20h</option>
                     <option value="21h">21h</option>
                    </select>
                    </div>

                    </div>
                </div>

                </div>

                <div class="selectJour">

                    <div class="global">

                    
                    <h4>Fréquence d'entrainement</h4>
    
                    <div class="btn-group btn-group-toggle d-flex flex-column flex-md-row" data-toggle="buttons">

                         <label class="btn btn-primary">
                            <input type="checkbox" autocomplete="off" value="lundi"> Lun
                         </label>

                         <label class="btn btn-primary">
                            <input type="checkbox" autocomplete="off" value="mardi"> Mar
                        </label>

                         <label class="btn btn-primary">
                            <input type="checkbox" autocomplete="off" value="mercredi"> Mer
                        </label>

                         <label class="btn btn-primary">
                            <input type="checkbox" autocomplete="off" value="jeudi"> Jeu
                        </label>

                         <label class="btn btn-primary">
                            <input type="checkbox" autocomplete="off" value="vendredi"> Ven
                        </label>

                         <label class="btn btn-primary">
                            <input type="checkbox" autocomplete="off" value="samedi"> Sam
                        </label>

                         <label class="btn btn-primary">
                            <input type="checkbox" autocomplete="off" value="dimanche"> Dim
                        </label>

                    </div>
                    </div>

                </div>

                <div class="lesattentes">
                    <input class="text" type="text" placeholder="Vos attentes"  v-model=" vos_Attente_annonce">

                    <input class="btn" type="submit" name="Poster" placeholder="Poster" value="Poster">
                </div>

            </form>
        </div>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
    name: "ajoutposte",
    props: ["adherents"],

    data() {
    return {
      adherent: {},
      urlImg: "http://localhost:3000/static/",
      disponibilite_annonce: "",
      prenom_annonce: "",
      horaire_annonce: "",
      vos_Attente_annonce: "",
      ville_annonce: "",
      email_annonce: "",
      adherent_id_annonce: "",
      id: this.$route.params.id

 
    };
  },

    methods:{
   
        annonce: function (){
            this.axios.post("http://localhost:3000/annonce/ajouter",{
                disponibilite: this.disponibilite_annonce,
                Prenom: this.prenom_annonce,
                Horaire: this.horaire_annonce,
                Vos_Attente: this.vos_Attente_annonce,
                Ville: this.ville_annonce,
                Email:this.email_annonce,
                adherent_id:this.adherent_id_annonce,
            })
            .then(res =>{

                console.log(res);
                alert("ok");
                if(res.data.token){
                    var adherent = VueJwtDecode.decode(res.data.token);
                    localStorage.setItem("token",res.data.token)
                    this.$router.push({name: "trouverPartenaire", params: { id: adherent.Id }})
                    window.location.reload();
                }
                else{
                    this.$router.push({name: "ajoutposte", params: {msg: "pas enregistré"} })
                }
            })
            .catch(err => {
                console.log(err);
            })

        },
    },


      created: function() {
    this.adherent = this.adherents[0];
      },

}
</script>

<style>

.ajouterposte h1{
    font-family: "roboto";
    color: #001a6d;
    text-align: center;
}

.ajouterposte .ensemble{
    background-image: url(../../assets/fondajout.jpg);
    background-size: cover;
    display: flex;
    justify-content: center;
}

.ajouterposte .ensemble .fleche a i{
    font-size: 35px;
    color: #f7941d;
    margin-top: 50px;
}

.ajouterposte .ensemble .contenu h3{
    font-family: "roboto";
    text-align: center;
    
}

.ajouterposte .ensemble .contenu{
    width: 50%;
    box-shadow: 0 0 0.5em gray;
    margin: 50px 0px 30px 50px;
    background-color: white;
    
}

.ajouterposte .ensemble .contenu .inputform{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;    
}

.ajouterposte .ensemble .contenu .inputform input{
    width: 80%;
    margin: 20px 0px;
    border: 1px solid gray;
}

.ajouterposte .ensemble .contenu .inputform input::placeholder{
    color: black;
}

.ajouterposte .ensemble .contenu form .inputformhoraire{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ajouterposte .ensemble .contenu form .inputformhoraire .global{
    width: 80%;
}


.ajouterposte .ensemble .contenu form .inputformhoraire .titreselect {
    display: flex;
}

.ajouterposte .ensemble .contenu form .inputformhoraire .titreselect .horaire{
    display: flex;
    height: 30px;
}

.ajouterposte .ensemble .contenu form .inputformhoraire .titreselect .horaire p{
    margin: 0 auto !important;
    display: flex;
    align-items: center;
    }

.ajouterposte .ensemble .contenu form .inputformhoraire .titreselect .horaire select{
    margin: 0px 10px;
    width: 110px;
    }


/* ------------------------------------------------------------------------- */

.ajouterposte .ensemble .contenu form .selectJour {
    display: flex;
    justify-content: center;
    margin: 15px 0px;
    }

.ajouterposte .ensemble .contenu form .selectJour .global{
    width: 80%;
    }

.ajouterposte .ensemble .contenu form .selectJour .global .btn-group{
    display: flex !important;
    flex-wrap: wrap;
    }

.ajouterposte .ensemble .contenu form .selectJour .global label{
    margin:0px 5px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 0px;
    color: gray;
    outline: none;
    font-family: "roboto";
    }

.ajouterposte .ensemble .contenu form .selectJour .global .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle{
    margin:0px 5px;
    background-color: #f7941d !important;
    border: 1px solid #f7941d;
    border-radius: 0px;
    color: white;
    outline: none;
    font-family: "roboto";
    }

/* ----------------------------------------- */

.ajouterposte .ensemble .contenu form .lesattentes {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.ajouterposte .ensemble .contenu form .lesattentes .text {
    width: 80%;
    margin: 10px 0px 35px 0px;
    padding-bottom: 200px;
    padding-top: 10px;
}

.ajouterposte .ensemble .contenu form .lesattentes .text::placeholder {
    font-size: 18px;
}

.ajouterposte .ensemble .contenu form .lesattentes input[type= submit] {
    padding: 0px 30px;
    color: white;
    font-family: "roboto";
    background-color: #f7941d;
    font-size: 24px;
    border-radius: 0px;
    margin-bottom: 25px;
}

/* ----------------image profil------------------------ */

.ajouterposte .contenu .ensembleimageprofil .imageprofil {
  border-radius: 500px;
  height: 100%;
  width: 100%;
  max-height: 150px;
  max-width: 150px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.ajouterposte .contenu .ensembleimageprofil .centrer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.ajouterposte .contenu .ensembleimageprofil .centrer .file-upload {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.ajouterposte .contenu .ensembleimageprofil .centrer img{
  max-width: 280px !important;
}


</style>