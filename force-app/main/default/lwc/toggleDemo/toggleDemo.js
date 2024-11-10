import { LightningElement } from 'lwc';

export default class ToggleDemo extends LightningElement {

    ToggleText=false;

    toggleHandler(){
        this.ToggleText=!this.ToggleText;
    }
}