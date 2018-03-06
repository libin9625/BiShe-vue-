<template>
  <div id="app">
    <Header/>
    <IndexBody/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import IndexBody from './components/IndexBody'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header, IndexBody,Footer
  }
}
</script>
