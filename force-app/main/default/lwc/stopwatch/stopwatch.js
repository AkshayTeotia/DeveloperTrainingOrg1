import { LightningElement } from 'lwc';

export default class Stopwatch extends LightningElement {

    counter = 0;
    timer = 0;
    timerref = null;
    

    actionhandler(event) {
        const label = event.target.label;
        if (label === 'start') {
            this.settimer();
        } else if (label === 'stop') {
            window.clearInterval(this.timerref)
            window.localStorage.removeItem('starttimer') 
        } else if (label === 'reset') {
            this.timer = 0;
            this.counter = 0;
            window.clearInterval(this.timerref);
            window.localStorage.removeItem('startimer');
        }
    }

    settimer() {
        const starttime = new Date(window.localStorage.getItem("startimer") || this.starttimerhandler());

        this.timerref = setInterval(() => {
            const timediff = new Date().getTime() - starttime.getTime();
            this.timer = this.secondToHms(timediff / 1000);
        }, 1000);
    }

    starttimerhandler() {
        const currenttime = new Date();
        window.localStorage.setItem('startimer', currenttime); 
        return currenttime;
    }

    secondToHms(d) {
        d = Number(d);
        const h = Math.floor(d / 3600);
        const m = Math.floor((d % 3600) / 60);
        const s = Math.floor(d % 60);

        let hdisplay = '';
        let mdisplay = '';
        let sdisplay = '';

        if (h > 0) {
            hdisplay = `${h} ${h === 1 ? 'hour' : 'hours'} `; 
        }

        if (m > 0) {
            mdisplay = `${m} ${m === 1 ? 'minute' : 'minutes'} `; // Add space after the display string
        }

        if (s > 0 || (!h && !m)) { // Ensure seconds are displayed even if hours and minutes are zero
            sdisplay = `${s} ${s === 1 ? 'second' : 'seconds'}`;
        }

        return hdisplay + mdisplay + sdisplay; // Concatenate all parts and return the result
    }

    connectedCallback(){
        if(window.localStorage.getItem("startimer")){
            this.settimer()
        }
    }
}
