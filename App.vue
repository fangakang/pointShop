<template>
  <div id="app">
    <router-view/>
    <success v-if="successModal.show"></success>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import success from '@/components/public/success'
export default {
    components:{success},
    name: 'App',
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters({
            successModal:'successModal'
        })
    }


}
</script>

<style>
  div{
    /*box-sizing: border-box;*/
  }
  body{
    background: #efefef;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
