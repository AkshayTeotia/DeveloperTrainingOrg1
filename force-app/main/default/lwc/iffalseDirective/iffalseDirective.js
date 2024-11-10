import { LightningElement } from 'lwc';

export default class IffalseDirective extends LightningElement {

    exp=false;

    clickhandler(){
        this.exp=true;
    }

}