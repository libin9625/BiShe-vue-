<template>
  <div id="app">
    <Header/>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../../components/index/Header'
import Footer from '../../components/index/Footer'
export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>
