<template>
    <div>
        <myNavbar/>
        <myHeader/>
        <mySetion1/>
        <mySetion2 :abonnements="abonnements"/>
        <mySetion3/>
        <myFooter/>

    </div>
</template>
<script>

import myNavbar from '../components/myNavbar'
import myHeader from '../components/pageAccueil1/myHeader'
import mySetion1 from '../components/pageAccueil1/mySection1'
import mySetion2 from '../components/pageAccueil1/mySection2'
import mySetion3 from '../components/pageAccueil1/mySection3'
import myFooter from '../components/myFooter'

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
        mySetion3,
        myFooter,
    }
}
</script>
<style>

</style>