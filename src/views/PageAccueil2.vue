<template>
    <div>
        <myNavbar2 :adherents="adherent"/>
        <myHeader/>
        <mySection11 :annonces="annonces"/>
        <mySection22/>

        <mySetion3/>
        <myFooter/>

    </div>
</template>
<script>

import myNavbar2 from '../components/myNavbar2'
import myHeader from '../components/pageAccueil1/myHeader'
import mySection11 from '../components/pageAccueil2/mySection11'
import mySection22 from '../components/pageAccueil2/mySection22'
import mySetion3 from '../components/pageAccueil1/mySection3'
import myFooter from '../components/myFooter'

export default {
    name:"pageAccueil2",
    data(){
        return{
          adherent: "",
      annonces: {},
        }
    },



    components:{
        myNavbar2,
        myHeader,
        mySection11,
        mySection22,
        mySetion3,
        myFooter,
    },

  created() {
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

          this.axios
      .get("http://localhost:3000/annonce/findLimit")
      .then((res) => {
        console.log(res);
        this.annonces = res.data.annonce;
      })
      .catch((err) => {
        alert(err);
      });
      this.adherent = this.adherents[0];
  },


}
</script>
<style>

</style>