import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
export default class NavToObjectPages extends NavigationMixin(LightningElement) {

    clickhandler(){
        this[NavigationMixin.Navigate]({    
            type: "standard__objectPage",
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: "home"
            }
        })
    }

    clickhandler1(){
        this[NavigationMixin.Navigate]({
            type:"standard__objectPage",
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }

    clickhandler2(){
        const fieldsvalues=encodeDefaultFieldValues({
            FirstName:'shubham',
            LastName:'teotia'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues:fieldsvalues
            }
        })
    }
}