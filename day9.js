               
            var result = [];

            function chart(){
            var button='';
            for(var i=1; i<91; i++){
                button += "<button id='" + i +"'>" + i + "</button>"; // <button id=1...>
            }
            return button;
            }
            setInterval(
            function genRandomNumber(){

            var num = Math.floor(Math.random() * 90 + 1);
            for(var i = 0; i < result.length; i++){
                if(num == result[i]){
                num = Math.floor(Math.random() * 90 + 1);
                i = 0;
                }
            }
            document.getElementById("number").innerHTML = num;
            document.getElementById(num).style.backgroundColor = "green";
            document.getElementById(num).style.color = "white";
            
            // This line of code does not work because it can coloured only one cell which is selected using id.
            // I want to change all cell background color which has generated number.
            const x = document.getElementById("td1");
            if(num == x.innerHTML.valueOf()){
                x.style.backgroundColor = "green"
            }
            
           
            result.push(num);
            // const output = document.getElementById("output1").innerHTML = result;
    
            }, 1000);

            
            document.getElementById("buttons").innerHTML = chart();