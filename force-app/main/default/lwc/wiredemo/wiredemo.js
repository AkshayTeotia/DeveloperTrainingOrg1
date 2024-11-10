import { LightningElement,wire } from 'lwc';
import Account_Object from '@salesforce/schema/Account';
import { getListInfoByName } from 'lightning/uiListsApi';

export default class Wiredemo extends LightningElement {

    @wire(getListInfoByName,{
        objectApiName: Account_Object, listViewApiName: "AllAccounts"})
    wiredAccounts({error, data})
    {
        if(data){
            console.clear();
            console.log(data.records.records);
        }
        else if(error){
            
            console.log(error);
        }
    }


}