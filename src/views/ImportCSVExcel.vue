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
                      <span class="title_top title_top_mobo">Import CSV/Excel</span>
                  </div>
                  <div class="TopHeader-icon">
                      
                  </div>
              </div>
          </ion-col>
      </ion-row>
  </ion-toolbar>
</ion-header>

  <ion-content :fullscreen="true" class="back_white">
    <div id="container_fax" class="ion-padding-end ion-padding-start fdfs upload-pdf-mobo">

    <ion-row class="ion-margin-top ion-margin-bottom slide_fils d-flex ion-align-items-center">
        <ion-col size="7" class="ion-no-padding">
          <p class="select-upload-text">Please select a file to upload</p>
        </ion-col>
        <ion-col size="5" class="ion-no-padding ion-text-right">
            <ion-button class="next_btn select-pdf-btn" shape="round" type="button">Select File</ion-button>
        </ion-col>
    </ion-row>

    <ion-row class="">
      <ion-col size="6" class="ion-no-padding">
          <div class="pdf_icons">
              <img src="assets/images/csv.svg"/>
              <p class="font_sels">Contacts.csv</p>
          </div>
      </ion-col>
    </ion-row>

    <ion-row class="ion-justify-content-center ion-padding ion-margin-bottom mt-5">
        <ion-col size="12">
            <div class="BtnBlock">
                <ion-button shape="round" class="next_btn">Done</ion-button>
                <ion-button shape="round" type="default" @click="()=>router.push('/choose-template')" class="next_btn _gary-outline-btn">Cancel</ion-button>
            </div>
        </ion-col>
    </ion-row>

    </div>
  </ion-content>
</ion-page>
</div>

<div v-if="isIpad">
<ion-page>
<ion-header class="ipad_topbar bordes_ipad">
  <ion-toolbar>
    <ion-row class="ion-align-items-center bar_c">
      <ion-col size="8" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <img @click="cancel" class="back-btn" src="assets/images/back-black.svg"/>
          <span class="popup_title">Import CSV/Excel</span> 
        </div>
      </ion-col>
      
      <ion-col size="4">
        <div @click="cancel" class="close_popus">
            <img src="assets/images/cross_icon.svg"/>
        </div>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>

<ion-content :fullscreen="true" class="back_white dark333">
    <div id="container_fax" class="ion-padding-end ion-padding-start fdfs">

      <ion-row class="ion-margin-top ion-margin-bottom">
          <ion-col size="12" class="opas">
              <p class="font_sels select-upload-text-ipad">Please select a file to upload</p>
              <ion-button shape="round" class="next_btn upload-btn ion-margin-start">Select File</ion-button>
          </ion-col>
      </ion-row>

      <ion-row class="ion-margin-top ion-margin-bottom">
          <ion-col size="12">
              <div class="pdf_icons">
                  <img src="assets/images/pdf_icon.svg" />
                  <p class="font_sels">Contacts.csv</p>
              </div>
          </ion-col>
      </ion-row>

      <ion-row class="ion-justify-content-center ion-padding mt-5">
          <ion-col size="12">
              <div class="BtnBlock btn-176-tab">
                  <ion-button shape="round" class="MakeDefault-btn">Done</ion-button>
                  <ion-button shape="round" type="default" @click="cancel" class="MakeDefault-btn _gary-outline-btn">Cancel</ion-button>
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
          <img @click="back" class="back-btn" src="assets/images/back-black.svg"/>
          <span class="popup_title">Import CSV/Excel</span> 
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

  <ion-content :fullscreen="true" class="back_white_f2">
    <div id="container_fax" class="ion-top_padds ion-padding-end ion-padding-start fdfs">

      <ion-row class="ion-margin-top ion-margin-bottom ion-padding-bottom ion-justify-content-center ion-align-items-center">
        <ion-col size="10" class="">
            <div class="inner_serhner">
                <img src="assets/images/upload_pdf.svg" />
                <p class="innasd">Drag and drop or <strong>browse</strong> your file</p>
            </div>
            <div class="maijn_uploads">
                <div class="hnas">
                    <img class="doc_pdf" src="assets/images/contact_boocs.svg" />
                    <div class="_jmaas">
                        <p class="doc_name">Contacts.CSV</p>
                        <div class="process_bar"></div>
                        <div class="process-result-info">
                          <p class="prcss-result">155 Contacts Imported</p>
                          <p class="up_load_c">Uploaded 100%</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </ion-col>
      </ion-row>

      <ion-row class="ion-justify-content-center ion-padding ion-margin-vertical">
          <ion-col size="12">
              <div class="BtnBlock">
                  <ion-button shape="round" class="MakeDefault-btn">Ok</ion-button>
                  <ion-button shape="round" type="default" @click="cancel" class="MakeDefault-btn _gary-outline-btn">Cancel</ion-button>
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
import { IonPage,IonHeader, IonContent, IonToolbar, isPlatform, modalController, getPlatforms  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Contacts from './Contacts.vue';

export default defineComponent({
  name: 'ImportCSVExcel',
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
          isDesktop: isPlatform('desktop'),
          isMobile: getPlatforms().indexOf('iphone')>-1||getPlatforms().indexOf('android')>-1,
          isIpad:getPlatforms().indexOf('ipad')>-1,
      }
  },
  methods:{
    async back() {
        modalController.dismiss();
         const modal = await modalController.create({
          component: Contacts,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },

    cancel(){
      modalController.dismiss();
    }
  }
});
</script>

<style scoped>

</style>