<template>

<ion-page>

<div v-if="isDesktop">
<ion-page>
  <ion-header class="ipad_topbar bordes_ipad">
        <ion-toolbar>
        <ion-row class="ion-align-items-center bar_c">
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <img class="back-btn" src="assets/images/back-black.svg"/>
          <span class="popup_title">Add Payment Method</span> 
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
    <ion-row class="ion-padding">
        <ion-col size="12">
          <div class="AddPayment-MethodBlock">
            <div class="PaymentCard-box" @click="paypal">
              <div class="card-img-box active-Cardbox">
                <img src="assets/images/PayPal.svg"/>
              </div>
              <h2>Paypal</h2>
            </div>

            <div class="PaymentCard-box" @click="editcard">
              <div class="card-img-box CreditCard-img">
                <img src="assets/images/paymemt.svg"/>
              </div>
              <h2>Credit/Debit Card</h2>
            </div>
          </div>
        </ion-col>
    </ion-row>

    <ion-row class="ion-justify-content-center ion-padding-horizontal ion-padding-bottom ion-margin-bottom">
      <ion-col size="3">
        <ion-button shape="round" class="MakeDefault-btn">Next</ion-button>
      </ion-col>
    </ion-row> 
  </ion-content>
  </ion-page>
  </div>

</ion-page>

</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, isPlatform, modalController  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Paypal from './Paypal.vue';
import EditCardDetails from './EditCardDetails.vue';

export default defineComponent({
  name: 'AddPaymentMethod',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar
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

    async paypal() {
        modalController.dismiss()
        const modal = await modalController.create({
          component: Paypal,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
  },


  async editcard() {
        modalController.dismiss()
        const modal = await modalController.create({
          component: EditCardDetails,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
  },

},
});
</script>

<style scoped>

</style>