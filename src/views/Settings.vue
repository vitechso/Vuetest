<template>
<ion-page>
<div v-if="!isIpad">
<ion-page> 
<ion-header class="header_am">
  <ion-toolbar>
    <ion-row class="ion-align-items-center">
        <ion-col size="1">
            <div class="ion-text-center">
            <router-link to="/all-letters">
                <img src="assets/images/back_btn.svg"/>
            </router-link>
            </div>
        </ion-col>
      <ion-col size="9">
        <div class="ion-text-left">
          <span class="title_top">Settings</span> 
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
            <ion-toggle @ionChange="changeTheme($event)"  id="themeToggle" slot="end"></ion-toggle>
        </ion-item>

        <ion-row class="ion-margin-top">
            <ion-col size="12">
                <div class="suppoets">
                    <img src="assets/images/support_icon.svg"/>
                    <h3>Help & Support</h3>
                    <ion-button shape="round" class="ok_btn">Logout</ion-button>
                    <p class="app_vers">App Version: 1879.2021</p>
                </div>
            </ion-col>
        </ion-row>

    </div>
  </ion-content>

</ion-page>
</div>

<div v-if="isIpad">
<ionn-page>
<ion-header class="header_am">
  <ion-toolbar class="">
    <ion-row class="ion-align-items-center">
      <ion-col size="4" class="bars_hms">
        <div class="ion-text-center ins_han">
            <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
        </div>
        <div class="ion-text-left ipad_flx">
          <span class="title_top ipad_title_top">Settings</span> 
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

<ion-content :fullscreen="true">
    <div class="main_setting ion-margin hnas_ipads">
    <ion-row>
        <ion-col size="6">
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

        <ion-col size="6">
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
        <ion-col size="6">
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

        <ion-col>
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
        <ion-col size="6">
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

        <ion-col size="6">
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
        <ion-col size="6">
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

        <ion-col>
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
        <ion-col size="6">
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
                <div class="suppoets ipad_spot">
                    <img src="assets/images/support_icon.svg"/>
                    <h3>Help & Support</h3>
                    <ion-button shape="round" class="ok_btn">Logout</ion-button>
                    <p class="app_vers">App Version: 1879.2021</p>
                </div>
            </ion-col>
        </ion-row>

    </div>
  </ion-content>

</ionn-page>
</div>
</ion-page>
</template>
<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonButton, IonButtons, IonMenuButton, IonToggle, isPlatform  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

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
    isIpad:isPlatform('ipad')
      }
  },
  methods :{
    changeTheme(event: any){
        console.log(event)
        if(event.detail.checked){
            document.body.classList.remove('light');
            document.body.classList.add('dark')
        }else{
            document.body.classList.remove('dark');
            document.body.classList.add('light')
        }
    }

  }
});
</script>

<style scoped>

</style>