import { LightningElement,wire } from 'lwc';

import Account from '@salesforce/schema/Account';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';

export default class GetObjectInfoDemo extends LightningElement {

    Acc_records;
    errors;
    @wire(getObjectInfo,
        {objectApiName:Account})
        wiredAccount({error,data}){
            if(data){
                this.Acc_records=data.defaultRecordTypeId;
                
                
                this.errors=null;

            }
            else if(error){
                this.errors=error;
                
                this.Acc_records=null;
            }
        }


}