<template>
  <div id="app">
    <Header/>
    <Nav />
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../../components/index/Header'
import Footer from '../../components/index/Footer'
import Nav from '../../components/index/Nav'
export default {
  name: 'App',
  components: {
    Header, Footer , Nav
  }
}
</script>
