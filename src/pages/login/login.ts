import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';
import { Nav } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
// import  'rxjs/add/operator/map';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public type = 'password';
  public showPass = false;
  @ViewChild(Nav) nav: Nav;
  // dataInstansi : string;
  // // url :string;
  data:any = {};
  gender: string = "f";
  constructor(private splashScreen: SplashScreen,private storage: Storage,private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public http: Http) {
    this.data.username = '';
    this.data.password = '';
    this.data.response = '';

    this.http = http;

    this.splashScreen.hide();
  }

  showPassword() {
    this.showPass = !this.showPass;

    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
  
  login(){
     this.appCtrl.getRootNav().setRoot(HomePage);
  }


      // ionViewDidLoad(){
      //   this.loadUser();
      // }

      // loadUser(){

      //     this.http.get('http://taufantritama.com/instansi/dataInstansi.php')
      //     .map(res => res.json())
      //     .subscribe(dataInstansi => {
      //       this.dataInstansi = dataInstansi.result;
      //       console.log(dataInstansi.result);
      //     });
      // }
      
  
    submitLogin() {
      var link = 'http://api.rm-rf.studio/auth';
      var myData = JSON.stringify({email: this.data.username,password: this.data.password});
      
      this.http.post(link,myData)
      .subscribe(data => {
         //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        
         var obj = JSON.parse(data["_body"]);
        if(obj.err == ""){
          this.appCtrl.getRootNav().setRoot(HomePage);
          this.storage.ready().then(() => {
            this.storage.set('Email', obj.userSession);
          });

          localStorage.setItem("Email",this.data.username);
          console.log("session!" +localStorage.getItem("Email") );


        }else{
          this.presentToast("Gagal Login");
        }

      }, error => {
          console.log("Oooops!");
      });
  }

  presentToast(response) {
    let toast = this.toastCtrl.create({
      message: response,
      duration: 2000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad LoginPage');
  }

}
