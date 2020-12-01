<template>

<div class="myfooter">

<div class="haut">

<img src="../assets/Logo_Fit-Time__Avec_le_cercle.png" alt="">


<div class="hautDroite"></div>

<div class="leMenu">

<ul>
    <li><a href="/CoursCollectif">Cours collectif</a></li>
    <li><a href="">Cours en ligne</a></li>
    <li><a href="/trouverMaSalle">Trouver la salle</a></li>
</ul>
      
<ul>
    <li><a href="">Formule d’essaie</a></li>
    <li><a href="/abonnement">Nos abonements</a></li>
</ul>

</div>


<div class="newsletter">

<h4>Newsletter</h4>
<input type="email" name="email" id="email" placeholder="email" >
<button type="submit" class="btn-submit">Envoyer</button>


</div>

</div>



<div class="milieu">

<p><a href="">A propos de nous</a> - <a href="">Politique de confidentialité</a> - <a href="">Condition générale d’utilisateur</a></p>

<div class="reseau">
<a href=""><i class="fab fa-facebook-f"></i></a>
<a href=""><i class="fab fa-twitter"></i></a>
<a href=""><i class="fab fa-instagram"></i></a>
<a href=""><i class="fab fa-youtube"></i></a>
<a href=""><i class="fab fa-snapchat-ghost"></i></a>
</div>

</div>


<div class="bas">

<p>© Copyrights 2020 Benjamin Lorillon</p>
<a href="">Contactez-Nous</a>

</div>

</div>
</template>

<script>
export default {

}
</script>

<style>


@media (min-width: 1024px){
.myfooter img{
    width: 8%;
    margin-left: 5%;
    }
.myfooter{
    background-color: #ebebeb;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1660px;
    width: 100%;
    margin: 0 auto;
}


.myfooter .haut{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
}


.myfooter .bas{
    display: flex;
    justify-content: space-between;
    border-top: 3px solid #e1e1e1;
    height: 45px;
    align-items: flex-end;
}

.myfooter .bas p{
    color: #a1a1a1;
    margin-left: 25px;
}

.myfooter .bas a{
    color: #a1a1a1;
    margin-right: 25px;
    margin-bottom: 10px;
}

.myfooter .milieu{
    display: flex;
    justify-content: space-between;
}

.myfooter .milieu p{
    color: #001a6d ;
    margin-left: 25px;
}

.myfooter .milieu a{
    color: #001a6d ;
}

.myfooter .milieu .reseau a{
    color: #a1a1a1;
    margin: 0px 10px;
}

.myfooter .milieu .reseau{
    transform: translateX(-137%);
}

.myfooter .leMenu {
    display: flex;
    margin-top: 70px;
}

.myfooter .leMenu  ul{
    list-style: none;
    margin: 0px 30px; 
}

.myfooter .leMenu  ul li{
    margin: 5px 0px;

}

.myfooter .leMenu  ul li a{
    text-decoration: none;
    color: #888888;
    font-family: 'Times New Roman';

}

.myfooter .newsletter {
    margin-top: 70px;
}

.myfooter .newsletter h4 {
    color: #888888;
    font-size: 13px;
    font-family: 'Times New Roman';
    margin-bottom: 25px;
}

.myfooter .newsletter input {
        height: 35px;
    width: 250px;
    border: none;
    box-shadow: 0 0 1em grey;
    padding-left: 30px;
    margin-right: 10px;
}

.myfooter .newsletter button {
    height: 35px;
    width: 100px;
    border: none;
    box-shadow: 0 0 1em grey;
    background-color: #f7941d;
    color: white;
    font-family: "roboto";
    margin-right: 20px;

}
}

@media (min-width: 320px) and (max-width: 1024.9px){
    .myfooter img{
    width: 150px;
    }
.myfooter{
    background-color: #ebebeb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
}


.myfooter .haut{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}


.myfooter .bas{
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-top: 3px solid #e1e1e1;
}

.myfooter .bas p{
    color: #a1a1a1;
    margin-left: 25px;
}

.myfooter .bas a{
    color: #a1a1a1;
    margin-right: 25px;
}

.myfooter .milieu{
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
    transform: translateY(-23px);

}

.myfooter .milieu p{
    color: #001a6d ;
    margin-left: 25px;
    text-align: center;
}

.myfooter .milieu a{
    color: #001a6d ;
}

.myfooter .milieu .reseau a{
    color: #a1a1a1;
    margin: 0px 10px;
}

.myfooter .milieu .reseau{
    font-size: 15px;
    transform: translateY(-104px);
}

.myfooter .leMenu {
    display: flex;
    margin-top: 67px;
    flex-direction: column;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    width: 100%;
    transform: translateY(105px);
    margin-bottom: 14px;
}

.myfooter .leMenu  ul{
    display: flex;
    list-style: none;
    margin: 0px 30px;
    flex-wrap: wrap;
    justify-content: center;
}


.myfooter .leMenu  ul li{
    margin: 5px 15px;

}

.myfooter .leMenu  ul li a{
    text-decoration: none;
    color: #888888;
    font-family: 'Times New Roman';

}

.myfooter .newsletter {
    text-align: center;
    transform: translateY(-150px);
}

.myfooter .newsletter h4 {
    color: #888888;
    font-size: 38px;
    font-family: 'arial';
    margin-bottom: 25px;
}

.myfooter .newsletter input {
        height: 35px;
    width: 250px;
    border: none;
    box-shadow: 0 0 1em grey;
    padding-left: 30px;
    margin-right: 10px;
}

.myfooter .newsletter button {
    height: 35px;
    width: 100px;
    border: none;
    box-shadow: 0 0 1em grey;
    background-color: #f7941d;
    color: white;
    font-family: "roboto";
    margin-right: 20px;

}
}





</style>