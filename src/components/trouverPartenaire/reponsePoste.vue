<template>
  <div class="reponseposte">


        <div class="fleche">
            <a href="/trouverpartenaire"><i class="fas fa-arrow-left"></i></a>
        </div>

        <div class="contenu">


            <div class="carteannonce">

            </div>

            <div class="reponse">
                <h3> Répondre à {{}} </h3>

                    <form action="">

                        <div class="haut">

                        <input type="text" placeholder="Identifiant" >
                        <input type="email" placeholder="Adresse mail">

                        </div>

                        <div class="bas">

                        <input class="bonjour" type="text" placeholder="Bonjour...">

                        <input class="btn" type="submit" name="Poster" placeholder="Poster" value="Envoyer">

                        </div>

                    </form>
            </div>
        </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

 .reponseposte{
     background-image: url(../../assets/fondreponse.jpg);
     background-size: cover;
     display: flex;
     justify-content: center;
 }

 .reponseposte .contenu{
    width: 75%;
 }

 .reponseposte .fleche a i{
    font-size: 35px;
    color: #f7941d;
    margin-top: 60px;
    margin-right: 50px;

}

 .reponseposte .contenu .carteannonce{
     width: 100%;
     height: 234px;
     box-shadow: 0 0 0.5em gray;
     background-color: white;
     margin-top: 60px;
 }

 .reponseposte .contenu .reponse h3{
    color: #f7941d;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 50px;
 }

.reponseposte .contenu form .haut {
    display: flex;
    justify-content: space-between;
}

.reponseposte .contenu form .haut input {
    width: 45%;
    height: 30px;
    margin: 30px 0px;
}

.reponseposte .contenu form .bas {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.reponseposte .contenu form .bas input[type= submit] {
    padding: 0px 30px;
    color: white;
    font-family: "roboto";
    background-color: #f7941d;
    font-size: 24px;
    border-radius: 0px;
    margin-bottom: 25px;
}

.reponseposte .contenu form .bas input[type= text] {
    width: 100%;
    margin: 10px 0px 35px 0px;
    padding-bottom: 200px;
    padding-top: 10px;
}


</style>