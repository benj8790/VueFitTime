<template>
  <div>
    <div class="navbar1">
      <div class="logo">
        <a href=""><img src="..//assets/Logo_Fit-Time__Avec_le_cercle.png" alt="mon logo"></a>
      </div>
    <div class="ensembleDroite">
      <ul class="menu">
        <li><a class="dessus" href="#">Nos Cours V</a>
        <ul class="sous">
          <li><a href="#">Cours Collectif</a></li>
          <li><a href="#">Cours en Ligne</a></li>
          </ul></li>

          <li><a class="dessus" href="#">Formule d'Essaie</a></li>
          <li><a class="dessus" href="#">Trouver ma Salle</a></li>
      </ul>

      <button class="nav1">Je m'abonne</button>
      <i class="far fa-user" id="user1"></i>

    </div>
  </div>
    
</div>
</template>

<script>
export default {
  name: "myNavbar",
  data() {
    return {
      formations: {},
     
    };
  },

};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbar1{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: arial;
  height: 100px;
}

.navbar1 .logo  {
  width: 20%;
}
.navbar1 .logo img{
    width: 35%;
    margin-left: 15px;
}
.navbar1 .menu{
   display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin-right: 50px;
}

.navbar1 .ensembleDroite{
   display: flex;
  align-items: center;
  justify-content: space-around;
}

.navbar1 .menu a{
  text-decoration: none;
  color: black;
}
.navbar1 .dessus{
  margin: 0 20px;
}

.navbar1 .sous{
  display: none;
    box-shadow: 0px 1px 2px #CCC;
    background-color: white;
    position: absolute;
    width: 100%;
    z-index: 1000;
    list-style: none;
}

.navbar1 .menu > li:hover .sous{
    display: block;
}

.sous li{
    float: none;
    width: 100%;
    text-align: left;
}

.navbar1 .nav1{
      background: none;
    border: 2px solid #f7941d;
    height: 27px;
    width: 110px;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
}
.navbar1 .nav1:hover{
      background: #f7941d;
    border: 2px solid #f7941d;
    height: 27px;
    width: 110px;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    color: white;
}

.navbar1 #user1{
  font-size: 30px;
  margin: 0px 40px;
  cursor: pointer;
}
</style>
