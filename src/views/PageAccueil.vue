<template>
    <div>
        <myNavbar/>
        <myHeader/>
        <mySetion1/>
        <mySetion2 :abonnements="abonnements"/>

    </div>
</template>
<script>

import myNavbar from '../components/myNavbar'
import myHeader from '../components/pageAccueil1/myHeader'
import mySetion1 from '../components/pageAccueil1/mySection1'
import mySetion2 from '../components/pageAccueil1/mySection2'

export default {
    name:"pageAccueil",
    data(){
        return{
            abonnements:{}
        }
    },
created () {
      this.axios.get("http://localhost:3000/abonnement/FindAll")
      .then(res => {
          console.log(res.data);
          this.abonnements = res.data.abonnement
      })
      .catch(err => {
          alert(err);
      })
  },


    components:{
        myNavbar,
        myHeader,
        mySetion1,
        mySetion2,
    }
}
</script>
<style>

</style>