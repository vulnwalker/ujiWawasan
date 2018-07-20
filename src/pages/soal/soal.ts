import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { JawabSoalPage } from '../jawab-soal/jawab-soal';
/**
 * Generated class for the SoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soal',
  templateUrl: 'soal.html',
})
export class SoalPage {
  animateClass: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
    this.animateClass = { 'zoom-in': true };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoalPage');
  }

  JawabSoal(){
    this.appCtrl.getRootNav().setRoot(JawabSoalPage);
  }

}
