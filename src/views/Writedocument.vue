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
                <div class="contact_book" @click="() => router.push('/contacts')">
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
            <ion-col size="3">
                <p><strong>Signature</strong></p>
            </ion-col>
            <ion-col size="4"></ion-col>
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
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonFooter, IonContent, IonToolbar, IonButtons, IonButton, IonMenuButton, IonSelectOption, IonSelect, IonToggle, IonCol, IonRow,
alertController  } from '@ionic/vue'
import {add} from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

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
    IonRow,
    IonMenuButton
  },
  setup() {
      const router = useRouter();
      return { router, add };
  },
  data() {
      return {
          styleClass:""
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

     async documentSend() {
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