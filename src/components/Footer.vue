<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Logo and Company Name -->
        <div class="logo">
          <img src="/foodyML_logo.png" alt="FoodyML Logo" />
          <h1>FOODYML</h1>
        </div>
        
        <!-- Footer Text -->
        <p class="footer-text">&copy; 2025 FOODYML. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
<style scoped>
    *{
    font-family: "Poppins", sans-serif; 
    }

  .footer {
    background-color: white; /* White background */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow to differentiate from the page */
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    height: 35px;
    width: auto;
    margin-right: 10px;
  }
  
  .logo h1 {
    font-size: 1.1rem;
    background: linear-gradient(to right, #b927fc 0%, #2c64fc 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .footer-text {
    font-size: 0.9rem;
    color: #555; /* A subtle gray for the text */
  }
</style>
  