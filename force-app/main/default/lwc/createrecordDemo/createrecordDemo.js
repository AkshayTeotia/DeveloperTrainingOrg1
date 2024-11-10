import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import Account_obj from '@salesforce/schema/Account';
import Name_c from '@salesforce/schema/Account.Name';
import Phone_c from '@salesforce/schema/Account.Phone';
import Type_c from '@salesforce/schema/Account.Type';
import Industry_c from '@salesforce/schema/Account.Industry';
import Name from '@salesforce/schema/Account.Name';


export default class CreaterecordDemo extends LightningElement {

    formfields={
        Name:'',
        Phone:'',
        Type:'',
        Industry:''
    };

    datahandler(event){
        const {value,name}=event.target;
        console.log(value,name);
        this.formfields={...this.formfields,[name]:value};
        console.log(this.formfields.Name);
        
    }

    submithandler(){
        console.clear();
        console.log('submit');
        console.log(this.formfields.Name);
        const fields={};
            fields[Name_c.fieldApiName]=this.formfields.Name;       
            fields[Phone_c.fieldApiName]=this.formfields.Phone;
            fields[Type_c.fieldApiName]=this.formfields.Type;
            fields[Industry_c.fieldApiName]=this.formfields.Industry;
        


        let records={apiName:Account_obj.objectApiName,fields}
        createRecord(records).then((data)=>{
            this.formfields={};
            console.log('Account Created Id is ',JSON.stringify(data.id));
        }).catch(error=>{
            console.log(error);
        })
    }
}