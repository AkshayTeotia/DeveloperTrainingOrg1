import { LightningElement } from 'lwc';
import defaultPage from "./multipleRenderingDemo.html";
import SignInPage from "./signin.html";
import SignUpPage from "./signup.html";
import OutcomePage from "./outcome.html";


export default class MultipleRenderingDemo extends LightningElement {

    pageName=null;


    

    render(){
        if(this.pageName==="SignIn"){
            return SignInPage
        }
        else if(this.pageName==="SignUp"){
            return SignUpPage
        }
        else if(this.pageName==="Submit"){
            return OutcomePage
        }
        else{
            return defaultPage;
        }
    }

    clickhandler(event){
        this.pageName=event.target.innerText;
    }
    submithandler(event){
        console.log(event.target.innerText);
        this.pageName=event.target.innerText; 
    }

}