<template>
  <footer class="bg-light mb-0">
    <div class="container">
      <div class="links d-flex justify-content-center">
        <ul class="list-inline">
          <li class="list-inline-item" v-for="(link, i) in linksList" :key="i">
            <a :href="link.to">{{ link.displayName }}</a>
          </li>
        </ul>
      </div>
      <div class="credit text-center">
        <div class="block">
          <p class="mb-0 text-muted">
            <i class="fa fa-code text-primary" aria-hidden="true"></i>
            Based in <b><a href="https://github.com/DevJourneyMadrid/june-18">Dev Journey Madrid Template</a></b>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterLinks',
    data() {
      return {
        info: {},
        linksList: [
          { displayName: 'GDG Spain', to: 'https://gdg.es' },
          { displayName: 'DevFest Season 2018', to: 'https://developers.google.com/events/devfest/' },
          { displayName: 'Google Cloud Developer Communities', to: 'https://cloud.google.com/community/meetups/' },
        ],
      };
    },
  };
</script>

<style lang="stylus" scoped>
  footer
    border-top 8px solid #3F51B5
    min-height 150px
    padding-top 20px
    padding-bottom 20px

  .links
    a
      color: #3F51B5
      font-weight bolder
      margin-right 15px

  .social-links
    a.github
      color: #24292f
    a.twitter
      color #1da1f3
    a.linkedin
      color #0077b5
    a.website
      color: #41b883

</style>
