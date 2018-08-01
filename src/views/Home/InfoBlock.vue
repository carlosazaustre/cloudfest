<template>
  <div class="line">
    <div class="container p-4">
      <div class="block-bg">
        <div class="grid-block">
          <div class="item">
            <i class="fa fa-calendar text-primary" aria-hidden="true"></i>
            <span class="lead">
                When?
              </span>
            <h4 class="pt-2 mb-0">December 13th, 2018</h4>
            <h6 class="mt-0">10:00AM</h6>
          </div>
          <div class="item">
            <i class="fa fa-map-marker text-primary" aria-hidden="true"></i>
            <span class="lead">
                Where?
              </span>
            <h4 class="pt-2 mb-0">
              <a target="_blank" class="text-black-link" href="https://goo.gl/maps/Rpti7CssqKU2">
                Campus Madrid, Calle de Manzanares, 2 <small>(Madrid, España)</small>
              </a></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InfoBlock',
  };
</script>

<style lang="stylus" scoped>
  .line
    background-image linear-gradient(to bottom right, #3F51B5, #9088EF)

  /*color white*/
  .block-bg
    padding 20px
    background-color: #fff
    border-radius: 5px

  .grid-block
    display grid
    grid-template-columns 2fr 3fr
    grid-column-gap 10px
  @media (max-width: 500px)
    .grid-block
      grid-template-columns 1fr
      grid-template-rows 1fr 1fr
      grid-gap 5px

  .text-black-link
    color: #2d3e4f
    &:hover
      text-decoration none
      color #999
</style>
