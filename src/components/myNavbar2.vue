<template>
  <div>
    <div class="navbar1">
      <div class="logo">
        <a href="/pageAccueil2"
          ><img
            src="..//assets/Logo_Fit-Time__Avec_le_cercle.png"
            alt="mon logo"
        /></a>
      </div>
      <div class="ensembleDroite">
        <div class="main-menu" id="maine-menu">
          <input class="menu-btn" type="checkbox" name="" id="menu-btn" />
          <!-- ------------for c'est lié à un id la à l'id menu-btn----------- -->
          <label class="menu-icon" for="menu-btn">
            <!-- span c'est comme une div mais c'est marge par défaut ect -->
            <span class="navicon"></span>
          </label>
          <ul class="menu">
            <li>
              <a class="dessus none" href="#">Nos Cours V</a>
              <ul class="sous">
                <li><a href="/CoursCollectif">Cours Collectif</a></li>
                <li><a href="#">Cours en Ligne</a></li>
              </ul>
            </li>

            <li>
              <a class="dessus" href="/coursdomicile">Mon cours à domicile</a>
            </li>
            <li>
              <a class="dessus" href="/trouverpartenaire"
                >Trouver un partenaire
              </a>
            </li>
            <li>
              <a class="dessus" href="/trouverMaSalle">Trouver ma Salle</a>
            </li>
            <li>
              <a class="dessus" :href="`/espace/${adherent.Id}`">Mon espace </a>
            </li>
          </ul>
        </div>
        <div class="btn-">
          <a href="/login">
            <i class="far fa-user" id="user1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt from "vue-jwt-decode";
export default {
  name: "myNavbar",
  data() {
    return {
      formations: {},
      adherent: {},
    };
  },
  created() {
    this.adherent = jwt.decode(localStorage.getItem("token"));
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.btn- a {
  color: black !important;
}

.navbar1 .logo {
  width: 20%;
}

.navbar1 .logo img {
  width: 35%;
  margin-left: 15px;
  min-width: 60px;
}
@media (min-width: 1024px) {
  .main-menu input {
    display: none;
  }
  .navbar1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: arial;
    height: 100px;
    max-width: 1660px;
    margin: 0 auto;
    width: 100%;
  }

  .navbar1 .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin-right: 50px;
    transform: translateY(-5px);
  }

  .navbar1 .ensembleDroite {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .navbar1 .menu a {
    text-decoration: none;
    color: black;
  }
  .navbar1 .dessus {
    margin: 0 20px;
  }

  .navbar1 .sous {
    display: none;
    box-shadow: 0px 1px 2px #ccc;
    background-color: white;
    position: absolute;
    width: 120px;
    z-index: 1000;
    list-style: none;
    line-height: 2;
    height: 57px;
  }

  .navbar1 .menu > li:hover .sous {
    display: block;
  }

  .sous li {
    float: none;
    width: 100%;
    text-align: center;
  }

  .navbar1 #user1 {
    font-size: 30px;
    margin: 0px 40px;
    cursor: pointer;
  }
}

@media (min-width: 320px) and (max-width: 1023.9px) {
  /* ------------------------------MENU BURGER----------------------- */
  .btn- {
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0px 79px 0px 81px;
  }
  /* ---------------pour faire apparaitre les 3 trait */
  .main-menu {
    width: 100%;
    background-color: transparent;
  }
  .main-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: white;
  }
  .main-menu li a {
    width: 100% !important;
    display: block;
    margin-right: 2px;
    text-decoration: none;
    padding: 20px;
    color: white;
  }
  .main-menu .menu-icon {
    cursor: pointer;
    display: inline-block;
    margin-top: 5px;
    padding: 28px 20px;
    float: right;
  }
  .main-menu .menu-icon .navicon {
    background-color: #001a6d;
    display: block;
    height: 5px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 38px;
  }
  .main-menu .menu-icon .navicon:before,
  .main-menu .menu-icon .navicon:after {
    background-color: #001a6d;
    /*  La propriété content est utilisée avec les pseudo-éléments ::before et ::after 
        afin de générer le contenu d'un élément. Les objets insérés via la propriété content 
        sont des éléments remplacés anonymes. */
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: 0.2s ease-out;
    width: 100%;
  }
  .main-menu .menu-icon .navicon:before {
    top: 10px;
  }
  .main-menu .menu-icon .navicon:after {
    top: -10px;
  }
  .main-menu .menu-btn {
    display: none;
  }
  .main-menu .menu-btn:checked ~ .menu {
    max-height: 320px;
    position: absolute;
    width: 100%;
    text-align: center;
    display: block;
    z-index: 1;
    background-color: white;
    top: 93px;
    left: 0px;
    line-height: 0;
  }
  .main-menu .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }
  .main-menu .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }
  .main-menu .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }
  .main-menu .menu-btn:checked ~ .menu-icon .navicon:before,
  .main-menu .menu-btn:checked ~ .menu-icon .navicon:after {
    top: 0;
  }
  .main-menu .menu {
    max-height: 0;
    display: block;
  }

  /*    -------------------------- */

  .navbar1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: arial;
    height: 100px;
    max-width: 1660px;
    margin: 0 auto;
    width: 100%;
  }

  .navbar1 .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin-right: 50px;
  }

  .navbar1 .menu a {
    text-decoration: none;
    color: black;
  }
  .navbar1 .dessus {
    margin: 0 20px;
  }

  .navbar1 .sous {
    width: 100%;
    list-style: none;
    height: 81px;
    transform: translateX(18px);
  }

  .navbar1 .menu > li:hover .sous {
    display: block;
  }

  .sous li {
    float: none;
    width: 100%;
    text-align: center;
  }

  .navbar1 #user1 {
    font-size: 30px;
    margin: 0px 40px;
    cursor: pointer;
  }

  .menu .none {
    display: none;
  }
}
</style>
