import { LightningElement, api } from 'lwc';

export default class LightningLoader extends LightningElement {
   @api spinnertext='this is my loader';
   @api size='medium';
   @api variant='base';


   get helptext(){
      return this.spinnertext ? this.spinnertext : 'Loading';

   }

   get classes() {
      return this.variant=='inverse' ? 'loader inverse' : 'loader';
   }

}
