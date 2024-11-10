import { api } from 'lwc';

import LightningModal from 'lightning/modal';

export default class MyModal extends LightningModal {
    @api content;
    @api title;
    
    handleOkay() {
        this.close('okay');
    }
    handleclose(){
        
        this.dispatchEvent(new CustomEvent('close'));
    }
    disconnectedCallback() {
        console.log("this is a disconnected Callback");
    }
}