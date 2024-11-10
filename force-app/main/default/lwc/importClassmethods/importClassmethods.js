import { LightningElement, wire } from 'lwc';
import Addition from '@salesforce/apex/classForDemo.add';

export default class ImportClassmethods extends LightningElement {



    @wire(Addition,{a:4,b:6})
    wiredadd;
    

}