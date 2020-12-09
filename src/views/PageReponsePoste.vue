<template>
    <div>
        <myNavbar2/>
        <reponsePoste/>
        <myFooter/>

    </div>
</template>
<script>

import myNavbar2 from '../components/myNavbar2'
import reponsePoste from '../components/trouverPartenaire/reponsePoste'
import myFooter from '../components/myFooter'

export default {
    name:"pagereponseposte",

    components:{
        myNavbar2,
        reponsePoste,
        myFooter,
    }
}
</script>
<style>



</style>