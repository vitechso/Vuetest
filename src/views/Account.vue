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
                      <span class="title_top title_top_mobo">Account</span>
                  </div>
                  <div class="TopHeader-icon">
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
            <ion-row class="mb-1">
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
                <ion-col size="12" class="ion-no-padding">
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

            <ion-row class="ion-justify-content-center ion-padding-top">
                <ion-col size="12" class="ion-no-padding">
                    <div class="BtnBlock">
                        <ion-button shape="round" class="next_btn">Update</ion-button>
                        <ion-button shape="round" type="default" @click="()=>router.push('/choose-template')" class="next_btn _gary-outline-btn">Cancel</ion-button>
                    </div>
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
</div>

<div v-if="isIpad">
<ion-page>

<ion-header class="header_am">
  <ion-toolbar class="header-top-ipad">
    <ion-row class="ion-align-items-center ion-padding-horizontal">
      <ion-col size="8" class="bars_hms">
        <div class="ion-text-center ins_han">
            <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
        </div>
        <div class="ion-text-left ipad_flx">
          <span class="title_top ipad_title_top">Account</span> 
        </div>
      </ion-col>
      <ion-col size="4">
        <ion-buttons class="right_ipad">
            <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
        </ion-buttons>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>

<ion-content :fullscreen="true" class="account-page-ipad">
    <div class="main_setting ion-margin account_ipads">
        <div class="account_m">
            <ion-row>
                <ion-col size="12" class="ion-padding-end">
                    <p class="user_ids iad_spl">User ID: MU-73993</p>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="12" class="ion-padding-start">
                    <div class="user_image">
                        <div class="inner_user_img">
                            <img src="assets/images/user_avtar.svg" />
                        </div>
                    </div>
                </ion-col>
            </ion-row>
            
            <ion-row>
                <ion-col size="6" class="ion-padding-end">
                    <div class="upload right">
                        <img src="assets/images/upload_icon.svg" /> <p><strong>Upload Picture</strong></p>
                    </div>
                </ion-col>
                <ion-col size="6" class="ion-padding-start">
                    <div class="upload left">
                        <img src="assets/images/take_picture.svg" /> <p><strong>Take Picture</strong></p>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="inputs_accounts">
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

            <ion-row class="inputs_accounts">
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

            <ion-row class="inputs_accounts">
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
            
            <ion-row class="inputs_accounts">
                <ion-col size="6" class="ion-padding-end">
                    <div lines="none" class="pdd_b selects_ins">
                        <ion-select placeholder="Country">
                            <ion-select-option value="f">Female</ion-select-option>
                            <ion-select-option value="m">Male</ion-select-option>
                        </ion-select>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="ion-justify-content-center ion-padding ion-margin-vertical">
                <ion-col size="12">
                    <div class="BtnBlock btn-176-tab">
                        <ion-button shape="round" class="MakeDefault-btn">Update</ion-button>
                        <ion-button shape="round" type="default" @click="cancel" class="MakeDefault-btn _gary-outline-btn">Cancel</ion-button>
                    </div>
                </ion-col>
            </ion-row>
        </div>
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
          <span class="popup_title">Account</span> 
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
    <div class="main_setting ion-margin account_ipads">
        <div class="account_m account_desktop">
            <ion-row>
                <ion-col size="12">
                    <p class="user_ids iad_spl">User ID: MU-73993</p>
                </ion-col>
            </ion-row>
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
                    <div class="upload right">
                        <img src="assets/images/upload_icon.svg" /> <p>Upload Picture</p>
                    </div>
                </ion-col>
                <ion-col size="6">
                    <div class="upload left">
                        <img src="assets/images/take_picture.svg" /> <p>Take Picture</p>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="inputs_accounts">
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

            <ion-row class="inputs_accounts">
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

            <ion-row class="inputs_accounts">
                <ion-col size="6" class="ion-padding-end">
                    <div lines="none" class="pdd_b">
                        <input type="text" id="first_name" placeholder="Zip" class="user_nam" />
                        <div class="icon_in"><img src="assets/images/map_lo.svg"/></div>
                    </div>
                </ion-col>
                <ion-col size="6" class="ion-padding-start">
                    <div lines="none" class="pdd_b selects_ins desktop-small-popup">
                        <ion-select placeholder="City" class="desktop-small-popup">
                            <ion-select-option value="f">Female</ion-select-option>
                            <ion-select-option value="m">Male</ion-select-option>
                        </ion-select>
                    </div>
                </ion-col>
            </ion-row>
            
            <ion-row class="inputs_accounts">
                <ion-col size="6" class="ion-padding-end">
                    <div lines="none" class="pdd_b selects_ins">
                        <ion-select placeholder="Country">
                            <ion-select-option value="f">Female</ion-select-option>
                            <ion-select-option value="m">Male</ion-select-option>
                        </ion-select>
                    </div>
                </ion-col>
            </ion-row>

            <ion-row class="ion-justify-content-center ion-padding ion-margin-vertical">
                <ion-col size="12">
                    <div class="BtnBlock">
                        <ion-button shape="round" class="MakeDefault-btn">Update</ion-button>
                        <ion-button shape="round" type="default" @click="cancel" class="MakeDefault-btn _gary-outline-btn">Cancel</ion-button>
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
import { IonPage,IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton, isPlatform, modalController, getPlatforms  } from '@ionic/vue'
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
  },
  methods:{
cancel() {
    console.log("clicked")
    document.body.click()
        modalController.dismiss('cancel')
    },
  },
  data() {
      return {
          styleClass:"",
          isDesktop: isPlatform('desktop'),
        isMobile: getPlatforms().indexOf('iphone')>-1||getPlatforms().indexOf('android')>-1,
        isIpad:getPlatforms().indexOf('ipad')>-1,
      }
  },
});
</script>

<style scoped>

</style>
