<template>
<ion-page>
<div v-if="isMobile">
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
          <span class="title_top">Send Fax</span> 
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
    <div id="container_fax">
        <div class="text_top ion-text-center ion-padding-top ion-padding-bottom">
            <p>Please enter fax numbers of the</p>
            <p>recipients to send fax</p>
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
                        <p>€0.50</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Enter Fax Number:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <div class="fax_num">
                            <img src="assets/images/print.svg"/>
                            <ion-input type="text"></ion-input>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                    </ion-col>
                    <ion-col size="8">
                        <div class="delete_btn">
                            <a href="#"><img src="assets/images/delete_black.svg"/> Delete Recipient</a>
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
                        <p>€0.50</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Enter Fax Number:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <div class="fax_num">
                            <img src="assets/images/print.svg"/>
                            <ion-input type="text"></ion-input>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                    </ion-col>
                    <ion-col size="8">
                        <div class="delete_btn">
                            <a href="#"><img src="assets/images/delete_black.svg"/> Delete Recipient</a>
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
                        <p>€0.50</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Enter Fax Number:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <div class="fax_num">
                            <img src="assets/images/print.svg"/>
                            <ion-input type="text"></ion-input>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                    </ion-col>
                    <ion-col size="8">
                        <div class="delete_btn">
                            <a href="#"><img src="assets/images/delete_black.svg"/> Delete Recipient</a>
                        </div>
                    </ion-col>
                </ion-row>
            </div>

            <div class="total_nu">
                <ion-row class="num_tols">
                    <ion-col size="6">
                        <p>Total number of recipients</p>
                    </ion-col>
                    <ion-col size="6">
                        <p>3</p>
                    </ion-col>
                </ion-row>
                <ion-row class="g_total">
                    <ion-col size="6">
                        <p><strong>Grand Total</strong></p>
                    </ion-col>
                    <ion-col size="6">
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
<ion-header class="header_am">
  <ion-toolbar class="">
    <ion-row class="ion-align-items-center">
      <ion-col size="4" class="bars_hms">
        <div class="ion-text-center ins_han">
            <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
        </div>
        <div class="ion-text-left ipad_flx">
          <span class="title_top ipad_title_top">Send Fax</span> 
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
        <div class="ipad_text_top ion-text-center ion-padding-top ion-padding-bottom">
            <p>Please enter phone numbers of the recipients to send fax</p>
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
                <ion-col size="3">
                    <div class="peint_data_headings">
                        <h3>Enter Phone Number</h3>
                    </div>
                </ion-col>
                <ion-col size="1"> 
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
                        <h3>243 Park Hall Aveneues Kassel 11015 Germany</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="fax_num custom_fax_jm">
                        <img src="assets/images/print.svg"/>
                        <ion-input type="text"></ion-input>
                    </div>
                </ion-col>
                <ion-col size="1"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <h3>€0.50</h3>
                        <img class="delete_print_btns" src="assets/images/delete_black.svg"/>
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
                        <h3>13 Green Park Avenues Kassel 11015 Germany</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="fax_num custom_fax_jm">
                        <img src="assets/images/print.svg"/>
                        <ion-input type="text"></ion-input>
                    </div>
                </ion-col>
                <ion-col size="1"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <h3>€0.50</h3>
                        <img class="delete_print_btns" src="assets/images/delete_black.svg"/>
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
                        <h3>12 Model Town Road Berlin 11017 Germany</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="fax_num custom_fax_jm">
                        <img src="assets/images/print.svg"/>
                        <ion-input type="text"></ion-input>
                    </div>
                </ion-col>
                <ion-col size="1"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <h3>€0.50</h3>
                        <img class="delete_print_btns" src="assets/images/delete_black.svg"/>
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
                        <h3>133 Civil Lines GT Road Munich 11013 Germany</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="fax_num custom_fax_jm">
                        <img src="assets/images/print.svg"/>
                        <ion-input type="text"></ion-input>
                    </div>
                </ion-col>
                <ion-col size="1"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <h3>€0.50</h3>
                        <img class="delete_print_btns" src="assets/images/delete_black.svg"/>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="border_bm fill_colortotal">
                <ion-col size="8">
                </ion-col>
                <ion-col size="4"> 
                    <div class="total_num">
                        <h3>Total number of recipients</h3>
                        <h3>4</h3>
                    </div>
                </ion-col>
            </ion-row>


            <ion-row class="border_bm fill_colortotal">
                <ion-col size="8">
                </ion-col>
                <ion-col size="4"> 
                    <div class="total_num">
                        <h3><strong>Grand total</strong></h3>
                        <h3><strong>€2.00</strong></h3>
                    </div>
                </ion-col>
            </ion-row>
        </div>
        <ion-row class="ion-margin-top">
            <ion-col size="8"></ion-col>
            <ion-col size="4"> 
                <div class="ion_tabs_ipads">
                    <ion-button type="sumbit" shape="round" class="send_btn_m">Send</ion-button>
                </div>
            </ion-col>
        </ion-row>
    </div>
</ion-content>

</ion-page>
</div>

<div v-if="isDesktop">
<ion-page>
<ion-header class="ipad_topbar bordes_ipad">
        <ion-toolbar>
        <ion-row class="ion-align-items-center bar_c">
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <span class="popup_title">Send Fax</span> 
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
<ion-content :fullscreen="true" >
    <div id="container_fax">
        <div class="ipad_text_top ion-text-center ion-padding-top ion-padding-bottom">
            <p>Please enter phone numbers of the recipients to send fax</p>
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
                <ion-col size="3">
                    <div class="peint_data_headings">
                        <h3>Enter Phone Number</h3>
                    </div>
                </ion-col>
                <ion-col size="1"> 
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
                        <h3>243 Park Hall Aveneues Kassel 11015 Germany</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="fax_num custom_fax_jm">
                        <img src="assets/images/print.svg"/>
                        <ion-input type="text"></ion-input>
                    </div>
                </ion-col>
                <ion-col size="1"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <h3>€0.50</h3>
                        <img class="delete_print_btns" src="assets/images/delete_black.svg"/>
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
                        <h3>13 Green Park Avenues Kassel 11015 Germany</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="fax_num custom_fax_jm">
                        <img src="assets/images/print.svg"/>
                        <ion-input type="text"></ion-input>
                    </div>
                </ion-col>
                <ion-col size="1"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <h3>€0.50</h3>
                        <img class="delete_print_btns" src="assets/images/delete_black.svg"/>
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
                        <h3>12 Model Town Road Berlin 11017 Germany</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="fax_num custom_fax_jm">
                        <img src="assets/images/print.svg"/>
                        <ion-input type="text"></ion-input>
                    </div>
                </ion-col>
                <ion-col size="1"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <h3>€0.50</h3>
                        <img class="delete_print_btns" src="assets/images/delete_black.svg"/>
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
                        <h3>133 Civil Lines GT Road Munich 11013 Germany</h3>
                    </div>
                </ion-col>
                <ion-col size="3">
                    <div class="fax_num custom_fax_jm">
                        <img src="assets/images/print.svg"/>
                        <ion-input type="text"></ion-input>
                    </div>
                </ion-col>
                <ion-col size="1"> 
                    <div class="peint_inner_headings ion-text-right delete_btns">
                        <h3>€0.50</h3>
                        <img class="delete_print_btns" src="assets/images/delete_black.svg"/>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="border_bm fill_colortotal">
                <ion-col size="8">
                </ion-col>
                <ion-col size="4"> 
                    <div class="total_num">
                        <h3>Total number of recipients</h3>
                        <h3>4</h3>
                    </div>
                </ion-col>
            </ion-row>


            <ion-row class="border_bm fill_colortotal">
                <ion-col size="8">
                </ion-col>
                <ion-col size="4"> 
                    <div class="total_num">
                        <h3><strong>Grand total</strong></h3>
                        <h3><strong>€2.00</strong></h3>
                    </div>
                </ion-col>
            </ion-row>
        </div>
        <ion-row class="ion-margin-top">
            <ion-col size="8"></ion-col>
            <ion-col size="4"> 
                <div class="ion_tabs_ipads">
                    <ion-button type="sumbit" shape="round" class="send_btn_m">Send</ion-button>
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
import { IonPage,IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton, isPlatform, modalController } from '@ionic/vue'
import {add} from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Sendfax',
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
      return { router, add };
  },
  data() {
      return {
          styleClass:"",
          isIpad:isPlatform('ipad'),
          isDesktop: isPlatform('desktop'),
          isMobile: isPlatform('mobile'),
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