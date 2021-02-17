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
          <span class="title_top">Enter Passcode</span> 
        </div>
      </ion-col>
      <ion-col size="2">
        
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>
  <ion-content :fullscreen="true" class="back_white">
    <div id="container">
        <ion-row class="ion-padding-bottom">
            <ion-col size="12">
                <h4>Enter your Passcode</h4>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="3">
                <input type="text" class="pass_code" id="pass_01">
            </ion-col>
            <ion-col size="3">
                <input type="text" class="pass_code" id="pass_02">
            </ion-col>
            <ion-col size="3">
                <input type="text" class="pass_code" id="pass_03">
            </ion-col>
            <ion-col size="3">
                <input type="text" class="pass_code" id="pass_04">
            </ion-col>
        </ion-row>
    </div>
  </ion-content>

</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'EnterPasscode',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar
  },
  setup() {
      const router = useRouter();
      return { router };
  }
});
</script>

<style scoped>

</style>