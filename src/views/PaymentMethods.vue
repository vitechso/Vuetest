<template>

<ion-page>

<div v-if="isDesktop">
<ion-page>
  <ion-header class="ipad_topbar">
        <ion-toolbar>
        <ion-row class="ion-align-items-center bar_c">
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <img class="back-btn" src="assets/images/back-black.svg"/>
          <span class="popup_title">Payment Methods</span> 
        </div>
      </ion-col>
      <ion-col size="4"></ion-col>
      <ion-col size="2">
        <div @click="cancel" class="close_popus">
            <img src="assets/images/cross_icon.svg"/>
        </div>
      </ion-col>
    </ion-row>
        </ion-toolbar>
  </ion-header>

<ion-content :fullscreen="true">
    <ion-row class="ion-padding-horizontal ion-padding-top ion-justify-content-end">
        <ion-col size="3" class="d-flex ion-justify-content-end">
          <ion-button class="add_credis import_csv" @click="addpay">Add Payment Method</ion-button>
          <!-- <ion-button shape="round" class="add_credis" @click="addCredit">Add Payment Method</ion-button> -->
        </ion-col>
    </ion-row>

    
        
    <ion-row>
      <ion-col size="12" class="">
        <ion-list class="ion-padding-horizontal">
          <ion-radio-group value="grape">
            <div class="card-details-block border-green">
              <ion-item lines="none" >
                <ion-radio slot="start" color="success" value="CreditCard"></ion-radio>
              </ion-item>
              
              <div class="card-info">
                <img src="assets/images/paymemt.svg"/>
                <div class="cards-details">
                  <h2>Credit/Debit Card</h2>
                  <p><strong>VISA</strong> ending in 6159</p>
                  <p>Expires: 12/2022</p>
                  <p><strong><i>Default</i></strong></p>
                </div>
              </div>
              <div class="card-action">
                  <img src="assets/images/edit.svg"/>
                  <img src="assets/images/delete_black.svg"/>
              </div>
            </div>

            <div class="card-details-block">
              <ion-item lines="none">
                <ion-radio slot="start" color="success" value="PayPal"></ion-radio>
              </ion-item>
              
              <div class="card-info">
                <img src="assets/images/PayPal.svg"/>
                <div class="cards-details">
                  <h2>Paypal</h2>
                  <p><strong>george@gmail.com</strong></p>
                </div>
              </div>
              <div class="card-action">
                  <img src="assets/images/edit.svg"/>
                  <img src="assets/images/delete_black.svg"/>
              </div>
            </div>
          </ion-radio-group>
        </ion-list>
      </ion-col>
    </ion-row>

    <ion-row class="ion-justify-content-center ion-padding ion-margin-bottom">
        <ion-col size="12">
            <div class="BtnBlock">
                <ion-button shape="round" class="MakeDefault-btn _big">Make Default</ion-button>
            </div>
        </ion-col>
    </ion-row>

  </ion-content>
  </ion-page>
  </div>

</ion-page>

</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, isPlatform, IonButton, modalController, IonItem, IonList, IonRadio, IonRadioGroup  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import AddPaymentMethod from './AddPaymentMethod.vue';
export default defineComponent({
  name: 'PaymentMethods',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
    IonItem,
    IonList,
    IonRadio,
    IonRadioGroup
  },
  setup() {
      const router = useRouter();
      return { router };
  },
  data() {
      return {
          styleClass:"",
          isIpad:isPlatform('ipad'),
          isDesktop: isPlatform('desktop'),
          isMobile: isPlatform('mobile'),
      }
  },
  methods:{
      cancel() {
        modalController.dismiss()
    },

    async addpay() {
        modalController.dismiss()
        const modal = await modalController.create({
          component: AddPaymentMethod,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },

  }
});
</script>

<style scoped>

</style>