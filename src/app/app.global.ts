export const AppCon: any = {
  store           : 'AHM',  // change this with your app name
  ContactEmail    : 'sharmapankaj688@gmail.com', // change this with your email contact
  url             : 'https://www.agrohypermarket.com/apis/', // change this with your URL (please use https, recommended)
  OneSignalAppID  : 'e6ff67f5-ec5b-444c-b3e6-c7e1a939f3d0', // change this with your onesignal api key
  GCM             : '586724370404', // Google Project Number for Google Cloud Messaging
  consumerKey     : 'ck_757033d97d8c2596009a235c737e9a3be5c65e9a', // change this with your Consumer Key from WooCommerce
  consumerSecret  : 'cs_4b903a9259ea3e31ced46e3e82a98b8737b0d565', // change this with your Consumer Secret from WooCommerce
  defult_product_image  : 'https://www.agrohypermarket.com/placeholders/product_white.jpg',
  paypalSandboxClientID: '',
  paypalLiveClientID: '', // get this from paypal developer dashboard
  paypalState: '', // change this to 'PayPalEnvironmentProduction' if you wanna live

  languages: [
    {id: 'en', title: 'English'},
    {id: 'id', title: 'Indonesian'},
    {id: 'fr', title: 'French'},
    {id: 'in', title: 'Hindi'},
    {id: 'cn', title: 'Chinese'}
  ],

  defaultLang: 'en'
};