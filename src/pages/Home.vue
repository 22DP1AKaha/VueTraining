<template>
    <div id="app">
      <Navbar />
      <!-- Other components or content can go here -->
    </div>
</template>
  
<script>
  // Import the Navbar component
  import Navbar from '../components/NavBar.vue';

  
  export default {
    name: 'Home',
    components: {
      Navbar, // Register the Navbar component
    },
  };
</script>
  