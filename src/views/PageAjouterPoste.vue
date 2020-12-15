<template>
    <div>
        <myNavbar2 :adherents="adherent"/>
        <ajouterPoste :adherents="adherent"/>
        <myFooter/>

    </div>
</template>
<script>

import myNavbar2 from '../components/myNavbar2'
import ajouterPoste from '../components/trouverPartenaire/ajouterPoste'
import myFooter from '../components/myFooter'

export default {
    name:"pageajouterposte",

data(){
        return{
            adherent: "",

        }  
    },

    components:{
        myNavbar2,
        ajouterPoste,
        myFooter,
    },



      created (){
          this.axios
      .get("http://localhost:3000/adherent/getById/" + this.$route.params.id)
      .then((res) => {
        console.log(res);
        console.log(res.data.adherent);
        this.adherent = res.data.adherent
       
      })
      .catch((err) => {
        alert(err);
      });
  }, 
}
</script>
<style>

</style>