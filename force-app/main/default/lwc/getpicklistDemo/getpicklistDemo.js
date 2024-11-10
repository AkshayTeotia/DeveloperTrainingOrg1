import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Account_obj from '@salesforce/schema/Account';
import Rating_obj from '@salesforce/schema/Account.Rating';

export default class GetpicklistDemo extends LightningElement {
    @wire(getObjectInfo, { objectApiName: Account_obj })
    objectInfo;

    errors;
    picklistvalues;
    @wire(getPicklistValues, {
        recordTypeId: '$objectInfo.data.defaultRecordTypeId',
        fieldApiName: Rating_obj,
    })
    picklistInfo({error,data}){
        if(data)
        this.picklistvalues=data.values;

        else if(error){

            this.errors=error;
            console.log(this.errors);
        }
        
    };
    
   

}