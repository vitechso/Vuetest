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
                           <span class="popup_title">Add Payment Method</span>
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

            <ion-content :fullscreen="true ">
               <ion-row class="ion-padding">
                  <ion-col size="12">
                     <div class="AddPayment-MethodBlock">
                        <div class="PaymentCard-box" @click="select('paypal')">
                           <div :class="type == 'paypal'?'active-Cardbox':''" class="card-img-box">
                              <img src="assets/images/PayPal.svg" />
                           </div>
                           <h2>Paypal</h2>
                        </div>

                        <div class="PaymentCard-box" @click="select('editcard')">
                           <div :class="type == 'editcard'?'active-Cardbox':''" class="card-img-box CreditCard-img">
                              <img src="assets/images/paymemt.svg" />
                           </div>
                           <h2>Credit/Debit Card</h2>
                        </div>
                     </div>
                  </ion-col>
               </ion-row>

               <ion-row class="ion-justify-content-center ion-padding ion-margin-vertical">
                  <ion-col size="12">
                     <div class="BtnBlock">
                        <ion-button @click="next" :disabled="unselected" shape="round" class="MakeDefault-btn">Next
                        </ion-button>
                     </div>
                  </ion-col>
               </ion-row>

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
      modalController,
      getPlatforms
   } from '@ionic/vue'
   import {
      defineComponent
   } from 'vue';
   import {
      useRouter
   } from 'vue-router';
   import Paypal from './Paypal.vue';
   import EditCardDetails from './EditCardDetails.vue';
   import PaymentMethods from './PaymentMethods.vue';

   export default defineComponent({
      name: 'AddPaymentMethod',
      components: {
         IonContent,
         IonHeader,
         IonPage,
         IonToolbar
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
            isDesktop: isPlatform('desktop'),
            isMobile: getPlatforms().indexOf('iphone') > -1 || getPlatforms().indexOf('android') > -1,
            isIpad: getPlatforms().indexOf('ipad') > -1,
            unselected: true,
            type: ''
         }
      },
      methods: {
         cancel() {
            modalController.dismiss('cancel')
         },

         select(type: any) {
            this.type = type;
            this.unselected = false;
         },

         next() {
            if (this.type == 'paypal') {
               this.paypal()
            } else {
               this.editcard()
            }
         },

         async paypal() {
            //modalController.dismiss()
            const modal = await modalController.create({
               component: Paypal,
               cssClass: 'choosetem',
               animated: false,
               componentProps: {
                  title: 'New Title'
               },
            });
            modal.onDidDismiss().then((res) => {
               if (res.data === 'cancel') {
                  modalController.dismiss('cancel');
               }
            })
            return modal.present();
         },


         async editcard() {
            //modalController.dismiss()
            const modal = await modalController.create({
               component: EditCardDetails,
               cssClass: 'choosetem',
               animated: false,
               componentProps: {
                  title: 'New Title'
               },
            });
            modal.onDidDismiss().then((res) => {
               if (res.data === 'cancel') {
                  modalController.dismiss('cancel');
               }
            })
            return modal.present();
         },
         async back() {
            modalController.dismiss()
            //   const modal = await modalController.create({
            //     component: PaymentMethods,
            //     cssClass: 'choosetem',
            //     componentProps: {
            //       title: 'New Title'
            //     },
            //   })
            // return modal.present();
         },

      },
   });
</script>

<style scoped>

</style>