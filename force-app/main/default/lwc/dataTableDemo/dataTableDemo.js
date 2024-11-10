import { LightningElement,wire} from 'lwc';
import getcon from '@salesforce/apex/contactReturningClass.getcon';
import { updateRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
const Column=[
    {label:"First Name",fieldName:'FirstName',editable:true}, 
    {label:"Last Name",fieldName:'LastName',editable:true}, 
    {label:"Email",fieldName:'Email',editable:true,type: 'email'}
]


export default class DataTableDemo extends LightningElement {

    Columns=Column;
    draftValues=[];
    @wire(getcon) wcon;
    savehandler(event){
        console.log(event);
        const inputRecords=event.detail.draftValues.slice().map((draft)=>{
            const fields=Object.assign({},draft)
            return {fields}
        });
        console.log(inputRecords);
        const promises = inputRecords.map(recordsinputs=> updateRecord(recordsinputs));
        Promise.all(promises).then((data)=>{
            this.dispatchEvent(new ShowToastEvent({title:'Toast Event ', message:'Hello World',variant:'success'}));
            this.draftValues=[];
            return refreshApex(this.wcon);
        }).catch((error)=>{
            console.log(error);
        })
    }
}