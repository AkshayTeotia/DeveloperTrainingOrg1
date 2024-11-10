import { LightningElement } from 'lwc';

export default class IfTrueDirective extends LightningElement {

exp=false;
clickhandler(){
    this.exp=true;
}


}