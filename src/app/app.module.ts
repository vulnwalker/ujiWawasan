import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';

import { KategoriSoalPage } from '../pages/kategori-soal/kategori-soal';
import { SoalPage } from '../pages/soal/soal';
import { JawabSoalPage } from '../pages/jawab-soal/jawab-soal';
import { LoginPage } from '../pages/login/login';
import {TimerComponent} from "../components/timer/timer";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule} from '@angular/http';

import { Facebook } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    KategoriSoalPage,
    SoalPage,
    SplashScreenPage,
    JawabSoalPage,
    LoginPage,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    KategoriSoalPage,
    SoalPage,
    SplashScreenPage,
    LoginPage,
    JawabSoalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
