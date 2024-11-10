import { LightningElement } from 'lwc';

export default class SpinnerDemo extends LightningElement {

    one=false;
    two=false;
    three=false;

    
    spinnerhandler(event){
        console.log(event.target);
        const {name} =event.target
        this[name]=true;
        let timer = window.setTimeout(()=>{ 
            this[name] = false
            window.clearTimeout(timer)
        }, 2000)
    }
}