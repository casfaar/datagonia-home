<script lang="ts">
  //This is a page that shows an image as the background, and has a pomodoro timer in the middle, styled with a transparent glass dark mode theme with nice fonts.
  //The pomodoro is 25min work and 5min break, and it has a 15min break every 4 pomodoros.

import patamountains from '$lib/patamountains.svg';
</script>
<body>
  <div class="svg-container">
    <img src={patamountains} alt="patamountains" />
  </div>
</body>


<style>
  
  body {
            background-color: black;
            margin: 0;
            padding: 0;
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
        
        .rows {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
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
            position: fixed;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: #ffffff;
        }
        p {
            color: #ffffff;
        }
</style>