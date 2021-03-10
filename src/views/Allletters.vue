<template>
<ion-page>
<div v-if="isMobile">
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
</div>

<div v-if="isIpad">
<ion-page>
<ion-header class="header_am">
  <ion-toolbar class="">
    <ion-row class="ion-align-items-center bar_c">
      <ion-col size="3" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <span class="title_top ipad_title_top">All Letters</span> 
          <ion-badge class="badgs">8</ion-badge>
        </div>
        <div class="edit_icon">
          <img src="assets/images/edit_pencil.svg"/>
        </div>
      </ion-col>
      <ion-col size="7"></ion-col>
      <ion-col size="2">
        <ion-buttons class="right_ipad">
            <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
        </ion-buttons>
      </ion-col>

    </ion-row>
  </ion-toolbar>
</ion-header>
  <ion-content>
    <ion-row class="ipad_h">
      <ion-col size="3"></ion-col>
      <ion-col size="9" class="ion-no-padding">
        <div class="welcome_ipad">
          <h3>Welcome to moreyou.letters</h3>
          <h4>Select an exisiting document from sidebar or create a new one</h4>
          <ion-button shape="round" @click="openModal" class="create_letts">Create letter</ion-button>
            <div class="mail_open">
              <img src="assets/images/mail_open.svg"/>
            </div>
        </div>
      </ion-col>
    </ion-row>
  </ion-content>
</ion-page>
</div>

<div v-if="isDesktop">
  <ion-page>
<ion-header class="header_am">
  <ion-toolbar class="">
    <ion-row class="ion-align-items-center bar_c">
      <ion-col size="2" class="ipad_cols">
        <!-- <div class="ion-text-left ipad_flx">
          <span class="title_top ipad_title_top">All Letters</span> 
          <ion-badge class="badgs">8</ion-badge>
        </div> -->
        <div class="desktop_conn ion-justify-content-start">
          <ion-button class="MenuBar"><img src="assets/images/menu.svg"/></ion-button>

        <!-- <ion-buttons class="">
            <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
        </ion-buttons> -->

        <div class="edit_icon desk">
          <img src="assets/images/edit_pencil.svg"/>
        </div>
        </div>
        
      </ion-col>
      <ion-col size="8"></ion-col>
      <ion-col size="2">
        <div class="user_img">
          <div class="user_avtar">
            <img src="assets/images/userimage.png"/>
          </div>
          <div class="arrow_ds">
            <ion-button @click="openPopover" expand="block">
                <img src="assets/images/user_down.svg"/>
            </ion-button>
          </div>
          
        </div>
      </ion-col>

    </ion-row>
  </ion-toolbar>
</ion-header>
  <ion-content>
    <ion-row class="ipad_h">
      <ion-col size="2"></ion-col>
      <ion-col size="10" class="ion-no-padding">
        <div class="welcome_ipad">
          <h3>Welcome to moreyou.letters</h3>
          <h4>Select an exisiting document from sidebar or create a new one</h4>
          <ion-button shape="round" @click="openModal" class="create_letts">Create letter</ion-button>
            <div class="mail_open">
              <img src="assets/images/mail_open.svg"/>
            </div>
        </div>
      </ion-col>
    </ion-row>
  </ion-content>
</ion-page>
</div>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonBadge, IonItem, IonList, IonItemOption, IonItemOptions, IonItemSliding, IonFab, IonFabButton, IonMenuButton, IonButtons, isPlatform,modalController, popoverController  } from '@ionic/vue'
import {add} from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Choosetemplate from './Choosetemplate.vue'
import Popover from './Popover.vue'
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
  },
  data() {
      return {
          styleClass:"",
          isIpad:isPlatform('ipad'),
          isDesktop: isPlatform('desktop'),
          isMobile: isPlatform('mobile'),
      }
  },
  methods:{
     async openModal() {
       modalController.dismiss()
      const modal = await modalController.create({
          component: Choosetemplate,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },

    async openPopover(ev: Event) {
      const popover = await popoverController
        .create({
          component: Popover,
          cssClass: 'HeaderDropDown',
          event: ev,
          translucent: true
        })
      return popover.present();
    },
  },
});
</script>

<style scoped>

</style>