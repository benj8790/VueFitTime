<template>
    <div>
        <myNavbar2/>
        <ajouterPoste/>
        <myFooter/>

    </div>
</template>
<script>

import myNavbar2 from '../components/myNavbar2'
import ajouterPoste from '../components/trouverPartenaire/ajouterPoste'
import myFooter from '../components/myFooter'

export default {
    name:"pageajouterposte",

    components:{
        myNavbar2,
        ajouterPoste,
        myFooter,
    }
}
</script>
<style>

</style>