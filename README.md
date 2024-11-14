<!DOCTYPE html>
<html>
    <head>
        <title>The RNG Project</title>
        <script>
            let rolled = "Basic - 1/2";
            function buttonClicked() {
                randint = Math.floor(Math.random() * 101);
                if (randint <= 50) {
                    rolled = "Basic - 1/2";
                } else if (randint <=60) {
                    rolled = "Rare - 1/10";
                } else if (randint <= 67) {
                    rolled = "Epic - 1/15";
                } else if (randint <= 71) {
                    rolled = "LEGENDARY - 1/50";
                } else if(randint <= 72) {
                    rolled ="𝓕𝓪𝓲𝓽𝓱 - 1/100";
                } else {
                    rolled = randint;
                } 
                
                var resultstr = "You rolled: " + rolled;
               const result = document.getElementById("result");
               result.innerText = resultstr;
            }
        </script>
    </head>
    <body>
        <h1>The RNG Project</h1>
        <input type="button" onclick="buttonClicked()" value="Roll">
        <h2 id="result"></h2>
    </body>
</html>
