<template>
    <div class="register-page">
      <div class="register-container">
        <!-- Logo -->
        <div class="logo-container">
          <img src="/foodyML_logo.png" alt="FoodyML Logo" />
          <h1>FOODYML</h1>
        </div>
  
        <!-- Registration Form -->
        <form @submit.prevent="handleRegister" class="register-form">
          <div class="input-group">
            <label for="email">E-pasts</label>
            <input type="email" id="email" v-model="email" placeholder="Ievadiet e-pastu" required />
          </div>
  
          <div class="input-group">
            <label for="password">Parole</label>
            <input type="password" id="password" v-model="password" placeholder="Ievadiet paroli" required />
          </div>
  
          <div class="input-group">
            <label for="confirm-password">Apstipriniet paroli</label>
            <input type="password" id="confirm-password" v-model="confirmPassword" placeholder="Apstipriniet paroli" required />
          </div>
  
          <div class="form-actions">
            <button type="submit" class="register-btn">Reģistrēties</button>
          </div>
        </form>
  
        <p class="login-link">
          Jau ir konts? <router-link to="/ienakt">Piesakies</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Registreties",
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      handleRegister() {
        if (this.password !== this.confirmPassword) {
          alert("Paroles nesakrīt!");
          return;
        }
        // Handle the registration logic here (e.g., make an API request)
        console.log("Registering with", this.email, this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    font-family: monospace;
  }
  
  .register-page {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/background.png'); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    height: 100vh;
  }
  
  .register-container {
    background: linear-gradient(135deg, #FFF5E1, #FFE4B5);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  .logo-container {
    margin-bottom: 20px;
  }
  
  .logo-container img {
    height: 50px;
    width: auto;
    margin-bottom: 10px;
  }
  
  h1 {
    font-size: 2rem;
    background: linear-gradient(to right, #b927fc 0%, #2c64fc 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .register-form .input-group {
    margin-bottom: 15px;
  }
  
  .register-form label {
    display: block;
    text-align: left;
    font-size: 1rem;
    margin-bottom: 5px;
  }
  
  .register-form input {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .form-actions {
    margin-top: 15px;
  }
  
  .register-btn {
    width: 100%;
    padding: 12px;
    background-color: #2c64fc;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  .register-btn:hover {
    background-color: #1f4bb7;
  }
  
  .login-link {
    margin-top: 20px;
    font-size: 1rem;
  }
  
  .login-link a {
    color: #2c64fc;
    text-decoration: none;
  }
  
  .login-link a:hover {
    text-decoration: underline;
  }
  </style>
  