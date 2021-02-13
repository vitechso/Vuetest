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
      <ion-col size="7">
        <div class="ion-text-left">
          <span class="title_top">Select Send Type</span> 
        </div>
      </ion-col>
      <ion-col size="4">
        <!-- <ion-buttons>
            <ion-menu-button class="primary_arrow_inner">Menu</ion-menu-button>
        </ion-buttons> -->
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>
  <ion-content :fullscreen="true" class="back_white">
    <div id="container_fax">

    <ion-row class="custom_row send_shares ion-padding-top ion-padding-bottom ion-margin-top" @click="() => router.push('/sendprintedletter')">
        <ion-col size="4">
            <div class="icon_m">
                <img src="assets/images/yellow_print.svg" />
            </div>
        </ion-col>
        <ion-col size="8">
            <div class="text_share">
                <h3>Printed Letter</h3>
            </div>
        </ion-col>
    </ion-row>

    <ion-row class="custom_row send_shares ion-padding-top ion-padding-bottom ion-margin-top" @click="() => router.push('/sendfax')">
        <ion-col size="4">
            <div class="icon_m">
                <img src="assets/images/yellow_fax.svg" />
            </div>
        </ion-col>
        <ion-col size="8">
            <div class="text_share">
                <h3>Fax</h3>
            </div>
        </ion-col>
    </ion-row>

    <ion-row class="custom_row send_shares ion-padding-top ion-padding-bottom ion-margin-top">
        <ion-col size="4">
            <div class="icon_m">
                <img src="assets/images/yellow_pdf.svg" />
            </div>
        </ion-col>
        <ion-col size="8">
            <div class="text_share">
                <h3>Pdf</h3>
            </div>
        </ion-col>
    </ion-row>

    <ion-row class="ion-padding-top ion-padding-bottom">
        <ion-col size="12">
            <div class="ion_btn_next">
                <ion-button shape="round" class="next_btn">Next</ion-button>
            </div>
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
  name: 'Selectsendtype',
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