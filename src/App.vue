<template>
    <div>
      <Navbar />
      <router-view /> <!-- ✅ This will load Home.vue or Receptes.vue -->
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  
  export default {
    components: {
      Navbar,
      Footer,
    },
  };
</script>
  