import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';

import { KategoriSoalPage } from '../kategori-soal/kategori-soal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  animateClass: any;
  constructor(public navCtrl: NavController, public appCtrl: App) {
    this.animateClass = { 'zoom-in': true };
  }

  Challenge(){
    this.navCtrl.push(KategoriSoalPage);
  }

}
