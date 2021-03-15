<template>

<ion-page>
<div v-if="isMobile">
<ion-page>
<ion-header class="header_am">
  <ion-toolbar>
    <ion-row class="ion-align-items-center">
        <ion-col size="1">
            <div class="ion-text-center">
                <img @click="()=>router.push('/settings')" src="assets/images/back_btn.svg"/>
            </div>
        </ion-col>
      <ion-col size="9">
        <div class="ion-text-left">
          <span class="title_top">Change Password</span> 
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
         <div lines="none" class="pdd_b">
          <input type="password" id="old_password" placeholder="Old Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
        </div>

        <div lines="none" class="pdd_b ion-margin-top">
          <input type="password" id="new_password" placeholder="New Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
        </div>

        <div lines="none" class="pdd_b ion-margin-top">
          <input type="password" id="con_password" placeholder="Confirm Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
        </div>
        
        <ion-row>
            <ion-col size="6">
                <ion-button shape="round" class="ok_btn">Reset</ion-button>
            </ion-col>
            <ion-col size="6">
                <ion-button shape="round" class="cancel_btn">Cancel</ion-button>
            </ion-col>
        </ion-row>

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
            <img @click="()=>router.push('/settings')" src="assets/images/back_btn.svg"/>
        </div>
        <div class="ion-text-left ipad_flx">
          <span class="title_top ipad_title_top">Change Password</span> 
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
    <div class="main_setting ion-margin change_pass_ipads">
         <div lines="none" class="pdd_b">
          <input type="password" id="old_password" placeholder="Old Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
        </div>

        <div lines="none" class="pdd_b ion-margin-top">
          <input type="password" id="new_password" placeholder="New Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
        </div>

        <div lines="none" class="pdd_b ion-margin-top">
          <input type="password" id="con_password" placeholder="Confirm Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
        </div>
        
        <ion-row>
            <ion-col size="6">
                <ion-button shape="round" class="ok_btn">Reset</ion-button>
            </ion-col>
            <ion-col size="6">
                <ion-button shape="round" class="cancel_btn">Cancel</ion-button>
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
          <span class="popup_title">Change Password</span> 
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
    <div class="main_setting ion-margin change_pass_ipads">
         <div lines="none" class="pdd_b">
          <input type="password" id="old_password" placeholder="Old Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
        </div>

        <div lines="none" class="pdd_b ion-margin-top">
          <input type="password" id="new_password" placeholder="New Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
        </div>

        <div lines="none" class="pdd_b ion-margin-top">
          <input type="password" id="con_password" placeholder="Confirm Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
        </div>
    </div>

    <ion-row class="ion-justify-content-center ion-margin-vertical ion-padding">
      <ion-col size="3">
          <ion-button shape="round" class="MakeDefault-btn">Reset</ion-button>
      </ion-col>

      <ion-col size="3">
          <ion-button shape="round" type="default" @click="cancel" class="MakeDefault-btn _gary-outline-btn">Cancel</ion-button>
      </ion-col>
    </ion-row>

  </ion-content>
  </ion-page>
  </div>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton, isPlatform, modalController  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Changepassword',
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
      return { router };
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
    },
  }
});
</script>

<style scoped>

</style>