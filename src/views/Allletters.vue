<template>
<ion-page>
<div v-if="isMobile">
<ion-page>
<ion-header class="header_am Mobo-header">
  <ion-toolbar>
    <ion-row class="ion-align-items-center bar_c">
      <ion-col size="12" class="ion-padding-horizontal">
        <div class="Page-header">
          <div class="Page-Title">
            <span class="title_top title_top_mobo">All Letters</span>
            <ion-badge class="badgs">8</ion-badge>
          </div>
          <div class="TopHeader-icon">
            <img src="assets/images/search.svg" class="header-icon"/>
            <ion-buttons class="menu-btn header-icon">
              <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
            </ion-buttons>
          </div>
        </div>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>
  <ion-content :fullscreen="true">
    <div id="full_width">
      <ion-list class="mobo-letter-list">
        <ion-item lines="none" class="bor_b" @click="() => router.push('/writedocument')">
          <ion-row class="ion-align-items-center">
              <ion-col size="2" class="ion-no-padding">
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
              <ion-col size="2" class="ion-no-padding">
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
              <ion-col size="2" class="ion-no-padding">
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
              <ion-col size="2" class="ion-no-padding">
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
  <ion-toolbar class="header-top">
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
  <ion-toolbar class="header-top">
    <ion-row class="ion-align-items-center bar_c">
      <ion-col size="3" class="ipad_cols Desktop_cols ion-no-padding">

        <div class="desktop_conn">
            <!-- <ion-button class="MenuBar"><img src="assets/images/menu.svg"/></ion-button> -->
            <div class="desktop-header-icon icon-hover" @click="chossetamp">
                <img src="assets/images/edit_pencil.svg"/>
            </div>
        </div>
      </ion-col>
      <ion-col size="7"></ion-col>
      <ion-col size="2" class="ion-no-padding">
        <div class="user_img">
          <div class="user_avtar">
            <img src="assets/images/userimage.png"/>
          </div>
          <div class="arrow_ds">
            <div class="icon-hover" @click="openPopover">
                <img src="assets/images/user_down.svg"/>
            </div>
          </div>
          
        </div>
      </ion-col>

    </ion-row>
  </ion-toolbar>
</ion-header>
<ion-content>
  <div class="ipad_h destop-sitebar-container">
    <div class="SideBar">
      <ion-row class="">
          <ion-col size="12">
              
          </ion-col>
      </ion-row>
    </div>
    <div class="right-content-box">
      <ion-row>
        <ion-col size="12" class="ion-no-padding custom-col-full">
          <div class="welcome_ipad welcome_desktop">
            <h3>Welcome to moreyou.letters</h3>
            <h4>Select an exisiting document from sidebar or create a new one</h4>
            <ion-button shape="round" @click="openModal" class="create_letts">Create letter</ion-button>
              <div class="mail_open">
                <img src="assets/images/mail_open.svg"/>
              </div>
          </div>
        </ion-col>
      </ion-row>
    </div>
  </div>
</ion-content>
</ion-page>
</div>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonBadge, IonItem, IonList, IonItemOption, IonItemOptions, IonItemSliding, IonFab, IonFabButton, IonMenuButton, IonButtons, isPlatform,getPlatforms,modalController, popoverController, IonRow, IonCol, IonButton  } from '@ionic/vue'
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
    IonButton,
    IonMenuButton,
    IonRow,
    IonCol
  },
  setup() {
      const router = useRouter();
      return { router, add };
  },
  data() {
      return {
          styleClass:"",
         
          isDesktop: isPlatform('desktop'),
          isMobile: getPlatforms()[0]=='android'||getPlatforms()[0]=='iphone',
        isIpad:getPlatforms()[0]=='ipad',
      }
  },
  methods:{
     async openModal() {
       modalController.dismiss()
       //alert('sdsds');
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