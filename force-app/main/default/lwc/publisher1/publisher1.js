import CountNumber from '@salesforce/messageChannel/CountNumber__c';
import { MessageContext, publish } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';

export default class Publisher1 extends LightningElement {
    name='';

    @wire(MessageContext) MessageContext;
    inputhandler(event){

        this.name=event.target.value;

    }

    clickhandler(event){
        
        let payload={name:this.name};
        publish(this.MessageContext,CountNumber,payload)
    }
}