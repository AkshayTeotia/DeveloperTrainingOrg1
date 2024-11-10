import { LightningElement,api } from 'lwc';

export default class HooksChild extends LightningElement {
    @api greeting
    
    constructor(){
        super();
        console.log("I am Child Component Constructor");
        console.log("The Value of greeting is :",this.greeting);
    }

    connectedCallback(){
        console.log("This is child Connected Callback");
        console.log("The Value of greeting is :",this.greeting);
    }
}