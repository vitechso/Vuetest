<template>
<ion-page>
<div v-if="isMobile">
<ion-page> 
<ion-header class="header_am Mobo-header">
  <ion-toolbar>
      <ion-row class="ion-align-items-center bar_c">
          <ion-col size="12" class="ion-padding-horizontal">
              <div class="Page-header">
                  <div class="Page-Title">
                      <img @click="()=>router.push('/Settings')" src="assets/images/back_btn.svg"/>
                      <span class="title_top title_top_mobo">Rating & Feedback</span>
                  </div>
                  <div class="TopHeader-icon">
                      <ion-buttons class="menu-btn header-icon">
                          <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
                      </ion-buttons>
                  </div>
              </div>
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
</div>

<div v-if="isIpad">
<ion-page>

<ion-header class="header_am">
  <ion-toolbar class="header-top-ipad">
    <ion-row class="ion-align-items-center ion-padding-horizontal">
      <ion-col size="8" class="bars_hms">
        <div class="ion-text-center ins_han">
            <img @click="()=>router.push('/settings')" src="assets/images/back_btn.svg"/>
        </div>
        <div class="ion-text-left ipad_flx">
          <span class="title_top ipad_title_top">Rating & Feedback</span> 
        </div>
      </ion-col>
      <ion-col size="4">
        <ion-buttons class="right_ipad">
            <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
        </ion-buttons>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>


<ion-content :fullscreen="true" class="rating-page-ipad">
    <div class="main_setting ion-padding ion-margin-top hnas_ipads">
    <ion-row>
        <ion-col size="6" class="ion-padding-end">
            <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
                <div slot="start" class="icons_s">
                    <img src="assets/images/ratting.svg"/>
                </div>
                <ion-label>Rate Us</ion-label>
                <div slot="end" class="control_cin ens_sd">
                    <img src="assets/images/right_arrow.svg"/>
                </div>
            </ion-item>
        </ion-col>

        <ion-col size="6" class="ion-padding-start">
            <ion-item @click="() => router.push('/transaction-history')" lines="none" class="list_cons setting_bs ion-margin-bottom">
                <div slot="start" class="icons_s">
                    <img src="assets/images/share.svg"/>
                </div>
                <ion-label>Recommend App</ion-label>
                <div slot="end" class="control_cin ens_sd">
                    <img src="assets/images/right_arrow.svg"/>
                </div>
            </ion-item>
        </ion-col>
    </ion-row>
            
    <ion-row>
        <ion-col size="6" class="ion-padding-end">
            <ion-item @click="() => router.push('/change-password')" lines="none" class="list_cons setting_bs ion-margin-bottom">
                <div slot="start" class="icons_s">
                    <img src="assets/images/send_feedback.svg"/>
                </div>
                <ion-label>Send Feedback</ion-label>
                <div slot="end" class="control_cin ens_sd">
                    <img src="assets/images/right_arrow.svg"/>
                </div>
            </ion-item>
        </ion-col>
    </ion-row>

    </div>
  </ion-content>
</ion-page>
</div>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton, isPlatform, getPlatforms  } from '@ionic/vue'
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
  },
  data(){
      return{
      styleClass:"",
        isDesktop: isPlatform('desktop'),
        isMobile: getPlatforms().indexOf('iphone')>-1||getPlatforms().indexOf('android')>-1,
        isIpad:getPlatforms().indexOf('ipad')>-1||getPlatforms().indexOf('tablet')>-1,
      }
  }
});
</script>

<style scoped>

</style>