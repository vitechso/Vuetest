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
      <ion-col size="9">
        <div class="ion-text-left">
          <span class="title_top">Choose Template</span> 
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
  <ion-content :fullscreen="true" >
    <div id="container_01">
        <div class="text_top ion-text-center ion-padding-top ion-padding-bottom">
            <p>Start with a blank document, choose a</p>
            <p>template or <strong>upload a pdf</strong></p>
        </div>

        <ion-row>
            <ion-col size="6">
                <div class="doc">
                </div>
                <div class="title_doc">
                    <h3>Blank Document</h3>
                </div>
            </ion-col>

            <ion-col size="6">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="6">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Change of Bank Details</h3>
                </div>
            </ion-col>

            <ion-col size="6">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Cancellation</h3>
                </div>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="6">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Resignation</h3>
                </div>
            </ion-col>

            <ion-col size="6">
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
  <ion-content :fullscreen="true">
   <div id="container_01" class="ipad_docs">
        <div class="text_top ion-text-center ion-padding-top ion-padding-bottom">
            <p>Start with a blank document, choose a template or <strong  @click="uploadpdf">upload a PDF</strong></p>
        </div>

        <ion-row>
            <ion-col size="4">
                <div class="doc">
                </div>
                <div class="title_doc">
                    <h3>Blank Document</h3>
                </div>
            </ion-col>

            <ion-col size="4" @click="() => {modalController.dismiss(); router.push('/writedocument')}">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>

            <ion-col size="4">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="4">
                <div class="doc">
                </div>
                <div class="title_doc">
                    <h3>Blank Document</h3>
                </div>
            </ion-col>

            <ion-col size="4">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>

            <ion-col size="4">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="4">
                <div class="doc">
                </div>
                <div class="title_doc">
                    <h3>Blank Document</h3>
                </div>
            </ion-col>

            <ion-col size="4">
                <div class="doc">
                    <img src="assets/images/normal_u1310.jpg"/>
                </div>
                <div class="title_doc">
                    <h3>Address Change</h3>
                </div>
            </ion-col>

            <ion-col size="4">
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

</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton,isPlatform,modalController } from '@ionic/vue'
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
    IonMenuButton
  },
  setup() {
      const router = useRouter();
      return { router, add, modalController };
  },
  data() {
      return {
          isIpad:isPlatform('ipad')
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

<style scoped>

</style>