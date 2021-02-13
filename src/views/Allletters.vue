<template>

<ion-page> 
<ion-header class="header_am">
  <ion-toolbar>
    <ion-row class="ion-align-items-center bar_c">
      <ion-col size="4">
        <div class="ion-text-center">
          <span class="title_top">All Letters</span> 
        </div>
      </ion-col>
      <ion-col size="2">
      <ion-badge class="badgs">8</ion-badge>
      </ion-col>

      <ion-col size="2">
      </ion-col>

      <ion-col size="2">
        <div class="search_icon">
          <img src="assets/images/search.svg"/>
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
    <div id="full_width">
      <ion-list>
        <ion-item lines="none" class="bor_b" @click="() => router.push('/writedocument')">
          <ion-row class="ion-align-items-center">
              <ion-col size="2">
                <div class="letter_pic">
                  <img src="assets/images/normal_u4831.jpg"/>
                </div>
              </ion-col>
              <ion-col size="10">
                <div class="texts_letts">
                  <h3>Address Change</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
                <div class="date">
                  <span>15 Jan</span>
                </div>
              </ion-col>
          </ion-row>
        </ion-item>

        <ion-item-sliding>
        <ion-item lines="none" class="bor_b">
          <ion-row class="ion-align-items-center">
              <ion-col size="2">
                <div class="letter_pic">
                  <img src="assets/images/normal_u4831.jpg"/>
                </div>
              </ion-col>
              <ion-col size="10">
                <div class="texts_letts">
                  <h3>Minutes of Meeting</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
                <div class="date">
                  <span>15 Jan</span>
                </div>
              </ion-col>
          </ion-row>
          <ion-item-options side="end" class="opths">
            <ion-item-option><img src="assets/images/view.svg"/></ion-item-option>
            <ion-item-option><img src="assets/images/share.svg"/></ion-item-option>
            <ion-item-option><img src="assets/images/delete.svg"/></ion-item-option>
          </ion-item-options>
        </ion-item>
        </ion-item-sliding>

        <ion-item-sliding>
        <ion-item lines="none" class="bor_b">
          <ion-row class="ion-align-items-center">
              <ion-col size="2">
                <div class="letter_pic">
                  <img src="assets/images/normal_u4831.jpg"/>
                </div>
              </ion-col>
              <ion-col size="10">
                <div class="texts_letts">
                  <h3>Minutes of Meeting</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
                <div class="date">
                  <span>15 Jan</span>
                </div>
              </ion-col>
          </ion-row>
          <ion-item-options side="end" class="opths">
            <ion-item-option><img src="assets/images/view.svg"/></ion-item-option>
            <ion-item-option><img src="assets/images/share.svg"/></ion-item-option>
            <ion-item-option><img src="assets/images/delete.svg"/></ion-item-option>
          </ion-item-options>
        </ion-item>
        </ion-item-sliding>

        <ion-item-sliding>
        <ion-item lines="none" class="bor_b">
          <ion-row class="ion-align-items-center">
              <ion-col size="2">
                <div class="letter_pic">
                  <img src="assets/images/normal_u4831.jpg"/>
                </div>
              </ion-col>
              <ion-col size="10">
                <div class="texts_letts">
                  <h3>Minutes of Meeting</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
                <div class="date">
                  <span>15 Jan</span>
                </div>
              </ion-col>
          </ion-row>
          <ion-item-options side="end" class="opths">
            <ion-item-option><img src="assets/images/view.svg"/></ion-item-option>
            <ion-item-option><img src="assets/images/share.svg"/></ion-item-option>
            <ion-item-option><img src="assets/images/delete.svg"/></ion-item-option>
          </ion-item-options>
        </ion-item>
        </ion-item-sliding>

      </ion-list>

    </div>

    <ion-fab vertical="top" horizontal="end" class="fixeds" @click="() => router.push('/choose-template')">
      <ion-fab-button>
        <img class="pl_icon" src="assets/images/plus.svg"/>
      </ion-fab-button>
    </ion-fab>
  </ion-content>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonBadge, IonItem, IonList, IonItemOption, IonItemOptions, IonItemSliding, IonFab, IonFabButton, IonMenuButton, IonButtons } from '@ionic/vue'
import {add} from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Allletters',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonBadge,
    IonItem,
    IonList,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonFab,
    IonFabButton,
    IonButtons,
    IonMenuButton
  },
  setup() {
      const router = useRouter();
      return { router, add };
  }
});
</script>

<style scoped>

</style>