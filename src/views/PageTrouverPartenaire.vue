<template>
    <div>
        <myNavbar2/>
        <trouverpartenaire :annonces="annonces"/>
        <myFooter/>

    </div>
</template>
<script>

import myNavbar2 from '../components/myNavbar2'
import trouverpartenaire from '../components/trouverPartenaire/trouverPartenaire'
import myFooter from '../components/myFooter'

export default {
    name:"pagepartenaire",

data(){
        return{
            annonces:[],
            search: ''

        }
    },


   computed: {
    filteredList() {
        if(this.search != ''){
      return this.annonces.filter(item => {
        return item.Ville.toLowerCase().includes(this.search.toLowerCase())
      })
        }
        else{
            return null;
        }
    }
  },
  
   
    
created () {
      this.axios.get("http://localhost:3000/annonce/FindAll")
      .then(res => {
          console.log(res.data);
          this.annonces = res.data.annonce
      })
      .catch(err => {
          alert(err);
      })
  },


    components:{
        myNavbar2,
        trouverpartenaire,
        myFooter,
    }
}
</script>
<style>

</style>