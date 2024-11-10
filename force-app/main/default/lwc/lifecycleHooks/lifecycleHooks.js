import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    greeting='';
    constructor(){
        super();
        this.greeting='Hello';
        console.log("this is Parent Component Constructor");
        console.log('the value of greeting :',this.greeting)
    }
    connectedCallback(){
        console.log('This is Parent Connected Callback');
    }
}