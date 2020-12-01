<template>
    <div>
        <myNavbar/>
        <coursCollectif/>
        <myFooter/>

    </div>
</template>
<script>

import myNavbar from '../components/myNavbar'
import coursCollectif from '../components/coursCollectif'
import myFooter from '../components/myFooter'

export default {
    name:"pageAccueil",


    components:{
        myNavbar,
        coursCollectif,
        myFooter,
    }
}
</script>
<style>

</style>