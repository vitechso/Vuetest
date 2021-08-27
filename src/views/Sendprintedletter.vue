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
                              <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg" />
                              <span class="title_top title_top_mobo">Send Printed Letter</span>
                           </div>
                           <div class="TopHeader-icon">
                              <ion-buttons class="menu-btn header-icon">
                                 <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg" />
                                 </ion-menu-button>
                              </ion-buttons>
                           </div>
                        </div>
                     </ion-col>
                  </ion-row>
               </ion-toolbar>
            </ion-header>

            <ion-content :fullscreen="true">
               <div id="container_fax">
                  <div class="text_top ion-text-center ion-padding-top ion-padding-bottom">
                     <p>Below are the details of recipients of</p>
                     <p>printed letter</p>
                  </div>

                  <div class="fax_box">
                     <div class="inner_details">
                        <ion-row class="row_01">
                           <ion-col size="4">
                              <p><strong>Name:</strong></p>
                           </ion-col>
                           <ion-col size="8">
                              <p>Andrew Symonds</p>
                           </ion-col>
                        </ion-row>
                        <ion-row class="row_01">
                           <ion-col size="4">
                              <p><strong>Address:</strong></p>
                           </ion-col>
                           <ion-col size="8">
                              <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                           </ion-col>
                        </ion-row>
                        <ion-row class="row_01">
                           <ion-col size="4">
                              <p><strong>Cost:</strong></p>
                           </ion-col>
                           <ion-col size="8">
                              <p class="green_p">€0.50</p>
                           </ion-col>
                        </ion-row>
                        <ion-row class="row_01">
                           <ion-col size="4">
                           </ion-col>
                           <ion-col size="8">
                              <div class="delete_btn">
                                 <a href="#"><img src="assets/images/delete_black.svg" /><span>Delete
                                       Recipient</span></a>
                              </div>
                           </ion-col>
                        </ion-row>
                     </div>

                     <div class="inner_details">
                        <ion-row class="row_01">
                           <ion-col size="4">
                              <p><strong>Name:</strong></p>
                           </ion-col>
                           <ion-col size="8">
                              <p>Andrew Symonds</p>
                           </ion-col>
                        </ion-row>
                        <ion-row class="row_01">
                           <ion-col size="4">
                              <p><strong>Address:</strong></p>
                           </ion-col>
                           <ion-col size="8">
                              <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                           </ion-col>
                        </ion-row>
                        <ion-row class="row_01">
                           <ion-col size="4">
                              <p><strong>Cost:</strong></p>
                           </ion-col>
                           <ion-col size="8">
                              <p class="red_c">-€0.50</p>
                           </ion-col>
                        </ion-row>
                        <ion-row class="row_01">
                           <ion-col size="4">
                           </ion-col>
                           <ion-col size="8">
                              <div class="delete_btn">
                                 <a href="#"><img src="assets/images/delete_black.svg" /><span>Delete
                                       Recipient</span></a>
                              </div>
                           </ion-col>
                        </ion-row>
                     </div>


                     <div class="inner_details">
                        <ion-row class="row_01">
                           <ion-col size="4">
                              <p><strong>Name:</strong></p>
                           </ion-col>
                           <ion-col size="8">
                              <p>Andrew Symonds</p>
                           </ion-col>
                        </ion-row>
                        <ion-row class="row_01">
                           <ion-col size="4">
                              <p><strong>Address:</strong></p>
                           </ion-col>
                           <ion-col size="8">
                              <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                           </ion-col>
                        </ion-row>
                        <ion-row class="row_01">
                           <ion-col size="4">
                              <p><strong>Cost:</strong></p>
                           </ion-col>
                           <ion-col size="8">
                              <p class="green_p">€0.50</p>
                           </ion-col>
                        </ion-row>
                        <ion-row class="row_01">
                           <ion-col size="4">
                           </ion-col>
                           <ion-col size="8">
                              <div class="delete_btn">
                                 <a href="#"><img src="assets/images/delete_black.svg" /><span>Delete
                                       Recipient</span></a>
                              </div>
                           </ion-col>
                        </ion-row>
                     </div>

                     <div class="total_nu">
                        <ion-row class="num_tols row_01">
                           <ion-col size="4">
                              <p>Total number of recipients</p>
                           </ion-col>
                           <ion-col size="8">
                              <p>3</p>
                           </ion-col>
                        </ion-row>
                        <ion-row class="g_total row_01">
                           <ion-col size="4">
                              <p><strong>Grand Total</strong></p>
                           </ion-col>
                           <ion-col size="8">
                              <p><strong>€1.50</strong></p>
                           </ion-col>
                        </ion-row>
                     </div>
                  </div>

                  <div class="send_btn">
                     <ion-button type="sumbit" shape="round" class="send_btn_m">Send</ion-button>
                  </div>
               </div>
            </ion-content>
         </ion-page>
      </div>

      <div v-if="isIpad">
         <ion-page>
            <ion-header class="header_am ">
               <ion-toolbar class="header-top-ipad">
                  <ion-row class="ion-align-items-center ion-padding-end ion-padding-start">
                     <ion-col size="10" class="bars_hms">
                        <div class="ion-text-center ins_han">
                           <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg" />
                        </div>
                        <div class="ion-text-left ipad_flx">
                           <span class="title_top ipad_title_top">Send Printed Letter</span>
                        </div>
                     </ion-col>

                     <ion-col size="2" class="">
                        <ion-buttons class="right_ipad">
                           <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg" />
                           </ion-menu-button>
                        </ion-buttons>
                     </ion-col>
                  </ion-row>
               </ion-toolbar>
            </ion-header>

            <ion-content :fullscreen="true">
               <div id="container_fax">
                  <div class="ipad_text_top ion-text-center ion-padding-top ion-padding-bottom">
                     <p>Below are the details of recipients of printed letter</p>
                  </div>

                  <div class="main_iads fax_hn">
                     <ion-row class="border_bm">
                        <ion-col size="3">
                           <div class="peint_data_headings">
                              <h3>Name</h3>
                           </div>
                        </ion-col>
                        <ion-col size="5">
                           <div class="peint_data_headings">
                              <h3>Address</h3>
                           </div>
                        </ion-col>

                        <ion-col size="2"></ion-col>

                        <ion-col size="2">
                           <div class="peint_data_headings ion-text-right">
                              <h3>Cost</h3>
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="border_bm">
                        <ion-col size="3">
                           <div class="peint_inner_headings">
                              <h3>Andrew Symonds</h3>
                           </div>
                        </ion-col>
                        <ion-col size="5">
                           <div class="peint_inner_headings">
                              <h5>243 Park Hall Aveneues Kassel 11015 Germany</h5>
                           </div>
                        </ion-col>

                        <ion-col size="2" class=""></ion-col>

                        <ion-col size="2">
                           <div class="peint_inner_headings ion-text-right delete_btns">
                              <h3>€0.50</h3>
                              <img class="delete_print_btns" src="assets/images/delete_black.svg" />
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="border_bm">
                        <ion-col size="3">
                           <div class="peint_inner_headings">
                              <h3>Andy Bickel</h3>
                           </div>
                        </ion-col>
                        <ion-col size="5">
                           <div class="peint_inner_headings">
                              <h5>13 Green Park Avenues Kassel 11015 Germany</h5>
                           </div>
                        </ion-col>

                        <ion-col size="2" class=""></ion-col>

                        <ion-col size="2">
                           <div class="peint_inner_headings ion-text-right delete_btns">
                              <h3>€0.50</h3>
                              <img class="delete_print_btns" src="assets/images/delete_black.svg" />
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="border_bm">
                        <ion-col size="3">
                           <div class="peint_inner_headings">
                              <h3>Bryan Adams</h3>
                           </div>
                        </ion-col>
                        <ion-col size="5">
                           <div class="peint_inner_headings">
                              <h5>12 Model Town Road Berlin 11017 Germany</h5>
                           </div>
                        </ion-col>

                        <ion-col size="2" class=""></ion-col>

                        <ion-col size="2">
                           <div class="peint_inner_headings ion-text-right delete_btns">
                              <h3>€0.50</h3>
                              <img class="delete_print_btns" src="assets/images/delete_black.svg" />
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="border_bm">
                        <ion-col size="3">
                           <div class="peint_inner_headings">
                              <h3>Benjamin Williams</h3>
                           </div>
                        </ion-col>
                        <ion-col size="5">
                           <div class="peint_inner_headings">
                              <h5>133 Civil Lines GT Road Munich 11013 Germany</h5>
                           </div>
                        </ion-col>

                        <ion-col size="2" class=""></ion-col>

                        <ion-col size="2">
                           <div class="peint_inner_headings ion-text-right delete_btns">
                              <h3>€0.50</h3>
                              <img class="delete_print_btns" src="assets/images/delete_black.svg" />
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="border_bm bg-white-light total-num-count">
                        <ion-col size="10" class="ion-text-right">
                           <h3>Total number of recipients</h3>
                        </ion-col>

                        <ion-col size="2" class="ion-text-center ion-padding-start">
                           <h3>4</h3>
                        </ion-col>
                     </ion-row>


                     <ion-row class="border_bm fill_colortotal total-num-count">
                        <ion-col size="10" class="ion-text-right">
                           <h3><strong>Grand total</strong></h3>
                        </ion-col>

                        <ion-col size="2" class="ion-text-center ion-padding-start">
                           <h3><strong>€2.00</strong></h3>
                        </ion-col>
                     </ion-row>
                  </div>

                  <ion-row class="ion-justify-content-center ion-padding-vertical ion-margin-vertical">
                     <ion-col size="12" class="ion-no-padding">
                        <div class="BtnBlock ion-justify-content-end btn-176-tab">
                           <ion-button shape="round" class="MakeDefault-btn">Send</ion-button>
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
                           <span class="popup_title">Send printed letter</span>
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
               <div id="container_fax">
                  <div class="ipad_text_top ion-text-center ion-padding-top ion-padding-bottom">
                     <p>Below are the details of recipients of printed letter</p>
                  </div>

                  <div class="main_iads Desktop-print-data">
                     <ion-row class="border_bm">
                        <ion-col size="3">
                           <div class="peint_data_headings">
                              <h3>Name</h3>
                           </div>
                        </ion-col>
                        <ion-col size="7">
                           <div class="peint_data_headings">
                              <h3>Address</h3>
                           </div>
                        </ion-col>
                        <ion-col size="2">
                           <div class="peint_data_headings ion-text-right">
                              <h3>Cost</h3>
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="border_bm">
                        <ion-col size="3">
                           <div class="peint_inner_headings">
                              <h3>Andrew Symonds</h3>
                           </div>
                        </ion-col>
                        <ion-col size="7">
                           <div class="peint_inner_headings">
                              <h5>243 Park Hall Aveneues Kassel 11015 Germany</h5>
                           </div>
                        </ion-col>
                        <ion-col size="2">
                           <div class="peint_inner_headings ion-text-right delete_btns">
                              <h3>€0.50</h3>
                              <img class="delete_print_btns" src="assets/images/delete_black.svg" />
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="border_bm">
                        <ion-col size="3">
                           <div class="peint_inner_headings">
                              <h3>Andy Bickel</h3>
                           </div>
                        </ion-col>
                        <ion-col size="7">
                           <div class="peint_inner_headings">
                              <h5>13 Green Park Avenues Kassel 11015 Germany</h5>
                           </div>
                        </ion-col>
                        <ion-col size="2">
                           <div class="peint_inner_headings ion-text-right delete_btns">
                              <h3>€0.50</h3>
                              <img class="delete_print_btns" src="assets/images/delete_black.svg" />
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="border_bm">
                        <ion-col size="3">
                           <div class="peint_inner_headings">
                              <h3>Bryan Adams</h3>
                           </div>
                        </ion-col>
                        <ion-col size="7">
                           <div class="peint_inner_headings">
                              <h5>12 Model Town Road Berlin 11017 Germany</h5>
                           </div>
                        </ion-col>
                        <ion-col size="2">
                           <div class="peint_inner_headings ion-text-right delete_btns">
                              <h3>€0.50</h3>
                              <img class="delete_print_btns" src="assets/images/delete_black.svg" />
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="border_bm">
                        <ion-col size="3">
                           <div class="peint_inner_headings">
                              <h3>Benjamin Williams</h3>
                           </div>
                        </ion-col>
                        <ion-col size="7">
                           <div class="peint_inner_headings">
                              <h5>133 Civil Lines GT Road Munich 11013 Germany</h5>
                           </div>
                        </ion-col>
                        <ion-col size="2">
                           <div class="peint_inner_headings ion-text-right delete_btns">
                              <h3>€0.50</h3>
                              <img class="delete_print_btns" src="assets/images/delete_black.svg" />
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="border_bm bg-white-light">
                        <ion-col size="6">
                        </ion-col>
                        <ion-col size="6">
                           <div class="total_num">
                              <h3>Total number of recipients</h3>
                              <h3>4</h3>
                           </div>
                        </ion-col>
                     </ion-row>


                     <ion-row class="border_bm fill_colortotal">
                        <ion-col size="6">
                        </ion-col>
                        <ion-col size="6">
                           <div class="total_num">
                              <h3><strong>Grand total</strong></h3>
                              <h3><strong>€2.00</strong></h3>
                           </div>
                        </ion-col>
                     </ion-row>
                  </div>

                  <ion-row class="ion-justify-content-center ion-padding ion-margin-vertical">
                     <ion-col size="12">
                        <div class="BtnBlock">
                           <ion-button shape="round" class="MakeDefault-btn" @click="documentSend">Send</ion-button>
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
      IonButtons,
      IonButton,
      IonMenuButton,
      isPlatform,
      modalController,
      getPlatforms,
      alertController
   } from '@ionic/vue'
   import {
      add
   } from 'ionicons/icons';
   import {
      defineComponent
   } from 'vue';
   import {
      useRouter
   } from 'vue-router';

   export default defineComponent({
      name: 'Sendprintedletter',
      components: {
         IonContent,
         IonHeader,
         IonPage,
         IonToolbar,
         IonButtons,
         IonButton,
         IonMenuButton
      },
      setup() {
         const router = useRouter();
         return {
            router,
            add
         };
      },
      data() {
         return {
            styleClass: "",
            isDesktop: isPlatform('desktop'),
            isMobile: getPlatforms().indexOf('iphone') > -1 || getPlatforms().indexOf('android') > -1,
            isIpad: getPlatforms().indexOf('ipad') > -1,
         }
      },
      methods: {
         cancel() {
            modalController.dismiss('cancel')
         },
         async documentSend() {
            modalController.dismiss()
            const alert = await alertController
               .create({
                  cssClass: 'document_send',
                  message: '<div class="send_doxs"><img src="assets/images/check_send.svg"/><p>Your Document has been <br> sucessfully sent</p></div>',
               });
            return alert.present();
         },
      }
   });
</script>

<style scoped>

</style>