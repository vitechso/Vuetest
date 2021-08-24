<template>
<ion-page>

<!---------------desktop Code--------------->

<div v-if="isDesktop">
    <ion-page> 
        <ion-header class="header_am Hrd-Desktop"> 
            <ion-toolbar class="header-top">
                <ion-row class="ion-align-items-center bar_c">
                <ion-col size="3" class="ipad_cols Desktop_cols">
                    <div class="desktop_conn ">

                        <!-- <ion-button class="MenuBar"><img src="assets/images/menu.svg"/></ion-button> -->

                        <div @click="openMenu" class="desktop-header-icon MenuBar icon-hover">
                            <img src="assets/images/menu.svg"/>
                        </div>

                        <div class="desktop-header-icon icon-hover" @click="chossetamp">
                            <img src="assets/images/edit_pencil.svg"/>
                        </div>

                        <div class="desktop-header-icon icon-hover" @click="desktopdelete">
                            <img src="assets/images/delete.svg"/>
                        </div>

                        <div class="desktop-header-icon icon-hover">
                            <img src="assets/images/search.svg"/>
                        </div>

                    </div> 
                </ion-col>
                <ion-col size="6" class="">
                <div class="ion-text-center ipad_flx ion-padds-l ion-justify-content-center">
                    <span class="title_top desktop-title-top">Address Change</span> 
                    </div>
                </ion-col>
                <ion-col size="3">
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


        <ion-content :fullscreen="true" class="ipad_write">
            <div :class="isMenuOpen?'menu-open':'menu-closed'" class="ipad_h destop-sitebar-container">
                <div class="bg-white SideBar no_border">
                    <ion-row class="s_bar lettes_desk">
                        <ion-col size="12">
                            <div class="ion-text-left ipad_flx desk_flx">
                                <span class="title_top ipad_title_top desktop_vs">All Letters</span> 
                                <ion-badge class="badgs badgs_desks">8</ion-badge>
                                <div class="black-down-arrow">
                                    <ion-button @click="allletterM" expand="block">
                                        <img src="assets/images/user_down.svg"/>
                                    </ion-button>
                                </div>

                                <!-- <ion-select interface="popover">
                                    <ion-select-option value="nes">NES</ion-select-option>
                                    <ion-select-option value="n64">Nintendo64</ion-select-option>
                                    <ion-select-option value="ps">PlayStation</ion-select-option>
                                    <ion-select-option value="genesis">Sega Genesis</ion-select-option>
                                    <ion-select-option value="saturn">Sega Saturn</ion-select-option>
                                    <ion-select-option value="snes">SNES</ion-select-option>
                                </ion-select> -->
                            </div>
                        </ion-col>
                    </ion-row>

                    <ion-row class="ion-align-items-center active_letters lettes lettes_desk">
                    <ion-col size="12" class="sitebar-text-info">
                        <div class="texts_letts">
                        <h3>Address Change</h3>
                        <p>Dear Sirs and Madames,<br>Lorem Ipsum...</p>
                        </div>
                        <div class="date">
                        <span>11 Jan</span>
                        </div>
                    </ion-col>
                    </ion-row>

                    <ion-row class="ion-align-items-center lettes lettes_desk">
                        <ion-col size="12" class="sitebar-text-info">
                            <div class="texts_letts">
                            <h3>Minutes of Meeting</h3>
                            <p>Dear Johnson Charles, <br> It has survived not only...</p>
                            </div>
                            <div class="date">
                            <span>10 Jan</span>
                            </div>
                        </ion-col>
                    </ion-row>

                    <ion-row class="ion-align-items-center lettes lettes_desk">
                        <ion-col size="12" class="sitebar-text-info">
                            <div class="texts_letts">
                            <h3>List of Appointments</h3>
                            <p>Dear Mr Miller, <br> There are many variations of passages...</p>
                            </div>
                            <div class="date">
                            <span>09 Jan</span>
                            </div>
                        </ion-col>
                    </ion-row>
                </div>

                <div class="right-content-box">
                    <ion-row>
                        <ion-col size="6" class="ion-no-padding bg-white">
                            <div class="lock_unlock Desktop_lock_unlock">
                                <ion-row>
                                    <ion-col size="12" class="ion-no-padding">
                                        <div class="board-icon">
                                            <div class="board-left">
                                                <div class="icon_bn img_unloacks icon-hover" @click="addclass($event)">
                                                    <img v-if="styleClass==''" src="assets/images/un_lock.svg"/>
                                                    <img v-if="styleClass!=''" src="assets/images/lock.svg"/>
                                                </div>
                                                
                                                <div :class="styleClass!=''?'hideBottom':''" class="align_icons">
                                                
                                                </div>
                                            </div>

                                            <div class="board-right">
                                                <div class="icon_bn right_km icon-hover" @click="sendtype">
                                                    <img src="assets/images/black_send_share.svg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </ion-col>
                                </ion-row>
                            </div>

                            <div :class="styleClass" id="container_write" class="ipad_borders ion-no-margin container_write-desktop GFG">
        
                                <div class="Form-subject-container">

                                    <ion-row class="Form-subject-row">
                                        <ion-col size="12" class="pr-0 pl-0">
                                            <div class="Form-subject-block">
                                                <div class="Form-subject">
                                                    <h5>To</h5>
                                                    <p class="fontlight f-20 Include-Dot">Justin Shepp<span><h6></h6></span> 564 Urban Estate Phase 2<span><h6></h6></span> Kassel 11017 Germany</p>
                                                </div>

                                                <div class="contact_book contact_book-desk icon-hover" @click="contact">
                                                    <img src="assets/images/contact_book.svg"/>
                                                </div>
                                            </div>
                                        </ion-col>
                                    </ion-row>

                                    <ion-row class="Form-subject-row">
                                        <ion-col size="12" class="pr-0 pl-0">
                                            <div class="Form-subject-block">
                                                <div class="Form-subject">
                                                    <h5>Subject</h5>
                                                    <p class="fontlight f-20">Address Change</p>
                                                </div>
                                            </div>
                                        </ion-col>
                                    </ion-row>



                                </div>


                                <div id="privew_s" class="back_white privew_ipads privew_desktop SDSD">
                                
                                    <img src="assets/images/pdfview.png"/>
                              
                                </div>


                            </div>
                    
                        </ion-col>

                        <ion-col size="6" class="relative Lp-bg ion-no-padding customflex">
                            <div class="Testtop"></div>
                            <div id="privew_s" class="back_white privew_ipads privew_desktop SDSD">
                                
                                <img src="assets/images/pdfview.png"/>
                              
                            </div>
                        
                            <div class="desktop_pages_of">
                                <div class="arrow">
                                    <img src="assets/images/left-arrow.svg"/>
                                </div>
                                <p>Page 1 of 2</p>
                                <div class="arrow">
                                    <img src="assets/images/right-arrow-angle.svg"/>
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
import { IonPage,IonHeader, IonContent, IonToolbar, IonCol, IonRow,
alertController, modalController, popoverController, IonBadge  } from '@ionic/vue'
import {add} from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { isPlatform,getPlatforms } from '@ionic/vue';
import Changesignature from './Changesignature.vue'
import Preview from './Preview.vue'
import Contacts from './Contacts.vue';
import Account from './Account.vue'
import Popover from './Popover.vue'
import Choosetemplate from './Choosetemplate.vue'
import Selectsendtype from './Selectsendtype.vue'
import AllletterMenu from './AllletterMenu.vue'


export default defineComponent({
  name: 'PDFView',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonCol,
    IonRow,
    IonBadge,
    
  },

  
  setup() {
      const router = useRouter();
      return { router, add };
  },
  data() {
      return {
        styleClass:"",
        isDesktop: isPlatform('desktop'),
        isMobile: getPlatforms().indexOf('iphone')>-1||getPlatforms().indexOf('android')>-1,
        isIpad:getPlatforms().indexOf('ipad')>-1,
        isMenuOpen:true,
      }
  },
  methods:{

      openMenu(){
          this.isMenuOpen  = !this.isMenuOpen
      },
      
      async presentAlert() {
        const alert = await alertController
            .create({
            cssClass: 'my-custom-class',
            header: 'Delete Document',
            subHeader: 'Do you really want to delete document',
            message: 'Address Change?',
            buttons: ['Cancel', 'Delete'],
            });
        return alert.present();
     },

     async desktopdelete() {
        const alert = await alertController
            .create({
            cssClass: 'desktop_deletes',
            header: 'Delete document2',
            subHeader: 'Do you really want to delete document',
            message: 'Address Change?',
            buttons: ['Delete', 'Cancel'],
            });
        return alert.present();
     },

     async openModal() {
      const modal = await modalController.create({
          component: Changesignature,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return await  modal.present();
    },


    async sendtype() {
         modalController.dismiss()
      const modal = await modalController.create({
          component: Selectsendtype,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },

    async preview() {
        modalController.dismiss()
      const modal = await modalController.create({
          component: Preview,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },

    async contact() {
        modalController.dismiss()
      const modal = await modalController.create({
          component: Contacts,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },

    async account() {
        modalController.dismiss()
      const modal = await modalController.create({
          component: Account,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
        modal.onDidDismiss().then((res)=>{
            console.log(res)
        })
      modal.present();
      
    },

    

     addclass(){
         if(this.$data.styleClass != "locked"){
            this.$data.styleClass = "locked"
         }else{
             this.$data.styleClass = ""
         }
        
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

    async allletterM(ev: Event) {
      const popover = await popoverController
        .create({
          component: AllletterMenu,
          cssClass: 'HeaderDropDown allLetterDropDown',
          event: ev,
          translucent: true
        })
      return popover.present();
    },
 
    async chossetamp() {
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

 
     
  }
});






</script>

<style scoped>

</style>