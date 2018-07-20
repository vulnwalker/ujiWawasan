import { Component,Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SplashScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash-screen',
  templateUrl: 'splash-screen.html',
})
export class SplashScreenPage {
  @Input('data') data: any;
  @Input('events') events: any;
  timer:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {

    let TIME_IN_MS = 10000;
    let hideFooterTimeout = setTimeout( () => {
      this.navCtrl.setRoot(LoginPage);
    }, TIME_IN_MS);
    console.log('ionViewDidLoad SplashScreenPage');
  }

  ngOnChanges(changes: {[propKey: string]: any}) {
    clearInterval(this.timer);
    this.executeEvents();
    
  }

  getData(): any {
    return this.data;
  }

  getEvents(): any {
    return this.events;
  }

  executeEvents() : void {
      let duration = (this.getData() && this.getData().duration) ? this.getData().duration : 10000;
      var events = null;

      if (this.getEvents()) {
        events = this.getEvents()['onRedirect'];
      }

      this.timer = setTimeout(function(){
      if (events) {
        events();
      }
    }, duration);
  }
  
  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
