<template>
  <div>
    <espace1
      v-show="espace1"
      v-on:espacedeux="set($event)"
      v-on:espacetrois="setset($event)"
      v-on:espacequatre="setsetset($event)"
      :adherents="adherent"
    />
    <espace2
      v-show="espace2"
      v-on:espaceun="setdeux($event)"
      v-on:espacetrois="setsetdeux($event)"
      v-on:espacequatre="setsetsetdeux($event)"
    />
    <espace3
      v-show="espace3"
      v-on:espaceun="settrois($event)"
      v-on:espacedeux="setsettrois($event)"
      v-on:espacequatre="setsetsettrois($event)"
      :adherents="adherent"
    />
    <espace4
      v-show="espace4"
      v-on:espaceun="setquatre($event)"
      v-on:espacedeux="setsetquatre($event)"
      v-on:espacetrois="setsetsetquatre($event)"
      :adherents="adherent[0].Programmes"
    />
  </div>
</template>
<script>
import espace1 from "../components/espaceAdhérent/espace1";
import espace2 from "../components/espaceAdhérent/espace2";
import espace3 from "../components/espaceAdhérent/espace3";
import espace4 from "../components/espaceAdhérent/espace4";

export default {
  name: "Espace",

  data() {
    return {
      espace1: true,
      espace2: false,
      espace3: false,
      espace4: false,
      espaces: [],
      adherent: "",
      programme: {},
    };
  },

  components: {
    espace1,
    espace2,
    espace3,
    espace4,
  },
  methods: {
    /*  -------pour component espace 1 ----- */
    set: function(v) {
      this.espace1 = v;
      this.espace2 = true;
      this.espace3 = false;
      this.espace4 = false;
    },
    setset: function(v) {
      this.espace1 = v;
      this.espace2 = false;
      this.espace3 = true;
      this.espace4 = false;
    },
    setsetset: function(v) {
      this.espace1 = v;
      this.espace2 = false;
      this.espace3 = false;
      this.espace4 = true;
    },

    /*  -------pour component espace 2 ----- */

    setdeux: function(v) {
      this.espace1 = true;
      this.espace2 = v;
      this.espace3 = false;
      this.espace4 = false;
    },
    setsetdeux: function(v) {
      this.espace1 = false;
      this.espace2 = v;
      this.espace3 = true;
      this.espace4 = false;
    },
    setsetsetdeux: function(v) {
      this.espace1 = false;
      this.espace2 = v;
      this.espace3 = false;
      this.espace4 = true;
    },

    /*  -------pour component espace 3 ----- */

    settrois: function(v) {
      this.espace1 = true;
      this.espace2 = false;
      this.espace3 = v;
      this.espace4 = false;
    },
    setsettrois: function(v) {
      this.espace1 = false;
      this.espace2 = true;
      this.espace3 = v;
      this.espace4 = false;
    },
    setsetsettrois: function(v) {
      this.espace1 = false;
      this.espace2 = false;
      this.espace3 = v;
      this.espace4 = true;
    },

    /*  -------pour component espace 4 ----- */

    setquatre: function(v) {
      this.espace1 = true;
      this.espace2 = false;
      this.espace3 = false;
      this.espace4 = v;
    },
    setsetquatre: function(v) {
      this.espace1 = false;
      this.espace2 = true;
      this.espace3 = false;
      this.espace4 = v;
    },
    setsetsetquatre: function(v) {
      this.espace1 = false;
      this.espace2 = false;
      this.espace3 = true;
      this.espace4 = v;
    },
  },

  created() {
    this.axios
      .get("http://localhost:3000/adherent/getById/" + this.$route.params.id)
      .then((res) => {
        console.log(res);
        console.log(res.data.adherent);
        this.adherent = res.data.adherent;
        this.programme = this.adherent[0].Programme;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>
<style></style>
