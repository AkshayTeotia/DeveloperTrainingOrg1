import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavToNamedPages extends NavigationMixin(LightningElement) {

    clickhandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes:{
                pageName:'chatter'  /*  home
                                        chatter
                                        today
                                        dataAssessment
                                        filePreview*/
            }
        })
    }

    clickhandler1(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }

}