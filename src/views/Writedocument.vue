<template>

<!---------------Ipad Code--------------->

<ion-page> 
<div  v-if="!isIpad">
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
      <ion-col size="7">
      <div class="ion-text-left ipad_flx ion-padds-l">
          <span class="title_top ipad_title_top">Address Change</span> 
        </div>
      </ion-col>
      <ion-col size="2">
        <ion-buttons class="right_ipad">
            <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
        </ion-buttons>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>


  <ion-content :fullscreen="true" class="ipad_write">

  <ion-row class="ipad_h">
      <ion-col size="3" class="ion-no-padding">
        <ion-row class="s_bar">
            <ion-col size="12">
                <div class="search_bar">
                      <ion-searchbar></ion-searchbar>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-center active_letters lettes">
              <ion-col size="12">
                <div class="texts_letts">
                  <h3>Address Change</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
                <div class="date">
                  <span>15 Jan</span>
                </div>
              </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center lettes">
              <ion-col size="12">
                <div class="texts_letts">
                  <h3>Address Change</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
                <div class="date">
                  <span>15 Jan</span>
                </div>
              </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center lettes">
              <ion-col size="12">
                <div class="texts_letts">
                  <h3>Address Change</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
                <div class="date">
                  <span>15 Jan</span>
                </div>
              </ion-col>
          </ion-row>
      </ion-col>
      
      <ion-col size="9" class="ion-no-padding">
      <div class="lock_unlock">
        <ion-row>
            <ion-col size="6">
                <div class="img_unloacks" @click="addclass($event)">
                    <img v-if="styleClass==''" src="assets/images/un_lock.svg"/>
                    <img v-if="styleClass!=''" src="assets/images/lock.svg"/>
                </div>
            </ion-col>
        </ion-row>
    </div>

        <div :class="styleClass" id="container_write" class="ipad_borders">
        <ion-row class="row_01 b_p bor_b">
            <ion-col size="3">
                <p><strong>From</strong></p>
            </ion-col>
            <ion-col size="8">
                <p>John Anderson 243 Park Hall Aveneues Kassel 11017 Germany</p>
            </ion-col>
            <ion-col size="1">
                <div class="contact_book">
                    <img src="assets/images/contact_book.svg"/>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="3">
                <p><strong>To</strong></p>
            </ion-col>
            <ion-col size="8">
                <p>Justin Shepp 564 Urban Estate Phase 2 Kassel 11017 Germany</p>
            </ion-col>
            <ion-col size="1">
                <div class="contact_book"  @click="contact">
                    <img src="assets/images/contact_book.svg"/>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="3">
                <p><strong>Subject</strong></p>
            </ion-col>
            <ion-col size="9">
                <p>Address Change</p>
            </ion-col>
            
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="12">
                <p><strong>Dear Sirs and Madames,</strong></p>
            </ion-col>
            <ion-col size="12">
                <div class="tab_desc">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="3">
                <p><strong>Footer</strong></p>
            </ion-col>
            <ion-col size="9">
                <p>Sincerely, <br> Justin Shepp</p>
            </ion-col>
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="5">
                <p><strong>Signature</strong></p>
            </ion-col>
            <ion-col size="5"></ion-col>
            <ion-col size="2">
                <div class="btn_ajj">
                    <ion-button shape="round" type="button" @click="openModal">Adjust</ion-button>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="3">
                <p><strong>Letter Size</strong></p>
            </ion-col>
            <ion-col size="3"></ion-col>
            <ion-col size="6">
                <div class="letter_size">
                    <div class="inner_sizes">
                       <span>DIN 5008 A</span> 
                    </div>
                    <div class="inner_sizes">
                       <span>DIN 5008 B</span> 
                    </div>
                    <div class="inner_sizes">
                       <span>US Letter</span> 
                    </div>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="3">
                <p><strong>Markers</strong></p>
            </ion-col>
            <ion-col size="4"></ion-col>
            <ion-col size="5">
                <div class="mark_toggle">
                    <ion-toggle color="primary"></ion-toggle>
                </div>
            </ion-col>
        </ion-row>
    </div>
    <div class="back_fooipad">
        <ion-row>
            <ion-col size="1">
                <div class="icon_bn">
                    <img src="assets/images/bold.svg"/>
                </div>
            </ion-col>
            <ion-col size="1">
                <div class="icon_bn">
                    <img src="assets/images/itelic.svg"/>
                </div>
            </ion-col>
            <ion-col size="1">
                <div class="icon_bn">
                    <img src="assets/images/underline.svg"/>
                </div>
            </ion-col>

            <ion-col size="6">
                <div class="icon_bn" @click="preview">
                    <img src="assets/images/view_black.svg"/>
                </div>
            </ion-col>

            <ion-col size="3">
                <div class="icon_bn right_km">
                    <img @click="presentAlert" src="assets/images/delete_black.svg"/>
                </div>
            </ion-col>
        </ion-row>
    </div>
      </ion-col>
    </ion-row>

    
  </ion-content>
</div>

<div v-if="isIpad">
<ion-header class="header_am">
  <ion-toolbar>
    <ion-row class="ion-align-items-center">
        <ion-col size="1">
            <div class="ion-text-center">
                <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
            </div>
        </ion-col>
      <ion-col size="7">
        <div class="ion-text-left">
          <span class="title_top">Address Change</span> 
        </div>
      </ion-col>
    
      <ion-col size="2">
        <ion-buttons>
            <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
        </ion-buttons>
      </ion-col>

      <ion-col size="2">
        <div class="search_icon">
          <img @click="documentSend" src="assets/images/send_share.svg"/>
        </div>
      </ion-col>

      
    </ion-row>
  </ion-toolbar>
  <div class="lock_unlock">
        <ion-row>
            <ion-col size="6">
                <div class="img_unloacks" @click="addclass($event)">
                    <img v-if="styleClass==''" src="assets/images/un_lock.svg"/>
                    <img v-if="styleClass!=''" src="assets/images/lock.svg"/>
                </div>
            </ion-col>
        </ion-row>
    </div>
</ion-header>
  <ion-content :fullscreen="true" >
    <div :class="styleClass" id="container_write">
        <ion-row class="row_01 b_p bor_b">
            <ion-col size="3">
                <p><strong>From</strong></p>
            </ion-col>
            <ion-col size="8">
                <p>John Anderson 243 Park Hall...</p>
            </ion-col>
            <ion-col size="1">
                <div class="contact_book">
                    <img src="assets/images/contact_book.svg"/>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="3">
                <p><strong>To</strong></p>
            </ion-col>
            <ion-col size="8">
                <p>John Anderson 243 Park Hall...</p>
            </ion-col>
            <ion-col size="1">
                <div class="contact_book" @click="contact">
                    <img src="assets/images/contact_book.svg"/>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="3">
                <p><strong>Subject</strong></p>
            </ion-col>
            <ion-col size="9">
                <p>Address Change</p>
            </ion-col>
            
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="12">
                <p><strong>Dear Sirs and Madames,</strong></p>
            </ion-col>
            <ion-col size="12">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </ion-col>
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="3">
                <p><strong>Footer</strong></p>
            </ion-col>
            <ion-col size="9">
                <p>Sincerely, <br> Justin Shepp</p>
            </ion-col>
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="5">
                <p><strong>Signature</strong></p>
            </ion-col>
            <ion-col size="2"></ion-col>
            <ion-col size="5">
                <div class="btn_ajj">
                    <ion-button shape="round" type="button" @click="() => router.push('/changesignature')">Adjust</ion-button>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="3">
                <p><strong>Letter Size</strong></p>
            </ion-col>
            <ion-col size="4"></ion-col>
            <ion-col size="5">
                <div class="lett_selct">
                    <ion-select value="DIN 5008 A">
                        <ion-select-option value="DIN 5008 A">DIN 5008 A</ion-select-option>
                        <ion-select-option value="DIN 5008 A">DIN 5008 A</ion-select-option>
                        <ion-select-option value="DIN 5008 A">DIN 5008 A</ion-select-option>
                        <ion-select-option value="DIN 5008 A">DIN 5008 A</ion-select-option>
                    </ion-select>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="row_01 b_p bor_b">
            <ion-col size="3">
                <p><strong>Markers</strong></p>
            </ion-col>
            <ion-col size="4"></ion-col>
            <ion-col size="5">
                <div class="mark_toggle">
                    <ion-toggle color="primary"></ion-toggle>
                </div>
            </ion-col>
        </ion-row>
    </div>
  </ion-content>
  <ion-footer class="ion-no-border back_foo">
    <ion-toolbar>
      <ion-row>
            <ion-col size="1">
                <div class="icon_bn">
                    <img src="assets/images/bold.svg"/>
                </div>
            </ion-col>
            <ion-col size="1">
                <div class="icon_bn">
                    <img src="assets/images/itelic.svg"/>
                </div>
            </ion-col>
            <ion-col size="1">
                <div class="icon_bn">
                    <img src="assets/images/underline.svg"/>
                </div>
            </ion-col>

            <ion-col size="6">
                <div class="icon_bn" @click="() => router.push('/preview')">
                    <img src="assets/images/view_black.svg"/>
                </div>
            </ion-col>

            <ion-col size="3">
                <div class="icon_bn right_km">
                    <img @click="presentAlert" src="assets/images/delete_black.svg"/>
                </div>
            </ion-col>
        </ion-row>
    </ion-toolbar>
  </ion-footer>
  </div>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonFooter, IonContent, IonToolbar, IonButtons, IonButton, IonMenuButton, IonSelectOption, IonSelect, IonToggle, IonCol, IonRow,
alertController, IonSearchbar, modalController  } from '@ionic/vue'
import {add} from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { isPlatform,getPlatforms } from '@ionic/vue';
import Changesignature from './Changesignature.vue'
import Preview from './Preview.vue'
import Contacts from './Contacts.vue'

export default defineComponent({
  name: 'Writedocument',
  components: {
    IonContent,
    IonFooter,
    IonButton,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonSelect,
    IonSelectOption,
    IonToggle,
    IonCol,
    IonSearchbar,
    IonRow,
    IonMenuButton
  },
  setup() {
      const router = useRouter();
      return { router, add };
  },
  data() {
      return {
          styleClass:"",
          isIpad:isPlatform('ipad')
      }
  },
  methods:{
      
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

     async openModal() {
         modalController.dismiss()
      const modal = await modalController.create({
          component: Changesignature,
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

     async documentSend() {
         modalController.dismiss()
        const alert = await alertController
            .create({
            cssClass: 'document_send',  
            message: '<div class="send_doxs"><img src="assets/images/check_send.svg"/><p>Your Document has been <br> sucessfully sent</p></div>',
            });
        return alert.present();
     },

     addclass(){
         if(this.$data.styleClass != "locked"){
            this.$data.styleClass = "locked"
         }else{
             this.$data.styleClass = ""
         }
        
     }
     
  }
});
</script>

<style scoped>

</style>