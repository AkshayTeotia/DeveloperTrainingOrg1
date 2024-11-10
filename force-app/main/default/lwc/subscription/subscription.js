import CountNumber from '@salesforce/messageChannel/CountNumber__c';
import { MessageContext,subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';

export default class Subscription extends LightningElement {

   @wire(MessageContext) messageContext;


    name='';
    subscribtion=null;
    connectedCallback(){
        this.handleSubscription();

    }

    disconnectedCallback(){

        this.handleUnsubscription();

    }

    handleSubscription(){

        if(!this.subscribtion){

            this.subscribtion=subscribe(this.messageContext,CountNumber,
                (val)=>{
                    this.name=val.name;

                });

        }
        

    }

    handleUnsubscription(){

        unsubscribe(this.subscribtion);
        this.subscribtion;;

    }

    

}