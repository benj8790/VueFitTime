<template>
    <div>
        <myNavbar2/>
        <reservation/>
        <myFooter/>

    </div>
</template>
<script>

import myNavbar2 from '../components/myNavbar2'
import myFooter from '../components/myFooter'
import reservation from '../components/formuleEssaie/reservation'

export default {
    name:"pagereservation",

    components:{
        myNavbar2,
        reservation,
        myFooter
    }
}
</script>
<style>

</style>