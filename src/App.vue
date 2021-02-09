<template>
  <ion-app>
  <ion-split-pane content-id="main">
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-row class="top_menu_sl">
      <ion-col size="10">
        <img src="assets/images/logo.svg"/>
      </ion-col>
      <ion-col size="2">
        <div class="menu_close">
          <img @click="closeMenu" src="assets/images/close_menu.svg"/>
        </div>
        
        <!-- <ion-button @click="closeMenu" >Close</ion-button> -->
      </ion-col>
    </ion-row>
    <ion-content>
      <ion-list>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
        <ion-item>Menu Item</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
    <ion-router-outlet id="main"></ion-router-outlet>
   </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonContent, IonItem, IonList, IonMenu, menuController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonContent,
    IonItem,
    IonList,
    IonMenu
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