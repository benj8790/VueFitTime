<template>
  <div>


  <div>

       <div class="row">
      <div class="card" v-for="abonnement in abonnements" :key="abonnement.Id">
        <div class="card-body">
             <h5 class="card-title">{{abonnement.Engagement}}</h5>
             <h5 class="card-title">{{abonnement.Nom}}</h5>
            <p class="card-text">{{abonnement.Condition}}</p>
            <p class="card-text">{{abonnement.Seance_Offerte}}</p>
            <p class="card-text">{{abonnement.Tarif.Tarif_Libre_Acces}}</p>
            <p class="card-text">{{abonnement.Tarif.Tarif_de_Base}}</p>
            <router-link :to="`/detailabonnement/${abonnement.Id}`">
          <a href="#" class="btn btn-candidaté"> Candidaté</a>
        </router-link>     
        </div>
        </div>
      </div>
  </div>


</div>
</template>

<script>
export default {
    name: "mySection2",
    props: ["abonnements"],

  
}
</script>

<style>










</style>
