<template>
    <div>
        <myNavbar2 :adherents="adherent" />
        <coursdomicile/>
        <myFooter/>

    </div>
</template>
<script>

import myNavbar2 from '../components/myNavbar2'
import coursdomicile from '../components/coursDomicile'
import myFooter from '../components/myFooter'

export default {
    name:"pageAccueil",

    data() {
        return {
            adherent: ""
        }
    },

    components:{
        myNavbar2,
        coursdomicile,
        myFooter,
    },


    created (){
                  this.axios
      .get("http://localhost:3000/adherent/getById/" + this.$route.params.id)
      .then((res) => {
        console.log(res);
        console.log(res.data.adherent);
        this.adherent = res.data.adherent
        this.programme = this.adherent[0].Programme
       
      })
      .catch((err) => {
        alert(err);
      });
    }
}
</script>
<style>

</style>