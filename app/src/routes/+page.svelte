<script lang="ts">

  //This is a page that shows an image as the background, and has a pomodoro timer in the middle, styled with a transparent glass dark mode theme with nice fonts.
  //The pomodoro is 25min work and 5min break, and it has a 15min break every 4 pomodoros.

import patamountains from '$lib/patamountains.svg';
</script>
<body>
  <div class="svg-container">
    <img src={patamountains} alt="patamountains" />
  </div>



  <div class="content">
    <p>Services:</p>
    <div class="container">
      <div class="card">
        <h2>Focus</h2>
        <p>Klassisk musikk, pomodoro timer</p>
        <a href="https://focus.datagonia.no">Se</a>
      </div>
      <div class="card">
        <h2>Kompendier</h2>
        <p>Mathilde Haugums kompendier</p>
        <a href="https://kompendier.datagonia.no">Se</a>
      </div>

      <div class="card">
        <h2>Anfa Portal</h2>
        <p>Privat</p>
        <a href="https://portal.faarlund.no/portal">Se</a>
      </div>

    
    
    </div>  
</div>

<div class="created-by">
    Casper Faarlund 2023
</div>

</body>


<style>
  
  body {
            background-color: black;
            margin: 0;
            padding: 0;
            font-family: "Gill Sans", sans-serif;
        }
        .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
        
        .svg-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: -1;
        }
        img {
            width: 100%;
            height: auto;
        }
        
        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            margin-top: 30%;
        }
        
    
        .button {
            background-color: #ffffff;
            color: #000000;
            padding: 10px 20px;
            margin: 0 10px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
        }
        
        .created-by {
            position: absolute;
            padding: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: #ffffff;
            background-color: #1e1e1e5a;
            text-align: center;
            width: 100%;
        }
        p {
            color: #ffffff;
        }



        .card {
       
       border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.19);
background: linear-gradient(243deg, rgba(255, 255, 255, 0.10) 17.15%, rgba(255, 255, 255, 0.00) 112.12%);
box-shadow: 0px 3.299px 13.939px 0px rgba(0, 0, 0, 0.13);
backdrop-filter: blur(41.238670349121094px);
               box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
               margin: 10px;
               padding: 20px;
               max-width: 300px;
               text-align: center;
               transition: transform 0.3s ease;
             
           
           }
       
           .card:hover {
               transform: translateY(-5px);
           }
       
           .card h2 {
               color: #d0d0d0;
               font-size: 24px;
               margin-bottom: 10px;
           }
       
           .card p {
               color: #c1c1c1;
               font-size: 16px;
               margin-bottom: 20px;
           }
       
           .card a {
               background-color: #b5b5b51a;
               border-radius: 5px;
               color: #ffffff;
               display: inline-block;
               padding: 10px 20px;
               text-decoration: none;
               transition: background-color 0.3s ease;
           }
       
           .card a:hover {
               background-color: #0056b3;
           }
       
           .title {
               text-align: center;
               margin-top: 50px;
           }
       
           .title h1 {
               color: #333333;
               font-size: 36px;
               margin-bottom: 10px;
           }
       
           .title p {
               color: #666666;
               font-size: 18px;
               margin-bottom: 20px;
           }
</style>