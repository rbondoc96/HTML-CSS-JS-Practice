class Clock {
    constructor() {
        this.hourHand = document.querySelector(".hour-hand");
        this.minuteHand = document.querySelector(".min-hand");
        this.secondHand = document.querySelector(".second-hand");
    }

    start() {
        setInterval(this.setDate.bind(this), 1000);
    }

    setDate() {
        const now = new Date();

        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + 90;
        this.hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + 90;
        this.minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
        
        
        const secs = now.getSeconds();
        const secsDegrees = ((secs / 60) * 360) + 90; /* 90deg offset to account for CSS offset */
        this.secondHand.style.transform = `rotate(${secsDegrees}deg)`;        
    }
}

const clock = new Clock();
clock.start();