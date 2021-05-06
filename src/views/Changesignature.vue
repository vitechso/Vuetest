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
            <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
            <span class="title_top title_top_mobo">Change Signature</span>
          </div>
          <div class="TopHeader-icon">
          </div>
        </div>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>
  <ion-content :fullscreen="true" class="back_white">
    <div id="container_fax" class="">

    <ion-row class="custom_row change-s-block ion-padding-top ion-padding-bottom">
        <ion-col size="9" class="ion-no-padding">
            <p><strong>Show signature</strong></p>
            <p class="text_colors">Enable this option to display the signature in the document</p>
        </ion-col>
        <ion-col size="3" class="ion-no-padding">
            <div class="mark_toggle">
                <ion-toggle slot="end"></ion-toggle>
            </div>
        </ion-col>
    </ion-row>

    <ion-row class="custom_row change-s-block ion-padding-top ion-padding-bottom">
        <ion-col size="7" class="ion-no-padding">
            <p><strong>Upload signature image</strong></p>
            <p class="text_colors">Enable this option to display the signature in the document</p>
            <p class="text_colors signature-image-alert">300 px by 170 px</p>
        </ion-col>
        <ion-col size="5" class="change-s-btn-block">
            <div class="btn_ajj ion-text-right">
                <ion-button shape="round" type="button">Select Image</ion-button>
            </div>
        </ion-col>
    </ion-row>

    <ion-row class="custom_row change-s-block ion-padding-top ion-padding-bottom">
        <ion-col size="7" class="ion-no-padding">
            <p><strong>Draw a signature</strong></p>
            <p class="text_colors">Manually draw a signature on device using pen or finger</p>
        </ion-col>
        <ion-col size="5" class="change-s-btn-block">
            <div class="btn_ajj ion-text-right">
                <ion-button shape="round" type="button" class="draw-sign-btn">Draw Signature</ion-button>
            </div>
        </ion-col>
    </ion-row>


    </div>
  </ion-content>
</ion-page>
</div>

<div v-if="isIpad">
<ion-page>
  <ion-header class="ipad_topbar">
        <ion-toolbar>
        <ion-row class="ion-align-items-center bar_c">
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <span class="popup_title">Change Signature</span> 
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

  <ion-content :fullscreen="true" class="dark333">
    <div id="container_fax" class="change_sign_ipad">

    <ion-row class="custom_row ion-padding-top ion-padding-bottom">
        <ion-col size="9">
            <p><strong>Show signature</strong></p>
            <p class="text_colors">Enable this option to display the signature in the document</p>
        </ion-col>
        <ion-col size="3">
            <div class="mark_toggle">
                <ion-toggle color="primary"></ion-toggle>
            </div>
        </ion-col>
    </ion-row>

    <ion-row class="custom_row ion-padding-top ion-padding-bottom">
        <ion-col size="9">
            <p><strong>Upload signature image</strong></p>
            <p class="text_colors">Enable this option to display the signature in the document</p>
            <p class="text_colors signature-image-alert">300 px by 170 px</p>
        </ion-col>
        <ion-col size="3">
            <div class="btn_ajj chosse_ipad">
                <ion-button shape="round" type="button">Select Image</ion-button>
            </div>
        </ion-col>
    </ion-row>

    <ion-row class="custom_row ion-padding-top ion-padding-bottom">
        <ion-col size="9">
            <p><strong>Draw a signature</strong></p>
           
            <p class="text_colors">Manually draw a signature on device using pen or finger</p>
        </ion-col>
        <ion-col size="3">
            <div class="btn_ajj chosse_ipad">
                <ion-button shape="round" type="button">Draw Signature</ion-button>
            </div>
        </ion-col>
    </ion-row>

    </div>
  </ion-content>
</ion-page>
</div>

<div v-if="isDesktop">
<ion-page>
  <ion-header class="ipad_topbar">
        <ion-toolbar>
        <ion-row class="ion-align-items-center bar_c">
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <span class="popup_title">Change Signature</span> 
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

  <ion-content :fullscreen="true" class="back_white">
    <div id="container_fax" class="change_sign_ipad">

      <ion-row class="custom_row ion-padding-top ion-padding-bottom">
          <ion-col size="9">
              <p><strong>Show signature</strong></p>
              <p class="text_colors">Enable this option to display the signature in the document</p>
          </ion-col>
          <ion-col size="3">
              <div class="mark_toggle">
                <ion-toggle color="primary"></ion-toggle>
            </div>
          </ion-col>
      </ion-row>

      <ion-row class="custom_row ion-padding-top ion-padding-bottom">
          <ion-col size="9">
              <p><strong>Upload signature image</strong></p>
              <p class="text_colors">Enable this option to display the signature in the document</p>
              <p class="text_colors signature-image-alert">300 px by 170 px</p>
          </ion-col>
          <ion-col size="3">
              <div class="btn_ajj chosse_ipad">
                  <ion-button shape="round" type="button">Select Image</ion-button>
              </div>
          </ion-col>
      </ion-row>

      <ion-row class="ion-justify-content-center ion-padding Signature-Ok">
          <ion-col size="12">
              <div class="BtnBlock">
                  <ion-button shape="round" class="MakeDefault-btn">Ok</ion-button>
              </div>
          </ion-col>
      </ion-row>
    </div>
  </ion-content>
</ion-page>
</div>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent,IonCol,IonRow, IonToolbar, IonButton, IonToggle, isPlatform, modalController, getPlatforms } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Changesignature',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonRow,
    IonCol,
    IonToolbar,
    IonButton,
    IonToggle 
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
        isIpad:getPlatforms().indexOf('ipad')>-1,
      }
  },
  methods:{
    cancel() {
        modalController.dismiss()
    }
  }
});
</script>

<style scoped>
span.popup_title {
    font-family: 'Proxima Nova Extrabold' !important;
}
</style>