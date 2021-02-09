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
          <span class="title_top">Send Fax</span> 
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
  <ion-content :fullscreen="true" >
    <div id="container_fax">
        <div class="text_top ion-text-center ion-padding-top ion-padding-bottom">
            <p>Please enter fax numbers of the</p>
            <p>recipients to send fax</p>
        </div>
        
        <div class="fax_box">
            <div class="inner_details">
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Name:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>Andrew Symonds</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Address:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Cost:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>€0.50</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Enter Fax Number:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <div class="fax_num">
                            <img src="assets/images/print.svg"/>
                            <ion-input type="text"></ion-input>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                    </ion-col>
                    <ion-col size="8">
                        <div class="delete_btn">
                            <a href="#"><img src="assets/images/delete_black.svg"/> Delete Recipient</a>
                        </div>
                    </ion-col>
                </ion-row>
            </div>

            <div class="inner_details">
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Name:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>Andrew Symonds</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Address:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Cost:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>€0.50</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Enter Fax Number:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <div class="fax_num">
                            <img src="assets/images/print.svg"/>
                            <ion-input type="text"></ion-input>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                    </ion-col>
                    <ion-col size="8">
                        <div class="delete_btn">
                            <a href="#"><img src="assets/images/delete_black.svg"/> Delete Recipient</a>
                        </div>
                    </ion-col>
                </ion-row>
            </div>


            <div class="inner_details">
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Name:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>Andrew Symonds</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Address:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Cost:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <p>€0.50</p>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                        <p><strong>Enter Fax Number:</strong></p>
                    </ion-col>
                    <ion-col size="8">
                        <div class="fax_num">
                            <img src="assets/images/print.svg"/>
                            <ion-input type="text"></ion-input>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="row_01">
                    <ion-col size="4">
                    </ion-col>
                    <ion-col size="8">
                        <div class="delete_btn">
                            <a href="#"><img src="assets/images/delete_black.svg"/> Delete Recipient</a>
                        </div>
                    </ion-col>
                </ion-row>
            </div>

            <div class="total_nu">
                <ion-row class="num_tols">
                    <ion-col size="6">
                        <p>Total number of recipients</p>
                    </ion-col>
                    <ion-col size="6">
                        <p>3</p>
                    </ion-col>
                </ion-row>
                <ion-row class="g_total">
                    <ion-col size="6">
                        <p><strong>Grand Total</strong></p>
                    </ion-col>
                    <ion-col size="6">
                        <p><strong>€1.50</strong></p>
                    </ion-col>
                </ion-row>
            </div>
        </div>
    </div>
  </ion-content>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton } from '@ionic/vue'
import {add} from 'ionicons/icons';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Sendfax',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
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