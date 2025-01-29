<template>
    <div>
      <Navbar />
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '../components/NavBar.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'Receptes',
    components: {
      Navbar,
      Footer,
    },
  };
  </script>
  
  <style>
  /* Your styles here */
  </style>
  