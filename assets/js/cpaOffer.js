        //Stayed Time       
        var seconds = 0;
        var el = document.getElementById('txtt');

        function incrementSeconds() {
            seconds += 1;
            el.innerText = Math.floor(seconds / 60)+" (m)"+' : '+Math.floor(seconds % 60)+" (s)";
        }

        var cancel = setInterval(incrementSeconds, 1000);


        function startTime() {
            var datetime = new Date();
            console.log(datetime);
            document.getElementById("txt").textContent = datetime;
            var today = new Date();
            var time = today.getHours() + "  (h) " + ": " + today.getMinutes() + " (m) " + ": " + today.getSeconds() + " (s) ";
            document.getElementById("demo1").innerHTML = time;
        }

        const hour = new Date().toTimeString().slice(9);
        let greeting;
        if (hour == "GMT+0530 (India Standard Time)") {
            document.getElementById("demo").innerHTML = "";
        }
