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
                      <span class="title_top title_top_mobo">Transaction History</span>
                  </div>
                  <div class="TopHeader-icon">
                      
                  </div>
              </div>
          </ion-col>
      </ion-row>
  </ion-toolbar>
</ion-header>

  <ion-content :fullscreen="true" >
    <div id="container_fax">
        <div class="text_top ion-text-left ion-padding-top ion-padding-bottom">
            <p class="credit_bal">Credit Balance: <strong>€15.00</strong> </p>
        </div>
        
        <div class="fax_box history_details">
            <div class="inner_history_details">
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Order No:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p><strong>12009</strong></p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Order Date:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>10 January 2021</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Item:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>Fax 4 Recipients</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Cost:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p class="red_c">- €2.50</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Action:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <div class="action-icon">
                            <img src="assets/images/view.svg" width="33" class="view-icon"/>
                            <img src="assets/images/share.svg" width="23" class="share-icon"/>
                        </div>
                    </ion-col>
                </ion-row>
            </div>

            <div class="inner_history_details">
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Order No:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p><strong>12008</strong></p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Order Date:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>26 December 2020</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Item:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>Credits</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Cost:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p class="green_p">+ €20.00</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Action:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <div class="action-icon">
                            <img src="assets/images/view.svg" width="33" class="view-icon"/>
                            <img src="assets/images/share.svg" width="23" class="share-icon"/>
                        </div>
                    </ion-col>
                </ion-row>
            </div>

            <div class="inner_history_details">
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Order No:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p><strong>12007</strong></p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Order Date:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>15 December 2020</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Item:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>Fax 4 Recipients</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Cost:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p class="red_c">- €2.50</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Action:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <div class="action-icon">
                            <img src="assets/images/view.svg" width="33" class="view-icon"/>
                            <img src="assets/images/share.svg" width="23" class="share-icon"/>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
        </div>

    </div>
  </ion-content>
</ion-page>
</div>

<div v-if="isIpad">
<ion-page>

<ion-header class="header_am">
  <ion-toolbar class="header-top-ipad">
    <ion-row class="ion-align-items-center ion-padding-horizontal">
      <ion-col size="8" class="bars_hms">
        <div class="ion-text-center ins_han">
            <img @click="()=>router.push('/settings')" src="assets/images/back_btn.svg"/>
        </div>
        <div class="ion-text-left ipad_flx">
          <span class="title_top ipad_title_top">Transaction History</span> 
        </div>
      </ion-col>
      <ion-col size="4">
        <ion-buttons class="right_ipad">
            <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
        </ion-buttons>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>

<ion-content :fullscreen="true" class="trng-page-ipad" >
    <div id="container_fax">
        <div class="ipad_text_top ion-text-left ion-padding-top ion-padding-bottom desk_top_fless">
            <p>Credit Balance: €15.00</p>
        </div>

        <div class="main_iads fax_hn">
            <ion-row class="border_bm"> 
                <ion-col size="2">
                    <div class="peint_data_headings">
                        <h3>Order Number</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="peint_data_headings">
                        <h3>Order Date</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="peint_data_headings">
                        <h3>Item</h3>
                    </div>
                </ion-col>
                <ion-col size="2"> 
                    <div class="peint_data_headings ion-text-right">
                        <h3>Cost</h3>
                    </div>
                </ion-col>

                <ion-col size="2"> 
                    <div class="peint_data_headings ion-text-right">
                        <h3>Action</h3>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="border_bm">
                <ion-col size="2">
                    <div class="peint_inner_headings">
                        <h3><strong>12009</strong></h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="peint_inner_headings">
                        <h3>10 January 2021</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                     <div class="peint_inner_headings">
                        <h3>Fax 4 Recipients</h3>
                    </div>
                </ion-col>
                <ion-col size="2">
                    <div class="peint_inner_headings ion-text-right">
                        <h3><span class="red_p">- €2.50</span></h3>
                    </div>
                </ion-col>
                <ion-col size="2"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <!-- <h3>€0.50</h3> -->
                        <img class="delete_print_btns_01" src="assets/images/view_black.svg"/>
                        <img class="delete_print_btns_01" src="assets/images/share.svg"/>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="border_bm">
                <ion-col size="2">
                    <div class="peint_inner_headings">
                        <h3><strong>12009</strong></h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="peint_inner_headings">
                        <h3>10 January 2021</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                     <div class="peint_inner_headings">
                        <h3>Fax 4 Recipients</h3>
                    </div>
                </ion-col>
                <ion-col size="2">
                    <div class="peint_inner_headings ion-text-right">
                        <h3><span class="green_p">+ €20.00</span></h3>
                    </div>
                </ion-col>
                <ion-col size="2"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <!-- <h3>€0.50</h3> -->
                        <img class="delete_print_btns_01" src="assets/images/view_black.svg"/>
                        <img class="delete_print_btns_01" src="assets/images/share.svg"/>
                    </div>
                </ion-col>
            </ion-row>
        </div>
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
          <span class="popup_title">Transaction History</span> 
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
    <div id="container_fax">
        <div class="ipad_text_top ion-text-left ion-padding-top ion-padding-bottom desk_top_fless">
            <p>Credit Balance: <strong>€15.00</strong></p>
            <ion-button class="add_credis import_csv" @click="addCredit">Add Credit</ion-button>
        </div>

        <div class="main_iads fax_hn">
            <ion-row class="border_bm"> 
                <ion-col size="2">
                    <div class="peint_data_headings">
                        <h3>Order Number</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="peint_data_headings">
                        <h3>Order Date</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="peint_data_headings">
                        <h3>Item</h3>
                    </div>
                </ion-col>
                <ion-col size="2"> 
                    <div class="peint_data_headings ion-text-right">
                        <h3>Cost</h3>
                    </div>
                </ion-col>

                <ion-col size="2"> 
                    <div class="peint_data_headings ion-text-right">
                        <h3>Action</h3>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="border_bm">
                <ion-col size="2">
                    <div class="peint_inner_headings">
                        <h3><strong>12009</strong></h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="peint_inner_headings">
                        <h5>10 January 2021</h5>
                    </div>
                </ion-col>
                <ion-col size="3">
                     <div class="peint_inner_headings">
                        <h5>Fax 4 Recipients</h5>
                    </div>
                </ion-col>
                <ion-col size="2">
                    <div class="peint_inner_headings ion-text-right">
                        <h3><span class="red_p">- €2.50</span></h3>
                    </div>
                </ion-col>
                <ion-col size="2"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <!-- <h3>€0.50</h3> -->
                        <img class="delete_print_btns_01" src="assets/images/view_black.svg"/>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="border_bm">
                <ion-col size="2">
                    <div class="peint_inner_headings">
                        <h3><strong>12009</strong></h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="peint_inner_headings">
                        <h5>10 January 2021</h5>
                    </div>
                </ion-col>
                <ion-col size="3">
                     <div class="peint_inner_headings">
                        <h5>Fax 4 Recipients</h5>
                    </div>
                </ion-col>
                <ion-col size="2">
                    <div class="peint_inner_headings ion-text-right">
                        <h3><span class="green_p">+ €20.00</span></h3>
                    </div>
                </ion-col>
                <ion-col size="2"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <!-- <h3>€0.50</h3> -->
                        <img class="delete_print_btns_01" src="assets/images/view_black.svg"/>
                    </div>
                </ion-col>
            </ion-row>
        </div>
    </div>
</ion-content>

</ion-page>
</div>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, isPlatform, modalController, getPlatforms  } from '@ionic/vue'
import {add} from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import AddCredits from './AddCredits.vue'

export default defineComponent({
  name: 'Transactionhistory',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar
  },
  setup() {
      const router = useRouter();
      return { router, add };
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
    },

    async addCredit() {
         modalController.dismiss()
      const modal = await modalController.create({
          component: AddCredits,
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