<!-- Please remove this file from your project -->
<template>
  <div>
    {{users}}
    <ul>
      <li class="white">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'NuxtTutorial',
  computed:{
    ...mapState(['users'])
  },
  methods: {
    ...mapActions(['asyncData'])
  },
  mounted(){
    this.asyncData()
  }
}
</script>
<style lang="scss">
  .white {
    color: white;
  }
</style>
