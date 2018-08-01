<template>
  <section class="about">
    <div class="container">
      <div class="bg shadow">
        <div class="grid-block">
          <div class="item-1">
            <div class="group">
              <h4>CloudFest Madrid 2018</h4>
              <p>
                Join us a two-full days of talks, and breakout sessions from the Google Cloud Spain
                team, Googlers, GDEs and industry proffesionals.
              </p>
            </div>
            <div class="group">
              <h4 class="mt-4">But.. ¿What is a DevFest? 🤔</h4>
              <p class="mb-0">
                DevFest events cover multiple product areas such as Android, Firebase,
                Google Cloud Platform, Google Assistant, Flutter, machine learning
                with TensorFlow, and Mobile Web.
              </p>
            </div>

            <!--<div class="d-flex justify-content-end">-->
            <!--<router-link to="/about" class="btn btn-primary btn-sm btn-outline-primary" role="button">-->
            <!--Ver más-->
            <!--</router-link>-->
            <!--</div>-->

          </div>
          <div class="item-2"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'AboutBlock',
  };
</script>

<style lang="stylus" scoped>
  section.about
    background-image linear-gradient(to bottom right, #3F51B5, #9088EF)
    padding 40px 0
    .bg
      background-color white;
      border-radius 5px
      .grid-block
        display grid
        grid-template-columns 2fr 1fr
        .item-1
          padding 25px
        .item-2
          background: url("../../assets/img/campus-madrid.jpg") center center no-repeat
          -webkit-background-size: cover
          background-size: cover
          -webkit-border-top-right-radius 5px
          -webkit-border-bottom-right-radius 5px
          -moz-border-radius-topright 5px
          -moz-border-radius-bottomright 5px
          border-top-right-radius 5px
          border-bottom-right-radius 5px
      @media (max-width: 500px)
        .grid-block
          grid-template-columns 1fr
          grid-template-rows 1fr 200px
          .item-2
            -webkit-background-size: 200px
            background-size: 100% 200px
</style>
