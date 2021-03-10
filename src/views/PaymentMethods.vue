<template>

<ion-page>

<div v-if="isDesktop">
<ion-page>
  <ion-header class="ipad_topbar bordes_ipad">
        <ion-toolbar>
        <ion-row class="ion-align-items-center bar_c">
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
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
    <ion-row class="ion-padding-top">
        <ion-col size="1"></ion-col>
        <ion-col size="10">
            <div class="add_titles">
                <h4>Please enter the amount you would like to add in your account</h4>
            </div>

            <div lines="none" class="pdd_b">
                <input type="text" id="old_password" placeholder="Amount" class="user_nam" />
                <div class="icon_in"><img src="assets/images/key.png"/></div>
            </div>
        </ion-col>
        <ion-col size="1"></ion-col>
    </ion-row>
    <div class="main_setting ion-margin change_pass_ipads ion-no-padding">
        <ion-row>
            <ion-col size="6">
                <ion-button shape="round" class="ok_btn">Add</ion-button>
            </ion-col>
            <ion-col size="6">
                <ion-button shape="round" class="cancel_btn">Cancel</ion-button>
            </ion-col>
        </ion-row>
    </div>
  </ion-content>
  </ion-page>
  </div>

</ion-page>

</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, isPlatform, IonButton, modalController  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'PaymentMethods',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton
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
  }
});
</script>

<style scoped>

</style>