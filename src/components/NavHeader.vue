<template>
  <div id="nav">
    <div class="wrapper">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/img/djm-logo.png" alt="CloudFest Madrid Logo">
        </router-link>
      </div>
      <div class="items">
        <ul>
          <li v-for="(link, index) in navLinks" :key="index">
            <router-link :to="link.to"> {{ link.displayName }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NavHeader',
    data() {
      return {
        navLinks: [
          { displayName: 'Home', to: '/' },
          { displayName: 'Tickets', to: '/tickets' },
          { displayName: 'C4P', to: '/c4p' },
          { displayName: 'Code of Conduct', to: '/coc' },
        ],
      };
    },
  };
</script>

<style lang="stylus" scoped>

  .wrapper
    display flex
    justify-content space-between

  #nav
    padding 10px 20px
    background-color #fafafa

    .logo
      img
        height 40px

    .items
      display flex
      align-items center
    ul
      margin-bottom 0
      padding-left 0
    li
      display inline-block
      list-style none
      margin-left 20px
      /*font-size 22px*/
      a
        font-weight bold
        color #3F51B5
        transition: all 0.2s ease
        &:hover
          text-decoration none
          border-bottom 3px solid #ccc
        &.router-link-exact-active
          color #3F51B5
          border-bottom 3px solid #ccc

</style>
