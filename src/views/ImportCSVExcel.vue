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
          <span class="title_top">Import CSV/Excel</span> 
        </div>
      </ion-col>
      <ion-col size="2">
        
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>
  <ion-content :fullscreen="true" class="back_white">
    <div class="ion-padding-top ion-padding-start ion-padding-end">

    <ion-row class="privew_r slide_fils ion-padding-bottom">
        <ion-col size="8">
          <p class="heading_m">Please select a file to upload</p>
        </ion-col>
        <ion-col size="4">
            <ion-button class="selct_file" shape="round" type="button">Select File</ion-button>
        </ion-col>
    </ion-row>
    <ion-row class="slide_fils">
        <ion-col size="2">
            <img src="assets/images/csv.svg"/>
        </ion-col>
        <ion-col>
            <p class="heading_m">Contacts.csv</p>
        </ion-col>
    </ion-row>
    <ion-row class="ion-padding-top">
            <ion-col size="6">
                <ion-button shape="round" class="ok_btn">Done</ion-button>
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
import { IonPage,IonHeader, IonContent, IonToolbar  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ImportCSVExcel',
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