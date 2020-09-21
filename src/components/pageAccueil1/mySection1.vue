<template>
  <div>

    
      <div class="aPropos">
          <h1>A propos de nous</h1>
          <p>Fit-Time vous propose une nouvelle façon de vous entrainer, vous aurez la possibilité de faire des cours en ligne depuis votre salon, nous vous offrons le choix entre des cours avec uniquement des personnes à distance ou de vous mélanger avec des personnes suivant le cours en salle ou même de faire un cours personnalisé uniquement avec votre coach à distance.
Ce n’est pas tout vous pourrez également « commander » votre coach à domicile via notre site internet. <br>
Trouver également un partenaire d’entrainement avec notre système d’entre aide avec les autres utilisateurs de nos salles.
</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "mySection1",
  data() {
    return {
      abonnements: {},
     
    };
  },

};
</script>

<style>

.aPropos{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.aPropos h1 {
    font-family: roboto;
    color: #001a6d;
    margin: 50px 0px;
}

.aPropos p{
    text-align: center;
    font-family: arial;
    width: 70%;
    font-size: 20px
}








</style>
