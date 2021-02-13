<template>

<ion-page> 
<ion-header class="header_am">
  <ion-toolbar>
    <ion-row class="ion-align-items-center">
        <ion-col size="1">
            <div class="ion-text-center">
                <img src="assets/images/back_btn.svg"/>
            </div>
        </ion-col>
      <ion-col size="9">
        <div class="ion-text-left">
          <span class="title_top">Draw Signature</span> 
        </div>
      </ion-col>
      <ion-col size="2">
        
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>
  <ion-content :fullscreen="true" class="back_white">
    <div class="ion-padding-top ion-padding-start ion-padding-end">

    <ion-row class="privew_r ion-padding-bottom">
        <ion-col size="12">
          <p class="heading_m">Draw your signature and click save</p>
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
  name: 'Drawsignature',
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