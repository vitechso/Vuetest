<template>
   <ion-page>
      <div v-if="isDesktop">
         <ion-page>
            <ion-header class="ipad_topbar">
               <ion-toolbar>
                  <ion-row class="ion-align-items-center bar_c">
                     <ion-col size="6" class="ipad_cols">
                        <div class="ion-text-left ipad_flx">
                           <img @click="back" class="back-btn" src="assets/images/back-black.svg" />
                           <span class="popup_title">Add Credits</span>
                        </div>
                     </ion-col>
                     <ion-col size="4"></ion-col>
                     <ion-col size="2">
                        <div @click="cancel" class="close_popus">
                           <img src="assets/images/cross_icon.svg" />
                        </div>
                     </ion-col>
                  </ion-row>
               </ion-toolbar>
            </ion-header>

            <ion-content :fullscreen="true">
               <div class="EditCarD-block">
                  <ion-row class="ion-padding-top ion-justify-content-center">
                     <ion-col size="9">
                        <div class="add_titles">
                           <h4>
                              Please enter the amount you would like to add in your
                              account
                           </h4>
                        </div>
                     </ion-col>
                  </ion-row>

                  <ion-row class="ion-padding-top ion-justify-content-center">
                     <ion-col size="7">
                        <div lines="none" class="pdd_b account_desktop">
                           <input type="text" id="old_password" placeholder="Amount" class="user_nam" />
                           <div class="icon_in"><img src="assets/images/key.png" /></div>
                        </div>
                     </ion-col>
                  </ion-row>

                  <ion-row class="ion-justify-content-center ion-padding">
                     <ion-col size="12">
                        <div class="BtnBlock">
                           <ion-button shape="round" class="MakeDefault-btn">Add</ion-button>
                           <ion-button shape="round" type="default" @click="cancel"
                              class="MakeDefault-btn _gary-outline-btn">Cancel</ion-button>
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
   import {
      IonPage,
      IonHeader,
      IonContent,
      IonToolbar,
      isPlatform,
      IonButton,
      modalController,
      getPlatforms,
   } from "@ionic/vue";
   import {
      defineComponent
   } from "vue";
   import {
      useRouter
   } from "vue-router";
   import Transactionhistory from './Transactionhistory.vue';

   export default defineComponent({
      name: "AddCredits",
      components: {
         IonContent,
         IonHeader,
         IonPage,
         IonToolbar,
         IonButton,
      },
      setup() {
         const router = useRouter();
         return {
            router
         };
      },
      data() {
         return {
            styleClass: "",
            isDesktop: isPlatform("desktop"),
            isMobile: getPlatforms().indexOf("iphone") > -1 ||
               getPlatforms().indexOf("android") > -1,
            isIpad: getPlatforms().indexOf("ipad") > -1 ||
               getPlatforms().indexOf("tablet") > -1,
         };
      },
      methods: {
         cancel() {
            modalController.dismiss('cancel');
         },
         async back() {
            modalController.dismiss();
            const modal = await modalController.create({
               component: Transactionhistory,
               animated: false,
               cssClass: 'choosetem',
               componentProps: {
                  title: 'New Title'
               },
            })
            return modal.present();
         },
      },
   });
</script>

<style scoped></style>