<template>

<ion-page> 
    <div v-if="isMobile">
        <ion-page> 
    <ion-header class="header_am">
    <ion-toolbar>
        <ion-row class="ion-align-items-center">
            <ion-col size="1">
                <div class="ion-text-center">
                    <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
                </div>
            </ion-col>
            <ion-col size="9">
                <div class="ion-text-left">
                    <span class="title_top">Account</span> 
                </div>
            </ion-col>
            <ion-col size="2">
                
            </ion-col>
        </ion-row>
    </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    <div class="main_setting ion-margin">
        <div class="account_m">
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
                    <ion-button shape="round" class="ok_btn">Add Contact</ion-button>
                </ion-col>
                <ion-col size="6">
                    <ion-button shape="round" class="cancel_btn">Cancel</ion-button>
                </ion-col>
            </ion-row>
        </div>
    </div>
    </ion-content>
    </ion-page>
    </div>

<div v-if="isDesktop">
    <ion-page> 
        <ion-header class="ipad_topbar bordes_ipad">
            <ion-toolbar>
                <ion-row class="ion-align-items-center bar_c">
                    <ion-col size="6" class="ipad_cols">
                        <div class="ion-text-left ipad_flx">
                            <span class="popup_title">Add Contacts</span> 
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

    <ion-content :fullscreen="true">
    <div class="main_setting ion-margin">
        <div class="account_m">
            <ion-row class="ion-padding-top">
                <ion-col size="6" class="ion-padding-end">
                    <div lines="none" class="pdd_b">
                        <input type="text" id="first_name" placeholder="Justin" class="user_nam" />
                        <div class="icon_in"><img src="assets/images/normal_u41.svg"/></div>
                    </div>
                </ion-col>

                <ion-col size="6" class="ion-padding-start">
                    <div lines="none" class="pdd_b">
                        <input type="text" id="first_name" placeholder="Shepp" class="user_nam" />
                        <div class="icon_in"><img src="assets/images/normal_u41.svg"/></div>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="">
                <ion-col size="6" class="ion-padding-end">
                    <div lines="none" class="pdd_b">
                        <input type="text" id="first_name" placeholder="justin.shepp@gmail.com" class="user_nam" />
                        <div class="icon_in"><img src="assets/images/mail.png"/></div>
                    </div>
                </ion-col>

                <ion-col size="6" class="ion-padding-start">
                    <div lines="none" class="pdd_b">
                        <input type="text" id="first_name" placeholder="Street" class="user_nam" />
                        <div class="icon_in"><img src="assets/images/home.svg"/></div>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="">
                <ion-col size="6" class="ion-padding-end">
                    <div lines="none" class="pdd_b">
                        <input type="text" id="first_name" placeholder="Zip" class="user_nam" />
                        <div class="icon_in"><img src="assets/images/map_lo.svg"/></div>
                    </div>
                </ion-col>

                <ion-col size="6" class="ion-padding-start">
                    <div lines="none" class="pdd_b selects_ins">
                        <ion-select placeholder="City">
                            <ion-select-option value="f">Female</ion-select-option>
                            <ion-select-option value="m">Male</ion-select-option>
                        </ion-select>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="">
                <ion-col size="6" class="ion-padding-end">
                    <div lines="none" class="pdd_b selects_ins">
                        <ion-select placeholder="Country">
                            <ion-select-option value="f">Female</ion-select-option>
                            <ion-select-option value="m">Male</ion-select-option>
                        </ion-select>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="ion-justify-content-center ion-padding-horizontal ion-padding-bottom ion-margin-bottom">
                <ion-col size="3" class="ion-padding-end">
                    <ion-button shape="round" class="MakeDefault-btn">Add Contact</ion-button>
                </ion-col>

                <ion-col size="3" class="ion-padding-start">
                    <ion-button shape="round" type="default" @click="cancel" class="MakeDefault-btn _gary-outline-btn">Cancel</ion-button>
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
import { IonPage,IonHeader, IonContent, IonToolbar, modalController  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { isPlatform } from '@ionic/vue';
export default defineComponent({
  name: 'Addacontact',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar
  },
  setup() {
      const router = useRouter();
      return { router };
  },
  data() {
      return {
        styleClass:"",
        isIpad:isPlatform('ipad'),
        isDesktop: isPlatform('desktop'),
        isMobile: isPlatform('mobile'),
      }
  },
  methods: {
      cancel() {
        modalController.dismiss()
    },
  }
});
</script>

<style scoped>

</style>
