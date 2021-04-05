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
                      <span class="title_top title_top_mobo">Upload PDF</span>
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

    <ion-content :fullscreen="true" class="back_white">
      <div id="container_fax" class="ion-padding-top ion-padding-end ion-padding-start fdfs upload-pdf-mobo">
        <ion-row class="ion-margin-top ion-margin-bottom">
            <ion-col size="7" class="opas">
                <p class="select-upload-text">Please select a file to upload</p>
            </ion-col>
            <ion-col size="5">
                <ion-button shape="round" class="next_btn select-pdf-btn">Select PDF</ion-button>
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
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
            <img @click="cancel" class="back-btn" src="assets/images/back-black.svg"/>
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
    <div id="container_fax" class="ion-padding-end ion-padding-start fdfs">

    <ion-row class="ion-margin-top ion-margin-bottom">
        <ion-col size="4" class="opas">
            <p class="font_sels">Please select a file to upload</p>
        </ion-col>
        <ion-col size="3">
            <ion-button shape="round" class="ok_btn">Select PDF</ion-button>
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

     <ion-row class="ion-margin-top">
                <ion-col size="4"></ion-col>
                <ion-col size="2">
                    <ion-button shape="round" class="ok_btn ion-padding-end">Update</ion-button>
                </ion-col>
                <ion-col size="2">
                    <ion-button shape="round" @click="cancel" class="cancel_btn ion-padding-start">Cancel</ion-button>
                </ion-col>
                <ion-col size="4"></ion-col>
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
            <img @click="cancel" class="back-btn" src="assets/images/back-black.svg"/>
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

  <ion-content :fullscreen="true" class="">
    <div id="container_fax" class="ion-top_padds ion-padding-end ion-padding-start fdfs">

        <ion-row class="ion-margin-top ion-margin-bottom ion-justify-content-center ion-align-items-center">
            <ion-col size="10" class="">
                <div class="inner_serhner">
                    <img src="assets/images/upload_pdf.svg" />
                    <p class="innasd">Drag and drop or <strong>browse</strong> your file</p>
                </div>
                <div class="maijn_uploads">
                    <div class="hnas">
                        <img class="doc_pdf" src="assets/images/pdf_icon.svg" />
                        <div class="_jmaas">
                            <p class="doc_name">Document.pdf</p>
                            <div class="process_bar"></div>
                            <p class="up_load_c">Uploaded 100%</p>
                        </div>
                        
                    </div>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="ion-justify-content-center ion-padding ion-margin-bottom">
            <ion-col size="12">
                <div class="BtnBlock">
                    <ion-button shape="round" class="MakeDefault-btn">Done</ion-button>
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
          isDesktop: isPlatform('desktop'),
          isMobile: getPlatforms().indexOf('iphone')>-1||getPlatforms().indexOf('android')>-1,
          isIpad:getPlatforms().indexOf('ipad')>-1||getPlatforms().indexOf('tablet')>-1,
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