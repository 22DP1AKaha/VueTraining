<template>
  <div>
    <div class="card-flexbox">
      <div class="card-container">

        <div class="card">
          <img src="/Burgers.jpg" alt="Photo"><br>
          <h1>Recepšu meklēšana</h1>
          <p>Meklē sev vēlamo recepti.</p><br>
          <a href="/receptes">
            <button class="myBtn">Izmēģināt</button>
          </a>
        </div>

        <div class="card">
          <img src="/Pelmeni.jpg" alt="Photo"><br>
          <h1>Izmēģini mūsu AI</h1>
          <p>Ģenerē receptes ar sev pieejamajiem produktiem.</p><br>
          <a href="/aireceptes">
            <button class="myBtn">Izmēģināt</button>
          </a>
        </div>

      </div> <!-- Close card-container -->
    </div> <!-- Close card-flexbox -->
    
  </div>
    
</template>

<script>
  export default {
    name: 'Home'
  };
</script>

<style scoped>

  .card-flexbox { 
      margin-top: 4.375rem;
  }

  .card-container {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      align-items: flex-start;
      text-align: center;
      gap: 1rem;
      padding: 0.5rem;
      padding-bottom: 1rem;
  }

  .card {
      font-family: monospace;
      padding: 1.5rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      overflow: visible;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-radius: 10px;
      position: relative;
      animation: fadeIn 0.5s ease-in; 
      background: linear-gradient(135deg, #FFF5E1, #FFE4B5);
  }

  .card h1 {
      font-size: 2.5rem;
  }

  .card p {
      font-size: 1rem;
  }

  .card img {
      width: 31.25rem;
      height: 26.75rem;
      object-fit: cover;
      border-radius: 10px;
  }

  .card button {
      padding: 1rem 3rem;
      font-size: 1rem;
      border: none;
      color: white;
      background: black;
      cursor: pointer;
      border-radius: 50px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card button:hover {
      transform: scale(1.1);
  }

  .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

</style>
