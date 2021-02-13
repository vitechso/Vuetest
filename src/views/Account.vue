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
                    <span class="title_top">Account</span> 
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
    <div class="main_setting ion-margin">
        <div class="account_m">
            <ion-row>
                <ion-col size="12">
                    <div class="user_image">
                        <div class="inner_user_img">
                            <img src="assets/images/user_avtar.svg" />
                        </div>
                    </div>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="6">
                    <div class="upload">
                        <img src="assets/images/upload_icon.svg" /> <p><strong>Upload Picture</strong></p>
                    </div>
                </ion-col>
                <ion-col size="6">
                    <div class="upload">
                        <img src="assets/images/take_picture.svg" /> <p><strong>Take Picture</strong></p>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="12">
                    <div lines="none" class="pdd_b">
                        <input type="text" id="first_name" placeholder="Justin" class="user_nam" />
                        <div class="icon_in"><img src="assets/images/normal_u41.svg"/></div>
                    </div>
                    <div lines="none" class="pdd_b">
                        <input type="text" id="first_name" placeholder="Shepp" class="user_nam" />
                        <div class="icon_in"><img src="assets/images/normal_u41.svg"/></div>
                    </div>
                    <div lines="none" class="pdd_b">
                        <input type="text" id="first_name" placeholder="justin.shepp@gmail.com" class="user_nam" />
                        <div class="icon_in"><img src="assets/images/mail.png"/></div>
                    </div>
                    <div lines="none" class="pdd_b">
                        <input type="text" id="first_name" placeholder="Street" class="user_nam" />
                        <div class="icon_in"><img src="assets/images/home.svg"/></div>
                    </div>
                    <div lines="none" class="pdd_b">
                        <input type="text" id="first_name" placeholder="Zip" class="user_nam" />
                        <div class="icon_in"><img src="assets/images/map_lo.svg"/></div>
                    </div>
                    <div lines="none" class="pdd_b selects_ins">
                        <ion-select placeholder="City">
                            <ion-select-option value="f">Female</ion-select-option>
                            <ion-select-option value="m">Male</ion-select-option>
                        </ion-select>
                    </div>
                    <div lines="none" class="pdd_b selects_ins">
                        <ion-select placeholder="Country">
                            <ion-select-option value="f">Female</ion-select-option>
                            <ion-select-option value="m">Male</ion-select-option>
                        </ion-select>
                    </div>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="6">
                    <ion-button shape="round" class="ok_btn">Update</ion-button>
                </ion-col>
                <ion-col size="6">
                    <ion-button shape="round" class="cancel_btn">Cancel</ion-button>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="12">
                    <p class="user_ids">User ID: MU-73993</p>
                </ion-col>
            </ion-row>
        </div>
    </div>
  </ion-content>

</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Account',
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
      return { router };
  }
});
</script>

<style scoped>

</style>
