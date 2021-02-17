<template>

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
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton  } from '@ionic/vue'
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
  }
});
</script>

<style scoped>

</style>