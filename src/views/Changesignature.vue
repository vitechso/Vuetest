<template>
<ion-page>

<div v-if="!isIpad">
<ion-page> 
<ion-header class="header_am">
  <ion-toolbar>
    <ion-row class="ion-align-items-center">
        <ion-col size="1">
            <div class="ion-text-center">
                <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
            </div>
        </ion-col>
      <ion-col size="11">
        <div class="ion-text-left">
          <span class="title_top">Change Signature</span> 
        </div>
      </ion-col>
      
    </ion-row>
  </ion-toolbar>
</ion-header>
  <ion-content :fullscreen="true" class="back_white">
    <div id="container_fax">

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
        <ion-col size="7">
            <p><strong>Upload signature image</strong></p>
            <p class="text_colors">Enable this option to display the signature in the document</p>
            <p class="text_colors">300 px by 170 px</p>
        </ion-col>
        <ion-col size="5">
            <div class="btn_ajj">
                <ion-button shape="round" type="button">Select Image</ion-button>
            </div>
        </ion-col>
    </ion-row>

    <ion-row class="custom_row ion-padding-top ion-padding-bottom">
        <ion-col size="7">
            <p><strong>Draw a signature</strong></p>
            <p class="text_colors">Manually draw a signature on device using pen or finger</p>
        </ion-col>
        <ion-col size="5">
            <div class="btn_ajj">
                <ion-button shape="round" type="button">Draw Signature</ion-button>
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

  <ion-content :fullscreen="true" class="">
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
            <p class="text_colors">300 px by 170 px</p>
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
            <VueSignaturePad width="500px" height="500px" ref="signaturePad" />
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

</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonButton, IonToggle, isPlatform, modalController } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Changesignature',
  components: {
    IonContent,
    IonHeader,
    IonPage,
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
          isIpad:isPlatform('ipad')
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

</style>