<template>
    <div>
      <Navbar />
      <router-view /> <!-- ✅ This will load Home.vue or Receptes.vue -->
      <Footer />
    </div>
  </template>
  
  <script>
  import Footer from './components/Footer.vue';
import Navbar from './components/NavBar.vue';
  
  export default {
    components: {
      Navbar,
      Footer,
    },
  };
</script>
  