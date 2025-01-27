<template>
  <header>
      <nav> 
          <div class="logo">
            <img src="/foodyML_logo.png" alt="Logo" class="logo-img">
          </div>

          <ul class="nav-links">
              <li class="nav-link"><a href="../html/Karte_ar_hover_efektiem.html">Sākums</a></li>
              <li class="nav-link"><a href="#">Receptes</a></li>
          </ul>

          <button class="login-button">
            Login/Register
          </button>
      </nav>    
  </header>
</template>


<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  background-color: #cec2a2;
  padding: 1.875rem; 
  display: flex;
  justify-content: space-between;  /* This ensures the logo and menu are spaced out */
  align-items: center;  /* Vertically align all items in the navbar */
}

.logo-img {
  max-width: 120px;  /* Set a reasonable maximum size for the logo */
  height: auto;
}

.nav-links {
    list-style-type: none;
    margin: 0;
    display: flex;
    border-bottom: solid gray;
}

.nav-link {
    display: inline-block;
    padding: 0.825rem;
    padding-bottom: 2rem;
    margin: 0;
    position: relative;  
}

.nav-link a {
    text-decoration: none;
    color: gray;
    padding: 0.5rem 1rem;
    border-radius: 0.313rem;
    font-size: 1.375rem;
    font-weight: bold;
    position: relative;
    transition: transform 0.3s ease, color 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0; 
    height: 0px; 
    background-color: #0066b2; 
    transition: height 0.3s ease;  
}

.nav-link:hover::after {
    height: 0.313rem; 
}

.nav-link:hover a {
    transform: translateY(-3px); 
}

/* Button styles */
.login-button {
  background-color: #0066b2;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 50px;  /* Makes the button rounded */
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.login-button:hover {
  background-color: #004f8d;
  transform: translateY(-2px);
}

.login-button:focus {
  outline: none;
}
</style>
