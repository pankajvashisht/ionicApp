import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { ApisProvider,SessionProvider } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-add-demond',
  templateUrl: 'add-demond.html',
})
export class AddDemondPage implements OnInit {
  main_category:any=[];
  sub_catgeory:any=[];
  third_category:any=[];
  private DemondForm:FormGroup;
  selectedFile:string;
  user_info:any;
  img:string="assets/imgs/logo.png";
  constructor(private loadingCtrl:LoadingController,private session:SessionProvider ,private toast:ToastController, private AdddemondForm: FormBuilder,private apis:ApisProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.DemondForm = this.AdddemondForm.group({
      name: new FormControl('',[ Validators.required ]),
      min: new FormControl('',[ Validators.required ]),
      max: new FormControl('',[ Validators.required ]),
      category_id: new FormControl('',[ Validators.required ]),
      sub_category_id: new FormControl('',[ Validators.required ]),
      third_category_id: new FormControl('',[ Validators.required ]),
      discription: new FormControl('',[ Validators.required ]),
      qty: new FormControl('',[ Validators.required ]),
    });
    if(this.session.get_session('user_info')){
      this.user_info=this.session.get_session('user_info');
    }else{
      this.navCtrl.push('HomePage');
    }
  
  }

  ionViewDidLoad() {
  }
  ngOnInit(){
    this.apis.top_ten_category(25).then(data => {
      this.main_category=data;
    }).catch((err:string) => {

    });
  }

  back():void{
    this.navCtrl.pop();
  }

  getsub(id:number){
    this.apis.sub_category(id).then((data:any) => {
      this.sub_catgeory=data;
      if(data.length>0){
        this.DemondForm.value.sub_category_id=data[0].id;
      }else{
        this.toast_message("No Sub Category Found");
      }
     // console.log(this.DemondForm.value);
    }).catch((err:string) => {

    });
  }
  getthird(id:number){
    this.apis.third_category(id).then((data:any) => {
      if(data.length>0){
          this.DemondForm.value.third_category_id=data[0].id;
      }else{
        this.toast_message("No Third Level Category Found");
      }
      this.third_category=data;
    }).catch((err:string) => {

    });
  }
  onSelectFile(event) { // called each time file input changes
    this.selectedFile = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.img = event.target.result;
      }
    }
}

  submitSignup(){
    if(!this.selectedFile){
      this.toast_message("Please Select Image");
     return false;
    }
    if(this.DemondForm.value.min>this.DemondForm.value.max){
      this.toast_message("Max price should be maximum then min price");
      //this.toast_message(this.DemondForm.value.min+" "+this.DemondForm.value.max);
      return false;
    }
    let loading = this.loadingCtrl.create({
      content: 'Please Wait..'
    });
    loading.present();
    this.apis.add_demond(this.DemondForm.value,this.user_info.auth_key,this.selectedFile).then(data => {
      this.toast_message("Demand Created Successfully");
      this.navCtrl.push('GetDemondPage');
      loading.dismiss();
    }).catch((err:string) => {
      this.toast_message(err);
      loading.dismiss();
    });
  }
  toast_message(message:string):void{
    let toast = this.toast.create({
      message: message,
      duration: 3000,
      position: 'buttom'
    });
    toast.present()
  }

}
