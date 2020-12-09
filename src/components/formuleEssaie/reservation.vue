<template>
  
  <div class="reservation">

    <div class="ensemble">

        <h3>Séance prévu pour le: ... à ... à la salle de .... </h3>


        <form action="">

        <div class="inputEun">

            <div class="un">
              <h5>Nom</h5>
              <input type="text" name="nom"  id="nom" placeholder="Nom...">
            </div>

            <div class="deux">
              <h5>Prenom</h5>
              <input type="text" name="prenom"  id="prenom" placeholder="Prenom...">
            </div>
        </div>

            
            <div class="date">
                        <h5>Date de naissance</h5>
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

          <div class="inputEun">

            <div class="un">

              <h5>Téléphone</h5>
              <input type="text" name="telephone"  id="telephone" placeholder="06...">
            </div>

            <div class="deux">
              <h5>Mail</h5>
              <input type="text" name="email"  id="email" placeholder="Adresse mail...">
            </div>
          </div>

          <div class="inputEun">

            <div class="un">

              <h5>Ville</h5>
              <input type="text" name="ville"  id="ville" placeholder="Ville...">
            </div>

            <div class="deux">
              <h5>Code Postal</h5>
              <input type="text" name="cp"  id="cp" placeholder="Code postal...">
            </div>

          </div>

          <div class="inputEquatre">

            <div class="un">

              <h5>Adresse</h5>
              <input type="text" name="adresse"  id="adresse" placeholder="Votre adresse...">
            </div>

            <div class="deux">
              <h5>Objectif</h5>
              <input type="text" name="objectif"  id="objectif" placeholder="Rapidement votre objectif...">
            </div>

          </div>

          <div class="btn">
            <input type="button" value="Réserver">
          </div>

        </form>






    </div>



  </div>




</template>

<script>
export default {

}
</script>

<style>

.reservation{
  display: flex;
  justify-content: center;
}

.reservation .ensemble{
  background-color: #eeeeee;
  border: 1px solid #f7941d;
  width: 50%;
  max-width: 500px;
  font-family: "roboto";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 50px;
}

.reservation .ensemble h3{
  color: #001a6d;
  font-family: "roboto";
}

.reservation .ensemble input{
  border: 1px solid #001a6d;
  border-radius: 2px;
}

.reservation .ensemble input::placeholder{
  padding: 5px 10px;
  font-family: "arial";
}

.reservation .ensemble form{
  width: 100%;
}

.reservation .ensemble .inputEun{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.reservation .ensemble .inputEun .un{
    margin: 15px 0px;
}

.reservation .ensemble .inputEun .deux{
    margin: 15px 0px;
}

.reservation .ensemble .inputEquatre .un{
    margin: 20px 0px;
}

.reservation .ensemble .inputEquatre .deux{
    margin: 20px 0px;
}

.reservation .ensemble .inputEquatre input{
    width: 100%;
}

.reservation .ensemble .inputEquatre .deux input{
    padding-bottom: 150px;
}



.reservation .ensemble form .btn {
    width: 100%;
}

.reservation .ensemble form .btn input{
    height: 30px;
    padding: 5px 15px;
    color: white;
    background-color: #001a6d;
    border-radius: 50px ;
    border: none;
}

.reservation .ensemble form .date select{
    border: 1px solid #001a6d;
    border-radius: 2px;
    margin-right: 20px;
    width: 25%;
}





</style>