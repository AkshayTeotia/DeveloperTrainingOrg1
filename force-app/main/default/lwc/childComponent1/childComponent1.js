import { LightningElement,api } from 'lwc';

export default class ChildComponent1 extends LightningElement {
    @api headtext=null;
    @api childBody=null;

    closehandler(){
        this.dispatchEvent(new CustomEvent('close',{detail:"hello World"}))
    }
}