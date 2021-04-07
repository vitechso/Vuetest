<template>
<div v-if="isMobile">
<ion-page>
<ion-header class="header_am Mobo-header">
<ion-toolbar>
    <ion-row class="ion-align-items-center bar_c">
        <ion-col size="12" class="ion-padding-horizontal">
            <div class="Page-header">
                <div class="Page-Title">
                    <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
                    <span class="title_top title_top_mobo">Enter Passcode</span>
                </div>
                <div class="TopHeader-icon">
                    
                </div>
            </div>
        </ion-col>
    </ion-row>
</ion-toolbar>
</ion-header>

<ion-content :fullscreen="true" class="back_white">
    <div id="container">
        <ion-row class="ion-padding-bottom">
            <ion-col size="12">
                <h4 class="passcode-title">Enter your Passcode</h4>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="12" class="passcode-input">
                <input type="text" class="pass_code" id="pass_01">
                <input type="text" class="pass_code" id="pass_02">
                <input type="text" class="pass_code" id="pass_03">
                <input type="text" class="pass_code" id="pass_04">
            </ion-col>
        </ion-row>
    </div>
</ion-content>

</ion-page>
</div>

<div v-if="isIpad">
<ion-page>

<ion-header class="header_am">
  <ion-toolbar class="header-top-ipad passcode-header dark333">
    <ion-row class="ion-align-items-center ion-padding-horizontal">
      <ion-col size="8" class="bars_hms">
        <div class="ion-text-left ipad_flx">
          <span class="title">Enter Passcode</span> 
        </div>
      </ion-col>
      <ion-col size="4">
        <ion-buttons class="right_ipad">
            <span class="title-2" @click="cancel">Logout</span> 
        </ion-buttons>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>

<ion-content :fullscreen="true" class="passcode-page-ipad">
    <div id="container">
        <ion-row class="ion-padding-bottom">
            <ion-col size="12">
                <h4 class="passcode-title" >Enter your Passcode</h4>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="12" class="passcode-input">
                <input type="text" class="pass_code" id="pass_01">
                <input type="text" class="pass_code" id="pass_02">
                <input type="text" class="pass_code" id="pass_03">
                <input type="text" class="pass_code" id="pass_04">
            </ion-col>
        </ion-row>
    </div>
</ion-content>

</ion-page>
</div>

<div v-if="isDesktop">
<ion-page>
<ion-header class="header_am Mobo-header">
<ion-toolbar>
    <ion-row class="ion-align-items-center bar_c">
        <ion-col size="12" class="ion-padding-horizontal">
            <div class="Page-header">
                <div class="Page-Title">
                    <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
                    <span class="title_top title_top_mobo">Enter Passcode</span>
                </div>
                <div class="TopHeader-icon">
                    
                </div>
            </div>
        </ion-col>
    </ion-row>
</ion-toolbar>
</ion-header>

<ion-content :fullscreen="true" class="back_white">
    <div id="container">
        <ion-row class="ion-padding-bottom">
            <ion-col size="12">
                <h4 class="passcode-title">Enter your Passcode</h4>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="3">
                <input type="text" class="pass_code" id="pass_01">
            </ion-col>
            <ion-col size="3">
                <input type="text" class="pass_code" id="pass_02">
            </ion-col>
            <ion-col size="3">
                <input type="text" class="pass_code" id="pass_03">
            </ion-col>
            <ion-col size="3">
                <input type="text" class="pass_code" id="pass_04">
            </ion-col>
        </ion-row>
    </div>
</ion-content>

</ion-page>
</div>
</template>



<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton, isPlatform, modalController, getPlatforms  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'EnterPasscode',
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
        isDesktop: isPlatform('desktop'),
        isMobile: getPlatforms().indexOf('iphone')>-1||getPlatforms().indexOf('android')>-1,
        isIpad:getPlatforms().indexOf('ipad')>-1||getPlatforms().indexOf('tablet')>-1,
      }
  },

  methods:{
    
    cancel() {
        modalController.dismiss()
    },
    
  },

});
</script>

<style scoped>

</style>