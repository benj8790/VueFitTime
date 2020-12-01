<template>
    <div>
        <myNavbar/>
        
        <aboUn v-show="component1" :salle_de_sports="salle_de_sports" v-on:show="setshow($event)"/>
        <aboDeux v-show="component2" v-on:show="setset($event)" :abonnements="abonnements"/>
        <aboTrois v-show="component3" v-on:show="setsetset($event)"/>
        <aboQuatre v-show="component4" v-on:show="setshow($event)"/>
        <myFooter/>

    </div>
</template>
<script>


import myNavbar from '../components/myNavbar'
import aboUn from '../components/Abonnement/AboUn'
import aboDeux from '../components/Abonnement/AboDeux'
import aboTrois from '../components/Abonnement/AboTrois'
import aboQuatre from '../components/Abonnement/AboQuatre'
import myFooter from '../components/myFooter'

export default {
    name:"Abonnement",

data(){
    return{
        component1: true,
        component2: false,
        component3: false,
        component4: false,
        myNavbar: true,
        myFooter: true,
        salle_de_sports:[],
        search: '',
        abonnements:{}
    }
},

    components:{
        aboUn,
        aboDeux,
        aboTrois,
        aboQuatre,
        myNavbar,
        myFooter,
    },
    methods:{
       
        setshow: function(v) {
      this.component1 = v; this.component2 = true;
    },
        setset: function(v) {
      this.component2 = v; this.component3 = true;
    },
        setsetset: function(v) {
      this.component3 = v; this.component4 = true;
    },
    },

    

   
    
created () {
    this.axios.get("http://localhost:3000/salle_de_sport/FindAll")
      .then(res => {
          console.log(res.data);
          this.salle_de_sports = res.data.salle_de_sport
      })
      .catch(err => {
          alert(err);
      })
      this.axios.get("http://localhost:3000/abonnement/FindAll")
      .then(res => {
          console.log(res.data);
          this.abonnements = res.data.abonnement
      })
      .catch(err => {
          alert(err);
      })
  },
}
</script>
<style>

</style>