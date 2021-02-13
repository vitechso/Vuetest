<template>
  <ion-app>
  <ion-split-pane content-id="main">
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
      
        <ion-item @click="() => {router.push('/all-letters');closeMenu()}" lines="none" class="icon_menus"><img src="assets/images/menu_icon01.svg"/> All Letters <ion-badge class="bans_sj" slot="end">25</ion-badge></ion-item>
      
      
        <ion-item lines="none" class="icon_menus"><img src="assets/images/menu_icon02.svg"/> Drafts <ion-badge class="bans_sj" slot="end">15</ion-badge></ion-item>
      
      
        <ion-item lines="none" class="icon_menus"><img src="assets/images/menu_icon03.svg"/> Sent <ion-badge class="bans_sj" slot="end">10</ion-badge></ion-item>
      
      
        <ion-item lines="none" @click="() => {router.push('/account');closeMenu()}" class="icon_menus"><img src="assets/images/menu_icon04.svg"/> Account</ion-item>
      
      
        <ion-item lines="none" @click="() => {router.push('/contacts');closeMenu()}" class="icon_menus"><img src="assets/images/menu_icon05.svg"/> Contacts</ion-item>
      
      
        <ion-item lines="none" @click="() => {router.push('/settings');closeMenu()}" class="icon_menus"><img src="assets/images/menu_icon06.svg"/> Settings</ion-item>
      
      </ion-list>
    </ion-content>

    <ion-footer class="ion-no-border">
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
   </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonContent, IonItem, IonList, IonMenu, menuController, IonBadge, IonFooter, IonRow, IonCol, IonSplitPane, IonToolbar,  } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

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
    IonSplitPane,
    IonToolbar,
    IonMenu
  },
  setup() {
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
   
  }
});

</script>