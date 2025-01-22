<template>
    <nav class="navbar">
      <div class="container">
        <a href="/" class="logo">Recipe Generator</a>
        <ul class="nav-links">
          <li><a href="/">Sākums</a></li>
          <li><a href="/Receptes">Receptes</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    </nav>
</template>
  
<script>
  export default {
    name: "Navbar",
  };
</script>
  
<style scoped>
  .navbar {
    background-color: #333;
    color: white;
    padding: 1rem 0;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .nav-links li {
    display: inline;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
  }
  
  .nav-links a:hover {
    color: #f4a261;
  }
</style>
  