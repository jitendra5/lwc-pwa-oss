import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    toggleCls = false;
    @track isLogin = true;
    @track isRegistration = false;
    @track isAboutUs = false;
    @track isContactUs = false;

    showToggle() {
        console.log('clicked..');
        if (this.toggleCls) {
            let cls = this.template.querySelector('.navbar-collapse').classList;
            console.log(JSON.stringify(cls));
            this.template
                .querySelector('.navbar-collapse')
                .classList.add('collapse');
            this.toggleCls = false;
        } else {
            let cls = this.template.querySelector('.navbar-collapse').classList;
            console.log(JSON.stringify(cls));
            this.template
                .querySelector('.navbar-collapse')
                .classList.remove('collapse');
            this.toggleCls = true;
        }
    }
    showAboutUsPage() {
        this.isAboutUs = true;
        this.isLogin = false;
        this.isRegistration = false;
        this.isContactUs = false;
        this.showToggle();
    }
    showContactUsPage() {
        this.isAboutUs = false;
        this.isLogin = false;
        this.isRegistration = false;
        this.isContactUs = true;
        this.showToggle();
    }
    handleReg() {
        console.log('handlereg');
        this.isLogin = false;
        this.isRegistration = true;
        this.isContactUs = false;
        this.isAboutUs = false;
        this.showToggle();
    }
    handleLog() {
        console.log('handlereg');
        this.isLogin = true;
        this.isRegistration = false;
        this.isContactUs = false;
        this.isAboutUs = false;
        this.showToggle();
    }
}
