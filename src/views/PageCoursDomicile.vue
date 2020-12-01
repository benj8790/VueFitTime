<template>
    <div>
        <myNavbar2/>
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

    components:{
        myNavbar2,
        coursdomicile,
        myFooter,
    }
}
</script>
<style>

</style>