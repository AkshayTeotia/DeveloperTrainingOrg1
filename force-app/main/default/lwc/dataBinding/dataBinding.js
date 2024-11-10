import { LightningElement} from 'lwc';

export default class DataBinding extends LightningElement {
    FullName="Akshay";
    title="xyz";
    eventhandler(event){
        this.title=event.target.value;
    }

}