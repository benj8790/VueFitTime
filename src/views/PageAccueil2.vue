<template>
    <div>
        <myNavbar2/>
        <myHeader/>
        <mySection22/>

        <mySetion3/>
        <myFooter/>

    </div>
</template>
<script>

import myNavbar2 from '../components/myNavbar2'
import myHeader from '../components/pageAccueil1/myHeader'
import mySection22 from '../components/pageAccueil2/mySection22'
import mySetion3 from '../components/pageAccueil1/mySection3'
import myFooter from '../components/myFooter'

export default {
    name:"pageAccueil2",
    data(){
        return{
        }
    },



    components:{
        myNavbar2,
        myHeader,
        mySection22,
        mySetion3,
        myFooter,
    }
}
</script>
<style>

</style>