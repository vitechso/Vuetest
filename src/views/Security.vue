<template>

<ion-page> 
<div  v-if="!isIpad">
<ion-header class="header_am">
  <ion-toolbar>
    <ion-row class="ion-align-items-center">
        <ion-col size="1">
            <div class="ion-text-center">
                <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
            </div>
        </ion-col>
      <ion-col size="9">
        <div class="ion-text-left">
          <span class="title_top">Security</span> 
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
            <!-- <div slot="start" class="icons_s">
                <img src="assets/images/Dark_mode.svg"/>
            </div> -->
            <ion-label>Activate/Deactivate Passcode</ion-label>
            <ion-toggle slot="end"></ion-toggle>
        </ion-item>

        <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
            <!-- <div slot="start" class="icons_s">
                <img src="assets/images/ratting.svg"/>
            </div> -->
            <ion-label>Change Passcode</ion-label>
            <div slot="end" class="control_cin ens_sd">
                <img src="assets/images/right_arrow.svg"/>
            </div>
        </ion-item>

        <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
            <!-- <div slot="start" class="icons_s">
                <img src="assets/images/Dark_mode.svg"/>
            </div> -->
            <ion-label>Unlock with Touch-ID</ion-label>
            <ion-toggle id="themeToggle" slot="end"></ion-toggle>
        </ion-item>

        <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
            <!-- <div slot="start" class="icons_s">
                <img src="assets/images/ratting.svg"/>
            </div> -->
            <ion-label>Locking</ion-label>
            <div slot="end" class="control_cin ens_sd">
                <img src="assets/images/right_arrow.svg"/>
            </div>
        </ion-item>

    </div>
  </ion-content>

</div>

<div v-if="isIpad">
    <ion-header class="header_am">
  <ion-toolbar class="">
    <ion-row class="ion-align-items-center">
      <ion-col size="4" class="bars_hms">
        <div class="ion-text-center ins_han">
            <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
        </div>
        <div class="ion-text-left ipad_flx">
          <span class="title_top ipad_title_top">Security</span> 
        </div>
      </ion-col>
      <ion-col size="6">
      </ion-col>
      <ion-col size="2">
        <ion-buttons class="right_ipad">
            <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
        </ion-buttons>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>

<ion-content :fullscreen="true">
    <div class="main_setting ion-margin ipad_secur">
        
        <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
            <!-- <div slot="start" class="icons_s">
                <img src="assets/images/Dark_mode.svg"/>
            </div> -->
            <ion-label>Activate/Deactivate Passcode</ion-label>
            <ion-toggle slot="end"></ion-toggle>
        </ion-item>

        <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
            <!-- <div slot="start" class="icons_s">
                <img src="assets/images/ratting.svg"/>
            </div> -->
            <ion-label>Change Passcode</ion-label>
            <div slot="end" class="control_cin ens_sd">
                <img src="assets/images/right_arrow.svg"/>
            </div>
        </ion-item>

        <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
            <!-- <div slot="start" class="icons_s">
                <img src="assets/images/Dark_mode.svg"/>
            </div> -->
            <ion-label>Unlock with Touch-ID</ion-label>
            <ion-toggle id="themeToggle" slot="end"></ion-toggle>
        </ion-item>

        <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
            <!-- <div slot="start" class="icons_s">
                <img src="assets/images/ratting.svg"/>
            </div> -->
            <ion-label>Locking</ion-label>
            <div slot="end" class="control_cin ens_sd">
                <img src="assets/images/right_arrow.svg"/>
            </div>
        </ion-item>

    </div>
  </ion-content>
</div>
</ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton, IonToggle, isPlatform  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Security',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonToggle
  },
  setup() {
      const router = useRouter();
      return { router };
  },
  data(){
      return{
        styleClass:"",
        isIpad:isPlatform('ipad')
    }
  }
});
</script>

<style scoped>

</style>