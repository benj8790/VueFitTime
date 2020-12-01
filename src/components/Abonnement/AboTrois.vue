<template>
    <div class="abotrois">
      <h1>Rentrer vos coordonées personnel</h1>
<div class="compteur">
        <div class="aUn">
         <button class="btnUn">1</button>
         <a href="">Vos coordonées</a>
        </div>
         <span></span>
         <div class="aUn">
         <button class="btnUn">2</button>
         <a href="" >Votre formule</a>
         </div>
         <span></span>
         <div>
         <button class="btnDeux">3</button>
         </div>
         <span></span>
         <div>
         <button>4</button>
         <a href="">Paiement</a>
         </div>
</div>
    <div class="contenu2">
       
       
        <div class="container_inscription_2">
            <form class="form2" @submit.prevent="inscription">
                    
                    <div class="civilite">

                    <div class="civi">


                    <label>M.
                        <input type="radio" checked="checked" name="civilite" id="civilite" value="Mosieur" v-model="civilite_inscription">
                        <span class="checkmark"></span>
                    </label>
                        <label>Mme.
                        <input type="radio" name="civilite" id="civilite" value="Madame" v-model="civilite_inscription">
                        <span class="checkmark"></span>
                    </label>
                    </div>
                    </div>
                    

                    <div class="input1">
                    <input type="text" name="nom" id="nom" placeholder="Nom" v-model="nom_inscription">
                    <input type="text" name="prenom" id="prenom" placeholder="Prénom" v-model="prenom_inscription">
                    </div>
                    <div class="date">
                        <h3>Date de naissance</h3>
                    <select name="select" required>
                    <option value=""  disabled selected hidden> jj</option>

                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="7">7</option>
                     <option value="8">8</option>
                     <option value="9">9</option>
                     <option value="10">10</option>
                     <option value="11">11</option>
                     <option value="12">12</option>
                     <option value="13">13</option>
                     <option value="14">14</option>
                     <option value="15">15</option>
                     <option value="16">16</option>
                     <option value="17">17</option>
                     <option value="18">18</option>
                     <option value="19">19</option>
                     <option value="20">20</option>
                     <option value="21">21</option>
                     <option value="22">22</option>
                     <option value="23">23</option>
                     <option value="24">24</option>
                     <option value="25">25</option>
                     <option value="26">26</option>
                     <option value="27">27</option>
                     <option value="28">28</option>
                     <option value="29">29</option>
                     <option value="30">30</option>
                     <option value="31">31</option>
                    </select>

                    <select name="select" required>
                    <option value=""  disabled selected hidden> mm</option>

                     <option value="Janvier">Janvier</option>
                     <option value="Février">Février</option>
                     <option value="Mars">Mars</option>
                     <option value="Avril">Avril</option>
                     <option value="Mai">Mai</option>
                     <option value="Juin">Juin</option>
                     <option value="Juillet">Juillet</option>
                     <option value="Août">Août</option>
                     <option value="Septembre">Septembre</option>
                     <option value="Octobre">Octobre</option>
                     <option value="Novembre">Novembre</option>
                     <option value="Décembre">Décembre</option>
                    </select>

                    <select name="select" required>
                    <option value=""  disabled selected hidden> aaaa</option>

                     <option value="2003">2003</option>
                     <option value="2002">2002</option>
                     <option value="2001">2001</option>
                     <option value="2000">2000</option>
                     <option value="1999">1999</option>
                     <option value="1998">1998</option>
                     <option value="1997">1997</option>
                     <option value="1996">1996</option>
                     <option value="1995">1995</option>
                     <option value="1994">1994</option>
                     <option value="1993">1993</option>
                     <option value="1992">1992</option>
                     <option value="1991">1991</option>
                     <option value="1990">1990</option>
                     <option value="1989">1989</option>
                     <option value="1988">1988</option>
                     <option value="1987">1987</option>
                     <option value="1986">1986</option>
                     <option value="1985">1985</option>
                     <option value="1984">1984</option>
                     <option value="1983">1983</option>
                     <option value="1982">1982</option>
                     <option value="1981">1981</option>
                     <option value="1980">1980</option>
                     <option value="1979">1979</option>
                     <option value="1978">1978</option>
                     <option value="1977">1977</option>
                     <option value="1976">1976</option>
                     <option value="1975">1975</option>
                     <option value="1974">1974</option>
                     <option value="1973">1973</option>
                     <option value="1972">1972</option>
                     <option value="1971">1971</option>
                     <option value="1970">1970</option>
                    </select>
                    
                    </div>
                    
                    <div class="input1">
                    <input type="tel" name="tel" id="tel" placeholder="Téléphone" v-model="tel_inscription">
                    <input type="email" name="email" id="email_connection" placeholder="Mail" v-model="email_inscription" >
                    </div>
                    <div class="input1">
                    <input type="text" name="ville" id="ville" placeholder="Ville" v-model="ville_inscription">
                    <input type="number" name="code_postal" id="code_postal" placeholder="Code postal" v-model="code_postal_inscription">
                    </div>
                   
                    <div class="input2">
                    <input type="text" name="adresse" id="adresse" placeholder="Adresse" v-model="adresse_inscription">
                    </div>
                    <input  type="file" id="user2" accept="image/jpg" @change="uploadImage" />
                   
                    <label class="user3" for="user2"> 
                     
                     <div class="divImgProfil">
                     <img v-if="pic !== null" :src="pic" class="utilisateur_Image" alt="avatar" />
                         
                     <img v-else  src="../../assets/userregister.jpg" class="utilisateur_Image" alt="avatar"/>
                     </div>
                    <div class="btn-img-profil">choisissez une image de profil</div>            
                     </label>
                     <button class="btn-ident"> Continuer </button>

                </form>
                   
            </div>
      
        </div>
  <button v-on:click="$emit('show', false)">Selectionner</button>
    </div>
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            nom_inscription: "",
            prenom_inscription: "",
            tel_inscription: "",
            code_postal_inscription: "",
            adresse_inscription: "",
            ville_inscription: "",
            email_inscription: "",
            civilite_inscription: "",
            date_naissance_inscription: "",
            utilisateur_Image:"",
            pic: null

            
        }
},


    components:{},
    methods:{
         uploadImage(e) {
             console.log(e.target.files)
             /* prend le premier élément choisi */
      const Image = e.target.files[0];
      /* FileReader : permet de lire le fichier */
      const reader = new FileReader();
      /* converti l'image en texte afin de la stocker dans la database */
      reader.readAsDataURL(Image);
      /* e = objet(stock le nom, l'extension ect...) */
      reader.onload = (e) => {
        this.pic = e.target.result;
        this.utilisateur_Image = e.target.result;
      };
    },
   
        inscription: function (){
            this.axios.post("http://localhost:3000/adherent/register",{
                Nom: this.nom_inscription,
                Prenom: this.prenom_inscription,
                Numero_telephone: this.tel_inscription,
                Code_postal: this.code_postal_inscription,
                Adresse: this.adresse_inscription,
                Ville: this.ville_inscription,
                Email:this.email_inscription,
                Image: this.utilisateur_Image
            })
            .then(res =>{

                console.log(res);
                alert("ok");
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
                    this.$router.push({name: 'profil'})
                    window.location.reload();
                }
                else{
                    this.$router.push({name: "register", params: {msg: "pas enregistré"} })
                }
            })
            .catch(err => {
                console.log(err);
            })

        },
    },
}
</script>

<style>

.abotrois .contenu2 .date h3{
    margin-left: 15px;
    font-size: 20px;
    font-family: "arial";
    font-weight: 600;
}

.abotrois .contenu2 {
    margin-bottom: 200px;
}

.abotrois .contenu2 .container_inscription_2 .form2 .user3{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.abotrois .contenu2{
    box-shadow: 0 0 1em gray;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.abotrois .contenu2 .container_inscription_2 .form2 input{
    width: 220px;
    height: 30px;
    box-shadow: 0 0 0.5em gray;
    outline: none;
    border: none;
    padding-left: 10px;
    margin: 20px 15px;
}

.abotrois .contenu2 .container_inscription_2 .form2 select{
    width: 100px;
    height: 30px;
    box-shadow: 0 0 0.5em gray;
    outline: none;
    border: none;
    padding-left: 10px;
    margin: 20px 15px;
}

.abotrois .contenu2 .container_inscription_2{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
}

.abotrois .contenu2 .container_inscription_2 .form2{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}


.abotrois .contenu2 .container_inscription_2 .form2 .input1{
    width: 100%;
    display: flex;
    justify-content: space-between;
        flex-wrap: wrap;
}

.abotrois .contenu2 .container_inscription_2 .form2 .civilite input{
    width: 20px;
    height: 20px;
    box-shadow: none;
    margin: 25px 20px 20px 10px;
    transform: translateY(4px);
    cursor: pointer;
}

.abotrois .contenu2 .container_inscription_2 .form2 .civilite .civi {
    margin-left: 15px;

}

.abotrois .contenu2 .container_inscription_2 .form2 .civilite label input:checked ~ .checkmark {
  background-color: pink;
}

.abotrois .contenu2 .container_inscription_2 .form2 .input2{
    width: 95%;
    margin: 0px 14px;
}


.abotrois .contenu2 .container_inscription_2 .form2 .input2 input{
    width: 100%;
    margin: 20px 0px;
}

.abotrois .contenu2 .container_inscription_2 .form2 input[type="file"]{
    display: none;
}

.abotrois .contenu2 .container_inscription_2 .form2 input::placeholder{
   color: black;
}

.abotrois .contenu2 .container_inscription_2 .form2 button{
   color: white;
   background-color: #f7941d;
   border: none;
   width: 150px;
   height: 45px;
   font-family: "roboto";
   font-size: 22px;
   margin:25px 0px;
}

.divImgProfil{
    width: 50px;
    height: 47px;
    overflow: hidden;
    border-radius: 22px;
        display: flex;
    justify-content: center;
    align-items: center;
}

.utilisateur_Image{
   width: 50px;
}

/* --------------- */
.abotrois{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.abotrois h1{
  font-family: "roboto";
  color:  #001a6d;
  text-align: center;
}

.abotrois .compteur .btnUn{
    color: white !important;
    border: none !important;
    background-color: #f7941d !important;
}

.abotrois .compteur .aUn a{
    color: black !important;
}

.abotrois .compteur .btnDeux{
    transform: translateY(-8px);
    color: white !important;
    border: none !important;
    background-color: #f7941d !important;
    box-shadow: 0 0 0.5em grey;
}

.abotrois .compteur a{
    font-size: 12px;
    color: #888888;
    text-decoration: none;
}

.abotrois .compteur span{
    width: 80px;
    height: 5px;
    background-color: #061a57;
    margin: 0px 20px;
}

.abotrois .compteur{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 80px;
}

.abotrois .compteur div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.abotrois .compteur button{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: 3px solid #888888;
    color: #888888;
    background-color: white;
    font-size: 30px;
    font-family: "roboto";
    cursor: unset;
    outline: none;
}

/* ------------------------ */


</style>