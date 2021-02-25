<template>

<ion-page v-if="!isIpad"> 

</ion-page>

<ion-page v-if="isIpad">
    <ion-header class="ipad_topbar bordes_ipad">
        <ion-toolbar>
        <ion-row class="ion-align-items-center bar_c">
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <span class="popup_title">Upload PDF</span> 
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
    <div id="container_fax" class="ion-top_padds ion-padding-end ion-padding-start fdfs">

    <ion-row class="ion-margin-top ion-margin-bottom">
        <ion-col size="4" class="opas">
            <p class="font_sels">Please select a file to upload</p>
        </ion-col>
        <ion-col size="3">
            <ion-button shape="round" class="next_btn">Select PDF</ion-button>
        </ion-col>
    </ion-row>

    <ion-row class="ion-margin-top ion-margin-bottom">
        <ion-col size="6">
            <div class="pdf_icons">
                <img src="assets/images/pdf_icon.svg" />
                <p class="font_sels">document.pdf</p>
            </div>
        </ion-col>
        <ion-col size="6">
            
        </ion-col>
    </ion-row>

    <ion-row class="ion-padding-top ion-padding-bottom weddas">
        <ion-col size="3"></ion-col>
        <ion-col size="3">
            <div class="ion_btn_next">
                <ion-button shape="round" class="next_btn">Done</ion-button>
            </div>
        </ion-col>

        <ion-col size="3">
            <div class="ion_btn_next">
                <ion-button shape="round" class="next_btn">Cancel</ion-button>
            </div>
        </ion-col>
        <ion-col size="3"></ion-col>
    </ion-row>

    </div>
  </ion-content>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, isPlatform, modalController  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Uploadpdf',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar
    
  },
  setup() {
      const router = useRouter();
      return { router, modalController };
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