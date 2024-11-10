import { LightningElement, wire, track } from 'lwc';
import getcon from '@salesforce/apex/contactReturningClass.getcon';
import getacc from '@salesforce/apex/contactReturningClass.getacc';

export default class PaginationParent extends LightningElement {
    totalContacts = []; 
    visibleContacts;

    totalAccounts=[];
    visibleAccounts;


    @wire(getcon)
    cons({error,data}){
        if(data){
            this.totalContacts=data;
            console.log(this.totalContacts);
                
        }

    }

    @wire(getacc)
    acc({data,error}){
        if(data){
            this.totalAccounts=data;
            console.log(data);
        }
    }

    updatehandler1(event){
        this.visibleContacts=[...event.detail.records]
    }
    

    updatehandler2(event){
        this.visibleAccounts=[...event.detail.records]
    }
}
