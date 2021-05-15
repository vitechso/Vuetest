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
                        <span class="title_top title_top_mobo">Settings</span>
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

  <ion-content :fullscreen="true">
    <div class="main_setting ion-margin">
            <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
                <div slot="start" class="icons_s">
                    <img src="assets/images/prices.svg"/>
                </div>
                <ion-label>Prices</ion-label>
                <div slot="end" class="control_cin ens_sd">
                    <img src="assets/images/right_arrow.svg"/>
                </div>
            </ion-item>
        
            <ion-item @click="() => router.push('/transaction-history')" lines="none" class="list_cons setting_bs ion-margin-bottom">
                <div slot="start" class="icons_s">
                    <img src="assets/images/transaction_h.svg"/>
                </div>
                <ion-label>Transaction History</ion-label>
                <div slot="end" class="control_cin ens_sd">
                    <img src="assets/images/right_arrow.svg"/>
                </div>
            </ion-item>

        
        <ion-item @click="() => router.push('/change-password')" lines="none" class="list_cons setting_bs ion-margin-bottom">
            <div slot="start" class="icons_s">
                <img src="assets/images/change_pass.svg"/>
            </div>
            <ion-label>Change Password</ion-label>
            <div slot="end" class="control_cin ens_sd">
                <img src="assets/images/right_arrow.svg"/>
            </div>
        </ion-item>
        

        
            <ion-item @click="() => router.push('/security')" lines="none" class="list_cons setting_bs ion-margin-bottom">
                <div slot="start" class="icons_s">
                    <img src="assets/images/security.svg"/>
                </div>
                <ion-label>Security</ion-label>
                <div slot="end" class="control_cin ens_sd">
                    <img src="assets/images/right_arrow.svg"/>
                </div>
            </ion-item>
        

        
            <ion-item  lines="none" class="list_cons setting_bs ion-margin-bottom">
                <div slot="start" class="icons_s">
                    <img src="assets/images/terms.svg"/>
                </div>
                <ion-label>Terms</ion-label>
                <div slot="end" class="control_cin ens_sd">
                    <img src="assets/images/right_arrow.svg"/>
                </div>
            </ion-item>
        

        
            <ion-item @click="() => router.push('/privacy')" lines="none" class="list_cons setting_bs ion-margin-bottom">
                <div slot="start" class="icons_s">
                    <img src="assets/images/privacy.svg"/>
                </div>
                <ion-label>Privacy</ion-label>
                <div slot="end" class="control_cin ens_sd">
                    <img src="assets/images/right_arrow.svg"/>
                </div>
            </ion-item>
        

        <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
            <div slot="start" class="icons_s">
                <img src="assets/images/legal.svg"/>
            </div>
            <ion-label>Legal Notice</ion-label>
            <div slot="end" class="control_cin ens_sd">
                <img src="assets/images/right_arrow.svg"/>
            </div>
        </ion-item>

        <ion-item @click="() => router.push('/rating-feedback')" lines="none" class="list_cons setting_bs ion-margin-bottom">
            <div slot="start" class="icons_s">
                <img src="assets/images/ratting.svg"/>
            </div>
            <ion-label>Rating & Feedback</ion-label>
            <div slot="end" class="control_cin ens_sd">
                <img src="assets/images/right_arrow.svg"/>
            </div>
        </ion-item>

        <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
            <div slot="start" class="icons_s">
                <img src="assets/images/Dark_mode.svg"/>
            </div>
            <ion-label>Dark Mode</ion-label>

            <!-- <div class="mark_toggle">
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider"></span>
                </label>
            </div> -->
            <ion-toggle @ionChange="changeTheme($event)"  id="themeToggle" slot="end"></ion-toggle>
        </ion-item>

        <ion-row class="ion-margin-top">
            <ion-col size="12">
                <div class="suppoets">
                    <img src="assets/images/support_icon.svg"/>
                    <h3>Help & Support</h3>
                    <ion-button shape="round" class="next_btn">Logout</ion-button>
                    <p class="app_vers">App Version: 1879.2021</p>
                </div>
            </ion-col>
        </ion-row>

    </div>
  </ion-content>

</ion-page>
</div>

<div v-if="isIpad">
<ion-page>

<ion-header class="header_am">
    <ion-toolbar class="header-top-ipad ">
        <ion-row class="ion-align-items-center ion-padding-horizontal">
            <ion-col size="10" class="bars_hms">
                <div class="ion-text-center ins_han">
                    <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
                </div>
                <div class="ion-text-left ipad_flx">
                    <span class="title_top ipad_title_top">Settings</span> 
                </div>
            </ion-col>
      
            <ion-col size="2" class="">
                <ion-buttons class="right_ipad">
                    <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
                </ion-buttons>
            </ion-col>
        </ion-row>
    </ion-toolbar>
</ion-header>

<ion-content :fullscreen="true" class="setting-page-ipad">
    <div class="main_setting ion-padding ion-margin-top hnas_ipads">
        <ion-row>
            <ion-col size="6" class="ion-padding-end">
                <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/prices.svg"/>
                    </div>
                    <ion-label>Prices</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>

            <ion-col size="6" class="ion-padding-start">
                <ion-item @click="() => router.push('/transaction-history')" lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/transaction_h.svg"/>
                    </div>
                    <ion-label>Transaction History</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>
        </ion-row>
                
        <ion-row>
            <ion-col size="6" class="ion-padding-end">
                <ion-item @click="() => router.push('/change-password')" lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/change_pass.svg"/>
                    </div>
                    <ion-label>Change Password</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>

            <ion-col class="ion-padding-start">
                <ion-item @click="() => router.push('/security')" lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/security.svg"/>
                    </div>
                    <ion-label>Security</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col size="6" class="ion-padding-end">
                <ion-item  lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/terms.svg"/>
                    </div>
                    <ion-label>Terms</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>

            <ion-col size="6" class="ion-padding-start">
                <ion-item @click="() => router.push('/privacy')" lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/privacy.svg"/>
                    </div>
                    <ion-label>Privacy</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>
        </ion-row>    

        <ion-row>
            <ion-col size="6" class="ion-padding-end">
                <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/legal.svg"/>
                    </div>
                    <ion-label>Legal Notice</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>

            <ion-col class="ion-padding-start">
                <ion-item @click="() => router.push('/rating-feedback')" lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/ratting.svg"/>
                    </div>
                    <ion-label>Rating & Feedback</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>
        </ion-row>    

        <ion-row>
            <ion-col size="6" class="ion-padding-end">
                <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/Dark_mode.svg"/>
                    </div>
                    <ion-label>Dark Mode</ion-label>
                    <ion-toggle @ionChange="changeTheme($event)"  id="themeToggle" slot="end"></ion-toggle>
                </ion-item>
            </ion-col>
        </ion-row>    
                
        <ion-row class="ion-margin-top">
            <ion-col size="12">
                <div class="suppoets ipad_spot btn-176-tab">
                    <img src="assets/images/support_icon.svg"/>
                    <h3>Help & Support</h3>
                    <ion-button shape="round" class="sign_ups">Logout</ion-button>
                    <p class="app_vers">App Version: 1879.2021</p>
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
          <span class="popup_title">Settings</span> 
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
    <div class="main_setting ion-margin ion-padding-top hnas_ipads deskyop_hmma">
        <ion-row>
            <ion-col size="6" class="ion-padding-end">
                <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/prices.svg"/>
                    </div>
                    <ion-label>Prices</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>

            <ion-col size="6" class="ion-padding-start">
                <ion-item @click="transaction" lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/transaction_h.svg"/>
                    </div>
                    <ion-label>Transaction History</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>
        </ion-row>
                
        <ion-row>
            <ion-col size="6" class="ion-padding-end">
                <ion-item @click="changepass" lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/change_pass.svg"/>
                    </div>
                    <ion-label>Change Password</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>

            <ion-col size="6" class="ion-padding-start">
                <ion-item @click="payment" lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/paymemt.svg"/>
                    </div>
                    <ion-label>Payment Methods</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>

            
        </ion-row>

        <ion-row>
            <ion-col size="6" class="ion-padding-end">
                <ion-item  lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/terms.svg"/>
                    </div>
                    <ion-label>Terms</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>

            <ion-col size="6" class="ion-padding-start">
                <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/privacy.svg"/>
                    </div>
                    <ion-label>Privacy</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>
        </ion-row>    

        <ion-row>
            <ion-col size="6" class="ion-padding-end">
                <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/legal.svg"/>
                    </div>
                    <ion-label>Legal Notice</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>

            <ion-col size="6" class="ion-padding-start">
                <ion-item lines="none" class="list_cons setting_bs ion-margin-bottom">
                    <div slot="start" class="icons_s">
                        <img src="assets/images/ratting.svg"/>
                    </div>
                    <ion-label>Send Feedback</ion-label>
                    <div slot="end" class="control_cin ens_sd">
                        <img src="assets/images/right_arrow.svg"/>
                    </div>
                </ion-item>
            </ion-col>
        </ion-row>   

        <ion-row class="ion-justify-content-center ion-padding ion-margin-vertical">
            <ion-col size="12">
                <div class="suppoets ipad_spot desktop_spot">
                    <img src="assets/images/support_icon.svg"/>
                    <h3>Help & Support</h3>
                </div>
                <div class="BtnBlock">
                    <ion-button shape="round" class="MakeDefault-btn">Logout</ion-button>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="ion-margin-vertical ipad_spot desktop_spot">
            <ion-col size="12" class="ion-text-center">
                <p class="app_vers app_vers-desktop">App Version: 1879.2021</p>
            </ion-col>
        </ion-row>
    </div>
  </ion-content>

</ion-page>
</div>
</ion-page>
</template>
<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonButton, IonButtons, IonMenuButton, IonToggle, isPlatform, modalController, getPlatforms  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Changepassword from './Changepassword.vue'
import Transactionhistory from './Transactionhistory.vue'
import PaymentMethods from './PaymentMethods.vue'

export default defineComponent({
  name: 'Settings',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonToggle,
    IonButton
  },
  setup() {
      const router = useRouter();
      return { router };
  },
  data(){
      return{
      styleClass:"",
        isDesktop: isPlatform('desktop'),
          isMobile: getPlatforms().indexOf('iphone')>-1||getPlatforms().indexOf('android')>-1,
          isIpad:getPlatforms().indexOf('ipad')>-1,
      }
  },
  methods :{
      cancel() {
    document.body.click()
        modalController.dismiss()
    },
    changeTheme(event: any){
        console.log(event)
        if(event.detail.checked){
            document.body.classList.remove('light');
            document.body.classList.add('dark')
        }else{
            document.body.classList.remove('dark');
            document.body.classList.add('light')
        }
    },

    async changepass() {
         //modalController.dismiss()
      const modal = await modalController.create({
          component: Changepassword,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      modal.onDidDismiss().then((res)=>{
          if(res.data === 'cancel'){
              modalController.dismiss()
          }
      })
      return modal.present();
    },

    async transaction() {
      //   modalController.dismiss()
      const modal = await modalController.create({
          component: Transactionhistory,
          cssClass: 'choosetem',
          animated: false,
          componentProps: {
            title: 'New Title'
          },
        });
      modal.onDidDismiss().then((res)=>{
          modalController.dismiss()
      })
      return modal.present();
    },

    async payment() {
         //modalController.dismiss()
      const modal = await modalController.create({
          component: PaymentMethods,
          cssClass: 'choosetem',
          animated:false,
          componentProps: {
            title: 'New Title'
          },
        })
      modal.onDidDismiss().then((res)=>{
          if(res.data === 'cancel'){
              modalController.dismiss()
          }
      });
      return modal.present();
    },

  }
});
</script>

<style scoped>

</style>