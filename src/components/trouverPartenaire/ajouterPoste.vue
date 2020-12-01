<template>
  <div class="ajouterposte">
    <h1>Passer une annonce</h1>
    <div class="ensemble">
        
        <div class="fleche">
            <a href=""><i class="fas fa-arrow-left"></i></a>
        </div>

        <div class="contenu">

            <h3>Olivia tiabella 22ans</h3>
            <form action="">
            
                <div class="inputform">
                     <input class="form-control" type="text" name="Ville" id="Ville" placeholder="Ville"/>
                     <input class="form-control" type="email" name="email" id="email" placeholder="Adresse email"/>
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
                    <input type="checkbox" id="lundi" value="lundi">
                    <label  class="lundiBefor" for="lundi">LUN</label>
                    <label  class="lundiAfter" for="lundi">LUN</label>
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
    align-items: center;}

.ajouterposte .ensemble .contenu form .inputformhoraire .titreselect .horaire select{
    margin: 0px 10px;
    width: 110px;
    }


/* -------------------------------------- */

.ajouterposte .ensemble .contenu form .selectJour .lundiBefor{
    cursor: pointer;
    border: 1px solid gray;
    color: gray;
    background-color: white;
    }

.ajouterposte .ensemble .contenu form .selectJour .lundiAfter{
    cursor: pointer;
    border: 1px solid gray;
    color: gray;
    background-color: orangered;
    }



</style>