<template>

<ion-page> 
<ion-header class="header_am">
  <ion-toolbar>
    <ion-row class="ion-align-items-center">
        <ion-col size="1">
            <div class="ion-text-center">
                <img src="assets/images/back_btn.svg"/>
            </div>
        </ion-col>
      <ion-col size="9">
        <div class="ion-text-left">
          <span class="title_top">Rating & Feedback</span> 
        </div>
      </ion-col>
      <ion-col size="2">
        <ion-buttons>
            <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
        </ion-buttons>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>
  <ion-content :fullscreen="true">
    <div class="main_setting ion-margin">
      <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
            <div slot="start" class="icons_s">
                <img src="assets/images/ratting.svg"/>
            </div>
            <ion-label>Rate Us</ion-label>
            <div slot="end" class="control_cin ens_sd">
                <img src="assets/images/right_arrow.svg"/>
            </div>
        </ion-item>

        <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
            <div slot="start" class="icons_s">
                <img src="assets/images/share.svg"/>
            </div>
            <ion-label>Recommend App</ion-label>
            <div slot="end" class="control_cin ens_sd">
                <img src="assets/images/right_arrow.svg"/>
            </div>
        </ion-item>

        <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
            <div slot="start" class="icons_s">
                <img src="assets/images/send_feedback.svg"/>
            </div>
            <ion-label>Send Feedback</ion-label>
            <div slot="end" class="control_cin ens_sd">
                <img src="assets/images/right_arrow.svg"/>
            </div>
        </ion-item>
    </div>
  </ion-content>

</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Ratingfeedback',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonMenuButton
  },
  setup() {
      const router = useRouter();
      return { router };
  }
});
</script>

<style scoped>

</style>