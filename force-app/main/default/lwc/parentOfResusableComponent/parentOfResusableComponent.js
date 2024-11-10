import { LightningElement } from 'lwc';
import * as ModalData from './reusableData.js'
export default class ParentOfResusableComponent extends LightningElement {
    Modal_Data=ModalData;
    flag1=false;
    clickHandler(){
        this.flag1=true;
    }
    chandler(){
        this.flag1=false;
    }

    flag2=false;
    clickHandler1(){
        this.flag2=true;
    }
    chandler1(){
        this.flag2=false;
    }
}