import { LightningElement, wire } from 'lwc';
import {getRecordCreateDefaults } from 'lightning/uiRecordApi';
import Account from '@salesforce/schema/Account';

export default class GetObjectCreateDefaultDemo extends LightningElement {

    tableheader=[];
    tablerows=[];

    @wire(getRecordCreateDefaults,{objectApiName:Account})
    wriedRecordDefault({error,data}){
        if(data){
            console.log(data);
            const {fields}=data.objectInfos.Account;
            this.tableheader=["apiName","datatype","label","length","required"];
            this.tablerows=Object.keys(fields).map((items)=>{
                let vals=fields[items];
                const{apiName,datatype,label,length,required}=vals;
                return {apiName,datatype,label,length,required}

            })
            // console.log(JSON.stringify(this.tablerows));
            // console.log(JSON.stringify(this.tableheader));
           
        }
        else if(error){
            console.log(error);
        }
    }

    
}