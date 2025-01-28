<template>
    <div id="app">
      <Navbar />
      <!-- Other components or content can go here -->
      <Footer />
    </div>
</template>
  
<script>
  // Import the components
  import Navbar from '../components/NavBar.vue';
  import Footer from '@/components/Footer.vue';

  
  export default {
    name: 'Home',
    components: {
      Navbar, 
      Footer,
    },
  };
</script>

<style scoped>
  body {
    margin: 0;
  }
</style>
  