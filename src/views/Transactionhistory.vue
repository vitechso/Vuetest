<template>

<ion-page> 
<div  v-if="!isIpad">
<ion-header class="header_am">
  <ion-toolbar>
    <ion-row class="ion-align-items-center">
        <ion-col size="1">
            <router-link to="/all-letters">    
                <div class="ion-text-center">
                    <img src="assets/images/back_btn.svg"/>
                </div>
            </router-link>
        </ion-col>
      <ion-col size="9">
        <div class="ion-text-left">
            <span class="title_top">Transaction History</span> 
        </div>
      </ion-col>
      <ion-col size="2">
         
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
                        <p class="red_c">+ €20.00</p>
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
</div>

<div v-if="isIpad">
<ion-header class="header_am">
  <ion-toolbar class="">
    <ion-row class="ion-align-items-center">
      <ion-col size="4" class="bars_hms">
        <div class="ion-text-center ins_han">
            <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
        </div>
        <div class="ion-text-left ipad_flx">
          <span class="title_top ipad_title_top">Transaction History</span> 
        </div>
      </ion-col>
      <ion-col size="6">
      </ion-col>
      <ion-col size="2">
        <ion-buttons class="right_ipad">
            <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
        </ion-buttons>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>
<ion-content :fullscreen="true" >
    <div id="container_fax">
        <div class="ipad_text_top ion-text-left ion-padding-top ion-padding-bottom">
            <p>Credit Balance: €15.00</p>
        </div>

        <div class="main_iads fax_hn">
            <ion-row class="border_bm"> 
                <ion-col size="3">
                    <div class="peint_data_headings">
                        <h3>Order Number</h3>
                    </div>
                </ion-col>
                <ion-col size="2">
                    <div class="peint_data_headings">
                        <h3>Order Date</h3>
                    </div>
                </ion-col>
                <ion-col size="2">
                    <div class="peint_data_headings">
                        <h3>Item</h3>
                    </div>
                </ion-col>
                <ion-col size="2"> 
                    <div class="peint_data_headings ion-text-center">
                        <h3>Cost</h3>
                    </div>
                </ion-col>

                <ion-col size="3"> 
                    <div class="peint_data_headings ion-text-right">
                        <h3>Action</h3>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="border_bm">
                <ion-col size="3">
                    <div class="peint_inner_headings">
                        <h3>12009</h3>
                    </div>
                </ion-col>
                <ion-col size="2">
                    <div class="peint_inner_headings">
                        <h3>10 January 2021</h3>
                    </div>
                </ion-col>
                <ion-col size="2">
                     <div class="peint_inner_headings">
                        <h3>Fax 4 Recipients</h3>
                    </div>
                </ion-col>
                <ion-col size="2">
                    <div class="peint_inner_headings ion-text-center">
                        <h3><span class="red_p">- €2.50</span></h3>
                    </div>
                </ion-col>
                <ion-col size="3"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <!-- <h3>€0.50</h3> -->
                        <img class="delete_print_btns_01" src="assets/images/view_black.svg"/>
                        <img class="delete_print_btns_01" src="assets/images/share.svg"/>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="border_bm">
                <ion-col size="3">
                    <div class="peint_inner_headings">
                        <h3>12009</h3>
                    </div>
                </ion-col>
                <ion-col size="2">
                    <div class="peint_inner_headings">
                        <h3>10 January 2021</h3>
                    </div>
                </ion-col>
                <ion-col size="2">
                     <div class="peint_inner_headings">
                        <h3>Fax 4 Recipients</h3>
                    </div>
                </ion-col>
                <ion-col size="2">
                    <div class="peint_inner_headings ion-text-center">
                        <h3><span class="green_p">+ €20.00</span></h3>
                    </div>
                </ion-col>
                <ion-col size="3"> 
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
</div>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, isPlatform  } from '@ionic/vue'
import {add} from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

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
          isIpad:isPlatform('ipad')
      }
  },
});
</script>

<style scoped>

</style>