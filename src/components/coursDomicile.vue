<template>
  <div class="coursdomicile">
      <h1>Réserver mon cours à Domicile</h1>

      <div class="ensemble">

          <div class="contenu">
              <h3>Avec votre abonnement vous avez le droit à ... cours par semaine <br> Il vous reste ... cette semaine</h3>

        <form >

          <div class="inputform">
              <input class="form-control" type="text" name="identifiant" id="identifiant" placeholder="identifiant"/>
              <input class="form-control" type="email" name="email" id="email" placeholder="email"/>
          </div>

          <div class="inputform">
              <input class="form-control" type="text" name="tel" id="tel" placeholder="téléphone"/>
              <input class="form-control" type="text" name="adresse" id="adresse" placeholder="adresse"/>
          </div>
          
          <div class="inputform">
              <input class="form-control" type="text" name="cp" id="cp" placeholder="code postal"/>
              <input class="form-control" type="text" name="ville" id="ville" placeholder="ville"/>
          </div>

          <div class="inputform">
                    
                    <div class="titreselect">
                        <h4>Coach</h4>
                    <select name="select" required>
                    <option value=""  disabled selected hidden> </option>

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
                    </div>

                    <div class="titreselect">
                    <h4>Coach</h4>

                    <select name="select" required>
                    <option value=""  disabled selected hidden> </option>

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
                    </div>

          </div>

          <div class="inputform">

                    <div class="titreselect">
                    <h4>Coach</h4>

                    <select name="select" required>
                    <option value=""  disabled selected hidden> </option>

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
                    </div>

                    <div class="titreselect">
                    <h4>Coach</h4>

                    <select name="select" required>
                    <option value=""  disabled selected hidden> </option>

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
                    </div>

          </div>


            <div class="reserver">
                <button>Réserver</button>
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

.coursdomicile {
    max-width: 1660px;
    margin: 0 auto;
}

.coursdomicile h1{
    font-family: "roboto";
    text-align: center;
    color: #001a6d;

}

.coursdomicile .ensemble{
    background-image: url(../assets/fondun.jpg);
    width: 100%;
    background-size: cover;
    display: flex;
    justify-content: center;
}

.coursdomicile .ensemble .contenu {
    width: 80%;
    box-shadow: 0 0 0.5em gray;
    background-color: white;
    margin: 50px 0px;
    padding: 20px 150px 40px 20px;}

.coursdomicile .ensemble .contenu form .inputform{
    display: flex;
    margin: 40px 0px;
}

.coursdomicile .ensemble .contenu form .inputform input{
    margin: 0px 10px;
    border: 1px solid;
    border-radius: 0px;
}

.coursdomicile .ensemble .contenu form .inputform input::placeholder{
    color: black;
}

.coursdomicile .ensemble .contenu form .inputform select{
    width: 100%;
    height: 30px;
}

.coursdomicile .ensemble .contenu form .inputform .titreselect{
    width: 50%;
    margin: 0px 10px;
}

.coursdomicile .ensemble .contenu form .inputform .titreselect h4{
    margin: 0px ;
    font-family: "roboto";
    margin-bottom: 10px;

}

.coursdomicile .ensemble .contenu form .reserver{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.coursdomicile .ensemble .contenu form .reserver button{
    background-color: #f7941d;
    border: none;
    font-family: "roboto";
    color: white;
    height: 40px;
    width: 200px;
    font-size: 20px;
    transform: translateX(100px);
}





</style>