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
          <span class="popup_title">Add Credits</span> 
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

    <ion-row class="ion-justify-content-center ion-padding-horizontal ion-padding-bottom ion-margin-bottom">
      <ion-col size="3" class="ion-padding-end">
        <ion-button shape="round" class="MakeDefault-btn">Add</ion-button>
      </ion-col>

      <ion-col size="3" class="ion-padding-start">
        <ion-button shape="round" type="default" @click="cancel" class="MakeDefault-btn _gary-outline-btn">Cancel</ion-button>
      </ion-col>
    </ion-row>
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
  name: 'AddCredits',
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