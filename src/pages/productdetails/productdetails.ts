import { Component, ViewChild } from '@angular/core';
import {
	IonicPage,
	NavController,
	ModalController,
	Content,
	Slides,
	NavParams,
	AlertController,
	ToastController,
} from 'ionic-angular';
import { AppCon } from '../../app/app.global';
import { ApisProvider, SessionProvider } from '../../providers/providers';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the ProductdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-productdetails',
	templateUrl: 'productdetails.html',
})
export class ProductdetailsPage {
	public product_details: any = [];
	showPrev: any;
	showNext: any;
	currentIndex: any;
	count: any;
	slidertab: any;
	app_statics: any = AppCon;
	is_login: boolean = false;
	user_info: any = [];
	@ViewChild(Content) content: Content;
	@ViewChild('mySlider') slider: Slides;

	constructor(
		private socialSharing: SocialSharing,
		private apis: ApisProvider,
		private modalCtrl: ModalController,
		private session: SessionProvider,
		public navCtrl: NavController,
		public navParams: NavParams,
		public alterctrl: AlertController,
		private toast: ToastController
	) {
		if (this.session.get_session('user_info')) {
			this.is_login = true;
			this.user_info = this.session.get_session('user_info');
		}

		if (!this.navParams.get('details')) {
			this.navCtrl.pop();
		} else {
			this.product_details = this.navParams.get('details');
			if (this.product_details.media.length == 0) {
				let dummy = {
					id: 0,
					file: this.app_statics.defult_product_image,
				};
				this.product_details.media.push(dummy);
			}
		}
		let id = 0;
		this.slidertab = id;
		setTimeout(() => {
			this.goToSlide(id);
		}, 500);
		this.slidertab = 0;
		this.currentIndex = 0;
		this.count = 0;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProductdetailsPage');
	}

	goToSlide(id) {
		this.slider.slideTo(id, 500);
	}

	slideChanged() {
		let currentIndex = this.slider.getActiveIndex();
		this.slidertab = currentIndex;
	}
	back() {
		this.navCtrl.pop();
	}
	send_query() {
		let type = 1;
		if (this.product_details.hasOwnProperty('min')) {
			type = 2;
		}
		let modal = this.modalCtrl.create('SendqueryPage', {
			vender_id: this.product_details.user_id,
			type: type,
			table_id: this.product_details.id,
		});
		modal.present();
	}

	do_fav(object: any) {
		if (object[0].is_fav == 1) {
			object[0].is_fav = 0;
		} else {
			object[0].is_fav = 1;
		}
		if (this.is_login) {
			this.apis.do_fav(object.id).then((data: string) => {
				this.toast_message(data);
			});
		} else {
			let alert = this.alterctrl.create({
				title: 'Login Alert',
				subTitle: 'Please Login First',
				buttons: ['ok'],
			});
			alert.present();
		}
	}

	toast_message(message: string): void {
		let toast = this.toast.create({
			message: message,
			duration: 3000,
			position: 'buttom',
		});
		toast.present();
	}

	chat(product_id: string, user_id: string) {
		if (this.is_login) {
			this.navCtrl.push('AllchatPage', {
				product_id: product_id,
				user_id: user_id,
				product_name: this.product_details.name,
			});
		} else {
			let alert = this.alterctrl.create({
				title: 'Login Alert',
				subTitle: 'Please Login First',
				buttons: ['ok'],
			});
			alert.present();
		}
	}

	share() {
		this.socialSharing
			.share(
				this.product_details.name,
				this.product_details.detail,
				this.product_details.media[0].file,
				'https://www.agrohypermarket.com/product/' + this.product_details.id
			)
			.then(() => {
				this.toast_message('Product Share Successfully');
			})
			.catch(() => {
				this.toast_message('Opps Cancel');
			});
	}
}
