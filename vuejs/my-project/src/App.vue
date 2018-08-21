<template>
  <div id="app">
    <MenuBar></MenuBar>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar';
import semantic from '../node_modules/semantic-ui-css'

export default {
  name: 'app',
  components: {semantic,MenuBar}
}
</script>

<style>
</style>
