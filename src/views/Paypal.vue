<template>

<ion-page>

<div v-if="isDesktop">
<ion-page>
  <ion-header class="ipad_topbar">
        <ion-toolbar>
        <ion-row class="ion-align-items-center bar_c">
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <img @click="cancel" class="back-btn" src="assets/images/back-black.svg"/>
          <span class="popup_title">Paypal</span> 
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
    <ion-row class="ion-padding-horizontal">
      <ion-col size="12">
        <div class="payment-account-title">
          <img src="assets/images/paypal-img.png" class="paypal-logo"/>
          <h5><img src="assets/images/check-circle-yallow.svg"/>Your paypal account is successfully connected.</h5>

        </div>
      </ion-col>
    </ion-row>

    <ion-row class="ion-padding-horizontal ion-padding-bottom account_desktop">
      <ion-col size="6" class="ion-padding-end">
        <div lines="none" class="pdd_b">
          <input type="email" id="email" placeholder="george@gmail.com" class="user_nam" />
        </div>
      </ion-col>

      <ion-col size="6" class="ion-padding-start">
        <div lines="none" class="pdd_b">
          <input type="password" id="password" placeholder="Password" class="user_nam" />
        </div>
      </ion-col>
    </ion-row>

    <ion-row class="ion-justify-content-center ion-padding ion-margin-bottom">
        <ion-col size="12">
            <div class="BtnBlock">
                <ion-button shape="round" class="MakeDefault-btn" @click="paypal">Update</ion-button>
            </div>
        </ion-col>
    </ion-row>

  </ion-content>
  </ion-page>
  </div>

</ion-page>

</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, isPlatform, modalController, getPlatforms  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Paypal',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
  },
  setup() {
      const router = useRouter();
      return { router };
  },
  data() {
      return {
          styleClass:"",
          isDesktop: isPlatform('desktop'),
          isMobile: getPlatforms().indexOf('iphone')>-1||getPlatforms().indexOf('android')>-1,
          isIpad:getPlatforms().indexOf('ipad')>-1||getPlatforms().indexOf('tablet')>-1,
      }
  },
  methods:{
      cancel() {
        modalController.dismiss()
    },
  }
});
</script>

<style scoped>

</style>