import { LightningElement } from 'lwc';

export default class GetterMethod extends LightningElement {

    colorstate="OFF"
    clickhandler(event){
        console.log(event.target.innerText);
        this.colorstate=event.target.innerText;
    }

    get colorclass(){
        if(this.colorstate=="ON"){
            return "blue";
        }
        else{
            return "red";
        }
    }
}