class SmartHome {
    constructor() {
        this.lighting = false;
        this.alarm = false;
        this.heating = false;
        this.sewage = false;
    }

    toggleLight() {
        this.lighting = !this.lighting;
        const lightBulb = document.getElementById('light-bulb');
        lightBulb.style.backgroundImage = this.lighting ? 'url(light-bulb-on.png)' : 'url(light-bulb.png)';
    }

    toggleAlarm() {
        this.alarm = !this.alarm;
        const alarmLight = document.getElementById('alarm-light');
        alarmLight.style.backgroundImage = this.alarm ? 'url(alarm-on.png)' : 'url(alarm.png)';
    }

    toggleHeating() {
        this.heating = !this.heating;
        const heatingIcon = document.getElementById('heating-icon');
        heatingIcon.style.backgroundImage = this.heating ? 'url(heating-on.png)' : 'url(heating.png)';
    }

    checkSewage() {
        this.sewage = !this.sewage;
        const sewageIcon = document.getElementById('sewage-icon');
        sewageIcon.style.backgroundImage = this.sewage ? 'url(sewage-warning.png)' : 'url(sewage.png)';
    }
}

const smartHome = new SmartHome();

const lightBtn = document.getElementById('light-btn');
const alarmBtn = document.getElementById('alarm-btn');
const heatingBtn = document.getElementById('heating-btn');
const sewageBtn = document.getElementById('sewage-btn');

lightBtn.addEventListener('click', () => smartHome.toggleLight());
alarmBtn.addEventListener('click', () => smartHome.toggleAlarm());
heatingBtn.addEventListener('click', () => smartHome.toggleHeating());
sewageBtn.addEventListener('click', () => smartHome.checkSewage());
