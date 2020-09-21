<template>
  <div class="header">

      <div class="BG">
        
        <div class="box1"></div>
          <img class="bg1" src="../../assets/BG_Pattern.png" alt="BG">
          <h1 class="fit">Fit</h1>
          <div class="box2"></div>
          <img class="bg2" src="../../assets/Runner.png" alt="RUN">
          <div class="box3"></div>
          <h1 class="time">Time</h1>

      </div>
      <div class="reseauHeader">
        <img src="../../assets/facebook (1).png" alt="FB">
        <img src="../../assets/twitter (1).png" alt="TT">
        <img src="../../assets/instagram-sketched (1).png" alt="INSTA">
        <img src="../../assets/youtube.png" alt="YTB">
        <img src="../../assets/snapchat (1).png" alt="SNAP">
      </div>

</div>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      formations: {},
     
    };
  },

};
</script>

<style>
.header{
  font-family: roboto;
}
.header .BG{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -100px;

}

.header .BG .bg1{
    z-index: -1;
    transform: translateX(169px);
    width: 415px;
    height: 691px;
    max-width: 509px;
}

.header .BG .bg2{
    width: 350px;
    transform: translateX(-156px);
}

.header .BG h1{
  color: #f7941d;
  font-size: 85px;
}

.header .BG .time{
    transform: translateX(-268px);
    z-index: -1;
}

.header .BG .fit{
    transform: translate(-2px, -66px);
}

.header .box1{
    width: 70px;
    height: 70px;
    background: none;
    border: 2px solid #f7941d;
    transform: rotate(45deg) translate(-398px, 153px);
    position: absolute;
    }

.header .box2{
    width: 70px;
    height: 70px;
    background-color: #f7941d;
    transform: rotate(45deg) translate(-9px, 72px);
    position: absolute;
    }

.header .box3{
    width: 50px;
    height: 50px;
    background: none;
    border: 2px solid #f7941d;
    transform: rotate(45deg) translate(132px, -167px);
    position: absolute;
    }


.reseauHeader img{
  width: 20px;
  margin: 10px 0px;
}

.reseauHeader {
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  margin-top: -200px;

}










</style>
