<template>
  <ion-app v-if="!isIpad" class="mobile_menus">

  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-row class="top_menu_sl">
      <ion-col size="10">
        <div class="drak_mode">
          <img src="assets/images/dark_mode_logo.svg"/>
        </div>
        <div class="kdh">
          <img src="assets/images/logo.svg"/>
        </div> 
      </ion-col>
      <ion-col size="2">
        <div class="menu_close">
          <img @click="closeMenu" src="assets/images/close_menu.svg"/>
        </div>
        <!-- <ion-button @click="closeMenu" >Close</ion-button> -->
      </ion-col>
    </ion-row>
    <ion-content class="back_white">
      <ion-list>
      
        <ion-item @click="() => {router.push('/all-letters');closeMenu();}" lines="none" class="icon_menus"><img src="assets/images/menu_icon01.svg"/> All Letters <ion-badge class="bans_sj" slot="end">25</ion-badge></ion-item>
      
      
        <ion-item lines="none" class="icon_menus"><img src="assets/images/menu_icon02.svg"/> Drafts <ion-badge class="bans_sj" slot="end">15</ion-badge></ion-item>
      
      
        <ion-item lines="none" class="icon_menus"><img src="assets/images/menu_icon03.svg"/> Sent <ion-badge class="bans_sj" slot="end">10</ion-badge></ion-item>
      
      
        <ion-item lines="none" @click="() => {router.push('/account');closeMenu()}" class="icon_menus"><img src="assets/images/menu_icon04.svg"/> Account</ion-item>
      
      
        <ion-item lines="none" @click="() => {router.push('/contacts');closeMenu();}" class="icon_menus"><img src="assets/images/menu_icon05.svg"/> Contacts</ion-item>
      
      
        <ion-item lines="none" @click="() => {router.push('/settings');closeMenu()}" class="icon_menus"><img src="assets/images/menu_icon06.svg"/> Settings</ion-item>
      
      </ion-list>
    </ion-content>

    <ion-footer class="ion-no-border clas_bn">
      <ion-toolbar>
        <ion-row class="row_foo ion-padding-start ion-padding-end">
          <ion-col size="3">
            <div class="user_short_name">
              <p>JS</p>
            </div>
          </ion-col>
          <ion-col size="8">
            <div class="user_name_email">
              <p class="user_name"><strong>Justin Shepp</strong></p>
              <p class="email">justin.shepp@gmail.com</p>
            </div>
          </ion-col> 
          <ion-col size="1">
            <div class="user_logout">
              <img src="assets/images/logout.svg" />
            </div>
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-footer>
  </ion-menu>
    <ion-router-outlet id="main"></ion-router-outlet>
 
  </ion-app>

  <ion-app v-if="isIpad" class="menus_ipad">

  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-row class="top_menu_sl">
      <ion-col size="10">
        <div class="drak_mode">
          <img src="assets/images/dark_mode_logo.svg"/>
        </div>
        <div class="kdh">
          <img src="assets/images/logo.svg"/>
        </div> 
      </ion-col>
      <ion-col size="2">
        <!-- <div class="menu_close">
          <img @click="closeMenu" src="assets/images/close_menu.svg"/>
        </div> -->
        <!-- <ion-button @click="closeMenu" >Close</ion-button> -->
      </ion-col>
    </ion-row>
    <ion-content class="back_white">
      <ion-list>
      
        <ion-item @click="() => {router.push('/all-letters');closeMenu()}" lines="none" class="icon_menus"><img src="assets/images/menu_icon01.svg"/> All Letters <ion-badge class="bans_sj" slot="end">25</ion-badge></ion-item>
      
      
        <ion-item lines="none" class="icon_menus"><img src="assets/images/menu_icon02.svg"/> Drafts <ion-badge class="bans_sj" slot="end">15</ion-badge></ion-item>
      
      
        <ion-item lines="none" class="icon_menus"><img src="assets/images/menu_icon03.svg"/> Sent <ion-badge class="bans_sj" slot="end">10</ion-badge></ion-item>
      
      
        <ion-item lines="none" @click="() => {router.push('/account');closeMenu()}" class="icon_menus"><img src="assets/images/menu_icon04.svg"/> Account</ion-item>
      
      
        <ion-item lines="none" @click="() => {router.push('/contacts');closeMenu()}" class="icon_menus"><img src="assets/images/menu_icon05.svg"/> Contacts</ion-item>
      
      
        <ion-item lines="none" @click="() => {router.push('/settings');closeMenu()}" class="icon_menus"><img src="assets/images/menu_icon06.svg"/> Settings</ion-item>
      
      </ion-list>
    </ion-content>

    <ion-footer class="ion-no-border clas_bn">
      <ion-toolbar>
        <ion-row class="row_foo ion-padding-start ion-padding-end">
          <ion-col size="3">
            <div class="user_short_name">
              <p>JS</p>
            </div>
          </ion-col>
          <ion-col size="8">
            <div class="user_name_email">
              <p class="user_name"><strong>Justin Shepp</strong></p>
              <p class="email">justin.shepp@gmail.com</p>
            </div>
          </ion-col> 
          <ion-col size="1">
            <div class="user_logout">
              <img src="assets/images/logout.svg" />
            </div>
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-footer>
  </ion-menu>
    <ion-router-outlet id="main"></ion-router-outlet>
 
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonContent, IonItem, IonList, IonMenu, menuController, IonBadge, IonFooter, IonRow, IonCol, IonToolbar, isPlatform  } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Plugins } from '@capacitor/core';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonContent,
    IonItem,
    IonBadge,
    IonFooter,
    IonList,
    IonRow,
    IonCol,
    IonToolbar,
    IonMenu
  },
  setup() {
    const { SplashScreen } = Plugins;
    // Hide the splash (you should do this on app launch)
SplashScreen.hide();

// Show the splash for an indefinite amount of time:
SplashScreen.show({
  autoHide: false
});

// Show the splash for two seconds and then auto hide:
SplashScreen.show({
  showDuration: 2000,
  autoHide: true
});
      const router = useRouter();
      return { router };
  },
  methods:{
    closeMenu(){
     menuController.close()
    }
  },
   mounted(){
   // alert("here")
   menuController.enable(true)
   
  },
  data() {
      return {
          styleClass:"",
          isIpad:isPlatform('ipad')
      }
  },
});

</script>