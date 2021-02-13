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
          <span class="title_top">Preview</span> 
        </div>
      </ion-col>
      <ion-col size="2">
        <div class="search_icon" @click="() => router.push('/selectsendtype')">
          <img src="assets/images/send_share.svg"/>
        </div>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>
  <ion-content :fullscreen="true">
    <div id="privew_s" class="back_white">

    <ion-row class="privew_r ion-padding-bottom">
        <ion-col size="9">
          <div class="innerr_b">
            <p><strong>John Anderson</strong></p>
            <p>Park Hall Aveneues</p>
            <p>8726 Kassel</p>

            <div class="mail_deta">
              <p>john.anderson@gmail.com</p>
              <p>December 11, 2020</p>
            </div>
          </div>
        </ion-col>
    </ion-row>

    <ion-row class="privew_r ion-padding-bottom">
        <ion-col size="12">
            <p class="ion-padding-bottom"><strong>Dear Sirs and Madames,</strong></p>

            <p class="ion-padding-bottom">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </ion-col>
    </ion-row>

    <ion-row class="row_sinc">
      <ion-col size="6">
        <div class="sincerely">
          <p>Sincerely,</p>
          <p><strong>Justin Shepp</strong></p>
        </div>
      </ion-col>
      <ion-col size="6">
        <div class="pages_of">
          <p>Page 1 of 1</p>
        </div>
      </ion-col>
    </ion-row>


    </div>
  </ion-content>

  <ion-footer class="ion-no-border foo_bottom">
    <ion-toolbar>
      <ion-button class="custom_btn_export">Export Letter</ion-button>
    </ion-toolbar>
  </ion-footer>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonFooter, IonButton  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Preview',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonFooter,
    IonButton
  },
  setup() {
      const router = useRouter();
      return { router };
  }
});
</script>

<style scoped>

</style>