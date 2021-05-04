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
                        <span class="title_top title_top_mobo">Choose Template</span>
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

<ion-content :fullscreen="true" >
    <div id="container_01">
        <div class="text_top ion-text-center ion-padding-top ion-padding-bottom">
            <p>Start with a blank document, choose a</p>
            <p>template or <strong @click="() => router.push('/Uploadpdf')">upload a pdf</strong></p>
        </div>

        <ion-row class="">
            <ion-col size="6" class="ion-no-padding pr-8">
                <div class="doc">
                </div>
                <div class="title_doc">
                    <h3>Blank Document</h3>
                </div>
            </ion-col>

            <ion-col size="6" class="ion-no-padding pl-8">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="6" class="ion-no-padding pr-8">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Change of Bank Details</h3>
                </div>
            </ion-col>

            <ion-col size="6" class="ion-no-padding pl-8">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Cancellation</h3>
                </div>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="6" class="ion-no-padding pr-8">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Resignation</h3>
                </div>
            </ion-col>

            <ion-col size="6" class="ion-no-padding pl-8">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Offer Letter</h3>
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
          <span class="popup_title">Choose Template</span> 
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
   <div id="container_01" class="ipad_docs">
        <div class="text_top ion-text-center ion-padding-top ion-padding-bottom">
            <p>Start with a blank document, choose a template or <strong  @click="uploadpdf">upload a PDF</strong></p>
        </div>

        <ion-row>
            <ion-col size="4" class="ion-padding">
                <div class="doc">
                </div>
                <div class="title_doc">
                    <h3>Blank Document</h3>
                </div>
            </ion-col>

            <ion-col size="4"  class="ion-padding" @click="() => {modalController.dismiss(); router.push('/writedocument')}">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>

            <ion-col size="4" class="ion-padding">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="4" class="ion-padding">
                <div class="doc">
                </div>
                <div class="title_doc">
                    <h3>Blank Document</h3>
                </div>
            </ion-col>

            <ion-col size="4" class="ion-padding">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>

            <ion-col size="4" class="ion-padding">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="4" class="ion-padding">
                <div class="doc">
                </div>
                <div class="title_doc">
                    <h3>Blank Document</h3>
                </div>
            </ion-col>

            <ion-col size="4" class="ion-padding">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>

            <ion-col size="4" class="ion-padding">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
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
          <span class="popup_title">Choose Template</span> 
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
   <div id="container_01" class="ipad_docs">
        <div class="text_top ion-text-center ion-padding-top ion-padding-bottom">
            <p>Start with a blank document, choose a template or <strong  @click="uploadpdf">upload a PDF</strong></p>
        </div>

        <ion-row class="ion-margin-bottom">
            <ion-col size="3">
                <div class="doc desktop_sizes">
                </div>
                <div class="title_doc">
                    <h3>Blank Document</h3>
                </div>
            </ion-col>

            <ion-col size="3" @click="() => {modalController.dismiss(); router.push('/writedocument')}">
                <div class="doc desktop_sizes">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>

            <ion-col size="3">
                <div class="doc desktop_sizes">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>
            <ion-col size="3">
                <div class="doc desktop_sizes">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="3">
                <div class="doc desktop_sizes">
                </div>
                <div class="title_doc">
                    <h3>Blank Document</h3>
                </div>
            </ion-col>

            <ion-col size="3">
                <div class="doc desktop_sizes">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>

            <ion-col size="3">
                <div class="doc desktop_sizes">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>

            <ion-col size="3">
                <div class="doc desktop_sizes">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
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
import { IonPage,IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton,isPlatform,modalController, IonRow, IonCol, getPlatforms  } from '@ionic/vue'
import {add} from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Uploadpdf from './Uploadpdf.vue'
export default defineComponent({
  name: 'Choosetemplate',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonRow,
    IonCol,
    
  },
  setup() {
      const router = useRouter();
      return { router, add, modalController };
  },
  data() {
      return {
        isDesktop: isPlatform('desktop'),
        isMobile: getPlatforms().indexOf('iphone')>-1||getPlatforms().indexOf('android')>-1,
        isIpad:getPlatforms().indexOf('ipad')>-1,
      }
  },
  methods:{
    cancel() {
        modalController.dismiss()
    },

    async uploadpdf() {
        modalController.dismiss()
      const modal = await modalController.create({
          component: Uploadpdf,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },

  }
});
</script>