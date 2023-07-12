    function setClock() {
            // Current time
            let now = new Date();
            let seconds = now.getSeconds();
            let minutes = now.getMinutes();
            let hours = now.getHours();
    
            // Angle calculation
            let secondAngle = (seconds / 60) * 360;
            let minuteAngle = (minutes / 60) * 360;
            let hourAngle = ((hours % 12)+ (minutes / 60)) * (360 / 12);
    
            // Perform further modifications on the element as update its content or style
            let secHand = document.getElementById('secondHand');
            let minHand = document.getElementById('minuteHand');
            let hHand = document.getElementById('hourHand');
    
            // Style
            secHand.style.transform = `rotate(${secondAngle}deg)`;
            minHand.style.transform = `rotate(${minuteAngle}deg)`;
            hHand.style.transform = `rotate(${hourAngle}deg)`;
        
        }
    setInterval(setClock, 1000);


    