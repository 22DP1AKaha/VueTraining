<template>
    <div id="app">
      <Navbar />
      <!-- Other components or content can go here -->
    </div>
</template>
  
<script>
  // Import the Navbar component
  import Navbar from '../components/NavBar.vue'; // Update path if it's inside src/components

  
  export default {
    name: 'Home',
    components: {
      Navbar, // Register the Navbar component
    },
  };
</script>
  