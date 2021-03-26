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
            <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
            <span class="title_top title_top_mobo">Select Send Type</span>
          </div>
          <div class="TopHeader-icon">
          </div>
        </div>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>

  <ion-content :fullscreen="true" class="back_white">
    <div id="container_fax">
        <ion-row class="ion-padding-vertical ion-margin-top">
            <ion-col size="12"  @click="selected('sendprint')" class="mb-1" >
                <div  class="send_shares" :class="type=='sendprint'?'active-type':''">
                    <div>
                        <img src="assets/images/yellow_print.svg" />
                    </div>
                    <div class="text_share">
                        <h3>Printed Letter</h3>
                    </div>
                </div>
            </ion-col>

            <ion-col size="12"  @click="selected('sendfax')" class="mb-1" >
                <div  class="send_shares" :class="type=='sendfax'?'active-type':''">
                    <div>
                        <img src="assets/images/yellow_fax.svg" />
                    </div>
                    <div class="text_share">
                        <h3>Fax</h3>
                    </div>
                </div>
            </ion-col>

            <ion-col size="12"  @click="selected('pdf')" class="mb-1" >
                <div  class="send_shares" :class="type=='pdf'?'active-type':''">
                    <div>
                        <img src="assets/images/yellow_pdf.svg" />
                    </div>
                    <div class="text_share">
                        <h3>Pdf</h3>
                    </div>
                </div>
            </ion-col>
        </ion-row>

        <ion-row class="ion-padding-top ion-padding-bottom">
            <ion-col size="12">
                <div class="ion_btn_next">
                    <ion-button @click="nextMobile()" :disabled='isDisabled' shape="round" class="next_btn next_btn_mobo">Next</ion-button>
                </div>
            </ion-col>
        </ion-row>
    </div>
  </ion-content>
</ion-page>
</div>

<div v-if="isIpad">
<ion-page>
    <ion-header class="ipad_topbar bordes_ipad">
        <ion-toolbar>
        <ion-row class="ion-align-items-center bar_c">
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <span class="popup_title">Select Send Type</span> 
        </div>
      </ion-col>
      <ion-col size="4"></ion-col>
      <ion-col size="2">
        <div @click="cancel" class="close_popus">
            <img src="assets/images/cross_icon.svg"/>
        </div>
      </ion-col>
    </ion-row>
        </ion-toolbar>
  </ion-header>

  <ion-content :fullscreen="true" class="back_white">
    <div id="container_fax" class="ion-top_padds">

    <ion-row class="ion-margin-top ion-margin-bottom">
        <ion-col size="4" @click="() => {modalController.dismiss(); router.push('/sendprintedletter')}">
            <div class="inner_sends">
                <div class="icon_mipad">
                    <img src="assets/images/yellow_print.svg" />
                </div>
                <div class="text_shareipad">
                    <h3>Printed Letter</h3>
                </div>
            </div>
        </ion-col>

        <ion-col size="4" @click="() => {modalController.dismiss(); router.push('/sendfax')}">
            <div class="inner_sends">
                <div class="icon_mipad">
                    <img src="assets/images/yellow_fax.svg" />
                </div>
                <div class="text_shareipad">
                    <h3>Fax</h3>
                </div>
            </div>
        </ion-col>

        <ion-col size="4">
            <div class="inner_sends">
                <div class="icon_mipad">
                    <img src="assets/images/yellow_pdf.svg" />
                </div>

                <div class="text_shareipad">
                    <h3>Pdf</h3>
                </div>
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
</div>

<div v-if="isDesktop">
<ion-page>
    <ion-header class="ipad_topbar">
        <ion-toolbar>
        <ion-row class="ion-align-items-center bar_c">
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <span class="popup_title">Select Send Type</span> 
        </div>
      </ion-col>
      <ion-col size="4"></ion-col>
      <ion-col size="2">
        <div @click="cancel" class="close_popus">
            <img src="assets/images/cross_icon.svg"/>
        </div>
      </ion-col>
    </ion-row>
        </ion-toolbar>
  </ion-header>

  <ion-content :fullscreen="true" class="back_white">
    <div id="container_fax" class="ion-top_padds">

    <ion-row class="ion-margin-top ion-margin-bottom">
        <ion-col size="4"  @click="selected('sendprint')">
            <div  class="inner_sends">
                <div :class="type=='sendprint'?'active-type':''" class="icon_mipad">
                    <img src="assets/images/yellow_print.svg" />
                </div>
                <div class="text_shareipad">
                    <h3>Printed Letter</h3>
                </div>
            </div>
        </ion-col>

        <ion-col size="4"  @click="selected('sendfax')">
            <div class="inner_sends">
                <div :class="type=='sendfax'?'active-type':''" class="icon_mipad">
                    <img src="assets/images/yellow_fax.svg" />
                </div>
                <div class="text_shareipad">
                    <h3>Fax</h3>
                </div>
            </div>
        </ion-col>

        <ion-col size="4"  @click="selected('pdf')">
            <div class="inner_sends">
                <div :class="type=='pdf'?'active-type':''"  class="icon_mipad">
                    <img src="assets/images/yellow_pdf.svg" />
                </div>

                <div class="text_shareipad">
                    <h3>Pdf</h3>
                </div>
            </div>
        </ion-col>
    </ion-row>

    <ion-row class="ion-padding-top ion-padding-bottom">
        <ion-col size="12">
            <div class="ion_btn_next">
                <ion-button @click="next()" :disabled='isDisabled' shape="round" class="next_btn">Next</ion-button>
            </div>
        </ion-col>
    </ion-row>

    </div>
  </ion-content>
</ion-page>
</div>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, isPlatform, modalController  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Sendprintedletter from './Sendprintedletter.vue'
import Sendfax from './Sendfax.vue'

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
      return { router, modalController };
  },
  data() {
      return {
          styleClass:"",
          isDisabled:true,
          type:"",
          isIpad:isPlatform('ipad'),
          isDesktop: isPlatform('desktop'),
          isMobile: isPlatform('mobile'),
      }
  },
  methods:{
    cancel() {
        modalController.dismiss()
    },
    async sendprint() {
         modalController.dismiss()
      const modal = await modalController.create({
          component: Sendprintedletter,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },

    selected(type: any){
        this.isDisabled = false;
        if(type == 'pdf'){
            this.type = 'pdf'
        }
        if(type == 'sendprint'){
            this.type = 'sendprint'
        }
        if(type == 'sendfax'){
            this.type = 'sendfax'
        }
    },

    next(){
        if(this.type == 'pdf'){
            modalController.dismiss()
        }
        if(this.type == 'sendprint'){
            this.sendprint();
        }
        if(this.type == 'sendfax'){
            this.sendfax();
        }
    },

    nextMobile(){
        
        if(this.type == 'sendprint'){
            this.router.push('/sendprintedletter')
        }
        if(this.type == 'sendfax'){
            this.router.push('/sendfax')
        }
    },

    async sendfax() {
         modalController.dismiss()
      const modal = await modalController.create({
          component: Sendfax,
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