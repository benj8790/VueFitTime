<template>
  
  <div class="MDPoublie">
<a href="/">

    <img src="../assets/Logo_Fit-Time__Avec_le_cercle.png" alt="">
</a>

    <div class="contenu">
        <a href="/login" class="cross"><i class="far fa-times-circle"></i></a>


        <div class="connection">
        <h1>Mot de passe oublié</h1>
        <div class="identifiant">
            <h3>Identifiant :</h3>
            <i class="fas fa-user"><span></span>                    
            <input type="identifiant" name="identifiant" id="identifiant_connection"  v-model="identifiant_connection" >
            </i>
            
        </div>
        <div class="password">
            <h3>Adresse mail :</h3>
            <i class="fas fa-envelope"><span></span>                    
            <input type="password" name="password" id="password_connection"  v-model="password_connection" >
            </i>

        </div>

        <a href=""><button>Valider</button></a>
        </div>
    </div>
<p>© Copyrights 2020 Benjamin Lorillon</p>

  </div>
</template>

<script>
export default {

}
</script>

<style>

.MDPoublie{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #ebebeb;
    height: 100vh;
}

.MDPoublie p{
    width: 100%;
    background-color: #888888;
    margin: 0;
    height: 25px;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
}

.MDPoublie img{
    width: 200px;
}

.MDPoublie .contenu .cross{
    width: 100%;
    margin: 13px 0 0 35px;
    font-size: 25px;
    color: #f7941d;
     z-index: 1;
}

.MDPoublie .contenu{
    width: 400px;
    height: 350px;
    background-color: white;
    border: 2px solid #f7941d;
     display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}

.MDPoublie .contenu h1{
    font-family: "roboto";
    text-decoration: underline;
    font-size: 25px;
    color: #001a6d;
}

.MDPoublie .contenu .connection h3{
    font-size: 22px;
    font-family: "roboto";
    color: #f7941d;
}

.MDPoublie .contenu .connection button{
    font-family: "roboto";
    width: 130px;
    height: 35px;
    color: white;
    border: none;
    border-radius: 30px;
    margin-top: 40px;
    background-color: #001a6d;
    font-size: 23px;
}

.MDPoublie .contenu .connection {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        transform: translateY(-35px);
}

.MDPoublie .contenu .connection span{
    width: 3px;
    height: 15px;
    background-color: #ebebeb;
}

.MDPoublie .contenu .connection i{
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

.MDPoublie .contenu input{
    font-size: 14px;
    height: 100%;
    border: none;
}

.MDPoublie .contenu .ligne{
    font-size: 13px;
    width: 100%;
    text-align: center;
    margin-top: 10px;
}

.MDPoublie .contenu .ligne a{
    color: #001a6d;
    margin: 0px 14px 0px 37px;
}


















































</style>