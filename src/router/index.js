import Vue from 'vue'
import VueRouter from 'vue-router'
import pageAccueil from "../views/PageAccueil.vue"
import pageAccueil2 from "../views/PageAccueil2.vue"
import PagesCoursCollectif from "../views/PagesCoursCollectif.vue"
import trouverMaSalle from "../views/PageTrouverMaSalle.vue"
import detailsalle_de_sport from "../views/Pagedetailsalle_de_sport.vue"
import login from "../views/Login.vue"
import mdpOublie from "../views/MDPoublié.vue"
import abonnement from "../views/PageAbonnement.vue"
import espace from "../views/PageEspaceAdhérent.vue"
import trouverPartenaire from "../views/PageTrouverPartenaire.vue"
import ajouterPoste from "../views/PageAjouterPoste.vue"
import reponsePoste from "../views/PageReponsePoste.vue"
import coursdomicile from "../views/PageCoursDomicile.vue"
import reservationEssaie from "../views/PageReservationFormuleEssaie.vue"



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'pageAccueil',
        component: pageAccueil
    },

    {
        path: '/pageAccueil2/:id',
        name: 'pageAccueil2',
        component: pageAccueil2
    },

    {
        path: '/CoursCollectif',
        name: 'PagesCoursCollectif',
        component: PagesCoursCollectif
    },
    {
        path: '/trouverMaSalle',
        name: 'trouverMaSalle',
        component: trouverMaSalle
    },
    {
        path: '/trouverMaSalle/:id',
        name: 'trouverMaSalle',
        component: trouverMaSalle
    },
    {
        path: '/detailsalle_de_sport/:id',
        name: 'detailsalle_de_sport',
        component: detailsalle_de_sport
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/mdpOublie',
        name: 'mdpOublie',
        component: mdpOublie
    },
    {
        path: '/abonnement',
        name: 'abonnement',
        component: abonnement
    },
    {
        path: '/trouverPartenaire/:id',
        name: 'trouverPartenaire',
        component: trouverPartenaire
    },
    {
        path: '/ajouterPoste/:id',
        name: 'ajouterPoste',
        component: ajouterPoste
    },
    {
        path: '/reponsePoste/:id',
        name: 'reponsePoste',
        component: reponsePoste
    },
    {
        path: '/coursdomicile/:id',
        name: 'coursdomicile',
        component: coursdomicile
    },
    {
        path: '/reservationEssaie',
        name: 'reservationEssaie',
        component: reservationEssaie
    },
    {
        path: '/espace/:id',
        name: 'espace',
        component: espace
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router