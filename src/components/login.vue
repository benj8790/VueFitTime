<template>
  <div class="login">
    <a href="/">
      <img src="../assets/Logo_Fit-Time__Avec_le_cercle.png" alt="" />
    </a>

    <div class="contenu" id="container">
      <a href="/" class="cross"><i class="far fa-times-circle"></i></a>

      <div class="connection">
        <h1>Se connecter</h1>

        <form @submit.prevent="connection">
          <div class="identifiant">
            <h3>Identifiant :</h3>
            <i class="fas fa-user"
              ><span></span>
              <input
                type="text"
                name="identifiant"
                id="identifiant_connection"
                v-model="identifiant_connection"
              />
            </i>
          </div>
          <div class="password">
            <h3>Mot de passe :</h3>
            <i class="fas fa-lock"
              ><span></span>
              <input
                type="password"
                name="password"
                id="password_connection"
                v-model="password_connection"
              />
            </i>
          </div>

          <div class="ligne">
            <a href="/abonnement">S'abonner</a>
            <a href="/mdpOublie">Mot de passe oublié ?</a>
          </div>

          <div class="valider">
            <a href=""><button id="signUp">Valider</button></a>
          </div>
        </form>
      </div>
    </div>
    <p>© Copyrights 2020 Benjamin Lorillon</p>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  name: "login",
  data() {
    return {
      identifiant_connection: "",
      password_connection: "",
    };
  },
  components: {},
  methods: {
    connection: function() {
      this.axios
        .post("http://localhost:3000/adherent/login", {
          identifiant: this.identifiant_connection,
          Password: this.password_connection,
        })
        .then((res) => {
          console.log(res);
          if (res.data.token) {
            var user = VueJwtDecode.decode(res.data.token);
            localStorage.setItem("token", res.data.token);

            this.$router.push({ name: "Espace", params: { id: user.Id } });
            window.location.reload();
          } else {
            this.$router.push({
              name: "pageAccueil2",
              params: { msg: "non connecté" },
            });
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Mot de passe ou identifiant incorrect");
        });
    },
  },
};
</script>

<style>
.login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #ebebeb;
  height: 100vh;
}

.login p {
  width: 100%;
  background-color: #888888;
  margin: 0;
  height: 25px;
  color: white;
  align-items: center;
  display: flex;
  justify-content: center;
}

.login img {
  width: 200px;
}

.login .contenu .cross {
  width: 100%;
  margin: 13px 0 0 35px;
  font-size: 25px;
  color: #f7941d;
  z-index: 1;
}

.login .contenu .connection span {
  width: 3px;
  height: 15px;
  background-color: #ebebeb;
}

.login .contenu {
  width: 400px;
  height: 350px;
  background-color: white;
  border: 2px solid #f7941d;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.login .contenu h1 {
  font-family: "roboto";
  text-decoration: underline;
  font-size: 25px;
  color: #001a6d;
}

.login .contenu .connection h3 {
  font-size: 22px;
  font-family: "roboto";
  color: #f7941d;
}

.login .contenu .connection .valider button {
  font-family: "roboto";
  width: 130px;
  height: 35px;
  color: white;
  border: none;
  border-radius: 30px;
  margin-top: 25px;
  background-color: #001a6d;
  font-size: 23px;
}

.login .contenu .connection form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login .contenu .connection {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-35px);
}

.login .contenu .connection i {
  background-color: white;
  box-shadow: 0 0 0.5em grey;
  height: 30px;
  border-radius: 5px;
  align-items: center;
  display: flex;
  width: 108%;
  justify-content: space-between;
  color: #ebebeb;
  font-size: 20px;
  padding-left: 15px;
}

.login .contenu input {
  font-size: 14px;
  height: 100%;
  border: none;
  color: black;
  outline: none;
}

.login .contenu .ligne {
  font-size: 13px;
  width: 100%;
  text-align: center;
  margin-top: 10px;
}

.login .contenu .ligne a {
  color: #001a6d;
  margin: 0px 14px 0px 37px;
}
</style>
