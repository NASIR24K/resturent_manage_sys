class Precounter {
    constructor() {
      this.targetDate = null;
      this.callback = null;
      this.format = 'Days: {d}, Hours: {h}, Minutes: {m}, Seconds: {s}';
      this.timerInterval = null;
    }
  
    setTargetDate(targetDate) {
      this.targetDate = new Date(targetDate).getTime();
    }
  
    setCallback(callback) {
      this.callback = callback;
    }
  
    setFormat(format) {
      this.format = format;
    }
  
    start() {
      this.updateCountdown();
  
      this.timerInterval = setInterval(() => {
        this.updateCountdown();
      }, 1000);
    }
  
    stop() {
      clearInterval(this.timerInterval);
    }
  
    updateCountdown() {
      const now = new Date().getTime();
      const distance = this.targetDate - now;
  
      if (distance <= 0) {
        this.stop();
  
        if (this.callback) {
          this.callback();
        }
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        const formattedCountdown = this.format
          .replace('{d}', days)
          .replace('{h}', hours)
          .replace('{m}', minutes)
          .replace('{s}', seconds);
  
        document.getElementById('countdown').textContent = formattedCountdown;
      }
    }
  }
  