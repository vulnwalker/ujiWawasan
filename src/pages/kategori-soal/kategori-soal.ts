import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SoalPage } from '../soal/soal';

/**
 * Generated class for the KategoriSoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kategori-soal',
  templateUrl: 'kategori-soal.html',
})
export class KategoriSoalPage {
  animateClass: any;
  animateClassbtn : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
    this.animateClass = { 'fade-in-right-item': true };
    this.animateClassbtn =  { 'zoom-in': true };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KategoriSoalPage');
  }

  Soal(){
    this.navCtrl.push(SoalPage);
  }

  
  

}
