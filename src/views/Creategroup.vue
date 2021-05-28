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
                                <span class="title_top title_top_mobo">Create Group</span>
                            </div>
                            <div class="TopHeader-icon">
                                
                            </div>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-toolbar>
            
            <ion-row class="ion-padding-top">
                <ion-col size="12" class="ion-padding-start ion-padding-end">
                    <ion-searchbar placeholder="Group Name" class="ion-no-padding search_bts GroupSearch"></ion-searchbar>
                </ion-col>
            </ion-row>

            <ion-row class="CG-title-row">
                <ion-col size="12" class="">
                    <p class="CG-title">Select contacts to add in the group</p>
                </ion-col>
            </ion-row>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="ion-padding-horizontal ion-padding-bottom">
                <div class="contactlist"> 
                    <div class="alpha"><p>A</p></div>
                    <div class="contact_name_list">
                        <ion-list>
                            <ion-item lines="none" class="list_cons">
                                <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                <ion-label>Andrew Symonds</ion-label>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </ion-item>


                            <ion-item lines="none" class="list_cons">
                                <ion-checkbox color="primary" slot="start"></ion-checkbox>
                                <ion-label>Andy Bickel</ion-label>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </ion-item>


                            <ion-item lines="none" class="list_cons">
                                <ion-checkbox color="primary" slot="start"></ion-checkbox>
                                <ion-label>Jon Snow</ion-label>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </ion-item>
                        </ion-list>
                    </div>
                </div>

                <div class="contactlist"> 
                    <div class="alpha"><p>B</p></div>
                    <div class="contact_name_list">
                        <ion-list>
                            <ion-item lines="none" class="list_cons">
                                <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                <ion-label>Andrew Symonds</ion-label>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </ion-item>


                            <ion-item lines="none" class="list_cons">
                                <ion-checkbox color="primary" slot="start"></ion-checkbox>
                                <ion-label>Andy Bickel</ion-label>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </ion-item>


                            <ion-item lines="none" class="list_cons">
                                <ion-checkbox color="primary" slot="start"></ion-checkbox>
                                <ion-label>Jon Snow</ion-label>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </ion-item>
                        </ion-list>
                    </div>
                </div>

                <div class="contactlist"> 
                    <div class="alpha"><p>C</p></div>
                    <div class="contact_name_list">
                        <ion-list>
                            <ion-item lines="none" class="list_cons">
                                <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                <ion-label>Andrew Symonds</ion-label>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </ion-item>


                            <ion-item lines="none" class="list_cons">
                                <ion-checkbox color="primary" slot="start"></ion-checkbox>
                                <ion-label>Andy Bickel</ion-label>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </ion-item>


                            <ion-item lines="none" class="list_cons">
                                <ion-checkbox color="primary" slot="start"></ion-checkbox>
                                <ion-label>Jon Snow</ion-label>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div slot="end" class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </ion-item>
                        </ion-list>
                    </div>
                </div>
            </div>
        </ion-content>

        <ion-footer class="ion-no-border">
            <ion-toolbar class="contact-footer-toolbar">
                <ion-row class="ion-justify-content-center contact-footer">
                    <ion-col size="12">
                        <div class="BtnBlock">
                            <ion-button shape="round" class="MakeDefault-btn btn50">Create Group</ion-button>
                            <ion-button shape="round" type="default" @click="()=>router.push('/choose-template')" class="MakeDefault-btn btn50 _gary-outline-btn">Cancel</ion-button>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</div>

<div v-if="isIpad">
    <ion-page> 
        <ion-header class="ipad_topbar dark333">
            <ion-toolbar>
                <ion-row class="ion-align-items-center bar_c">
                    <ion-col size="6" class="ipad_cols">
                        <div class="ion-text-left ipad_flx">
                            <img @click="cancel" class="back-btn" src="assets/images/back-black.svg"/>
                            <span class="popup_title">Create Group</span> 
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

            <ion-row class="ion-padding-top">
                <ion-col size="12" class="ion-padding-start ion-padding-end">
                    <ion-searchbar placeholder="Group Name" class="ion-no-padding search_bts GroupSearch hans_ipad cntct-search-desk"></ion-searchbar>
                </ion-col>
            </ion-row>

            <ion-row class="CG-title-row">
                <ion-col size="12" class="">
                    <p class="CG-title">Select contacts to add in the group</p>
                </ion-col>
            </ion-row>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="main_setting ion-padding-start contacts-inner-box">
                <div class="Contacts-List-Info Group-list-container">
                    <div class="contactlist contactlist-desk contactlist-ipad"> 
                        <div class="alpha"><p>A</p></div>
                        <div class="contact_name_list">
                            <ion-row class="main_conipad  main-cont-desk">
                                <ion-col size="3">
                                    <ion-item lines="none">
                                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                        <ion-label>Andrew Symonds</ion-label>
                                    </ion-item>
                                </ion-col>

                                <ion-col size="3" class="ion-padding-end">
                                    <div class="insd">
                                        <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                                    </div>
                                </ion-col>
                                
                                <ion-col size="2">
                                    <div class="insd">
                                        <p>401-333-2828</p>
                                    </div>
                                </ion-col>
                                <ion-col size="4" class="ion-padding-end">
                                    <div class="hsma">
                                        <div class="insd">
                                            <p>andrew@yahoo.com</p>
                                        </div>
                                    </div>
                                </ion-col>
                            </ion-row>

                            <ion-row class="main_conipad  main-cont-desk">
                                <ion-col size="3">
                                    <ion-item lines="none">
                                    <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                    <ion-label>Andy Bickel</ion-label>
                                    </ion-item>
                                </ion-col>
                                <ion-col size="3" class="ion-padding-end">
                                    <div class="insd">
                                        <p>13 Green Park Avenues Kassel 11015 Germany</p>
                                    </div>
                                </ion-col>
                                <ion-col size="2">
                                    <div class="insd">
                                        <p>503-272-2562</p>
                                    </div>
                                </ion-col>
                                <ion-col size="4" class="ion-padding-end">
                                    <div class="hsma">
                                        <div class="insd">
                                            <p>andybickkel@yahoo.com</p>
                                        </div>
                                    </div>
                                </ion-col>
                            </ion-row>
                        </div>
                    </div>

                    <div class="contactlist contactlist-desk contactlist-ipad"> 
                        <div class="alpha"><p>B</p></div>
                        <div class="contact_name_list">
                        <ion-row class="main_conipad  main-cont-desk">
                                <ion-col size="3">
                                    <ion-item lines="none">
                                    <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                    <ion-label>Bryan Adams</ion-label>
                                    </ion-item>
                                </ion-col>
                                <ion-col size="3" class="ion-padding-end">
                                    <div class="insd">
                                        <p>12 Model Town Road Berlin 11017 Germany</p>
                                    </div>
                                </ion-col>
                                <ion-col size="2">
                                    <div class="insd">
                                        <p>503-272-2562</p>
                                    </div>
                                </ion-col>
                                <ion-col size="4" class="ion-padding-end">
                                    <div class="hsma">
                                        <div class="insd">
                                            <p>bryan@yahoo.com</p>
                                        </div>
                                    
                                    </div>
                                </ion-col>
                            </ion-row>
                            <ion-row class="main_conipad  main-cont-desk">
                                <ion-col size="3">
                                    <ion-item lines="none">
                                    <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                    <ion-label>Benjamin Williams</ion-label>
                                    </ion-item>
                                </ion-col>
                                <ion-col size="3" class="ion-padding-end">
                                    <div class="insd">
                                        <p>133 Civil Lines GT Road Munich 11017 Germany</p>
                                    </div>
                                </ion-col>
                                <ion-col size="2">
                                    <div class="insd">
                                        <p>503-272-2562</p>
                                    </div>
                                </ion-col>
                                <ion-col size="4" class="ion-padding-end">
                                    <div class="hsma">
                                        <div class="insd">
                                            <p>bryan@yahoo.com</p>
                                        </div>
                                    </div>
                                </ion-col>
                            </ion-row>

                            <ion-row class="main_conipad  main-cont-desk">
                                <ion-col size="3">
                                    <ion-item lines="none">
                                    <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                    <ion-label>Brett D'souza</ion-label>
                                    </ion-item>
                                </ion-col>
                                <ion-col size="3" class="ion-padding-end">
                                    <div class="insd">
                                        <p>13 Green Park Avenues Kassel 11015 Germany</p>
                                    </div>
                                </ion-col>
                                <ion-col size="2">
                                    <div class="insd">
                                        <p>503-272-2562</p>
                                    </div>
                                </ion-col>
                                <ion-col size="4" class="ion-padding-end">
                                    <div class="hsma">
                                        <div class="insd">
                                            <p>brett@gmail.com</p>
                                        </div>
                                    </div>
                                </ion-col>
                            </ion-row>
                        </div>
                    </div>

                    <ion-row class="ion-justify-content-center ion-padding ion-margin-vertical">
                        <ion-col size="12">
                            <div class="BtnBlock">
                                <ion-button shape="round" class="MakeDefault-btn">Create Group</ion-button>
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
                            <img @click="back" class="back-btn" src="assets/images/back-black.svg"/>
                            <span class="popup_title">Create Group</span> 
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

            <ion-row class="ion-padding-top">
                <ion-col size="12" class="ion-padding-start ion-padding-end">
                    <ion-searchbar placeholder="Group Name" class="ion-no-padding search_bts GroupSearch hans_ipad cntct-search-desk"></ion-searchbar>
                </ion-col>
            </ion-row>

            <ion-row class="CG-title-row">
                <ion-col size="12" class="">
                    <p class="CG-title">Select contacts to add in the group</p>
                </ion-col>
            </ion-row>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="main_setting ion-padding-start">
                <div class="Contacts-List-Info Group-list-container">
                    <div class="contactlist contactlist-desk"> 
                        <div class="alpha"><p>A</p></div>
                        <div class="contact_name_list">
                            <ion-row class="main_conipad  main-cont-desk">
                                <ion-col size="3">
                                    <ion-item lines="none">
                                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                        <ion-label>Andrew Symonds</ion-label>
                                    </ion-item>
                                </ion-col>

                                <ion-col size="3" class="ion-padding-end">
                                    <div class="insd">
                                        <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                                    </div>
                                </ion-col>
                                
                                <ion-col size="2">
                                    <div class="insd">
                                        <p>401-333-2828</p>
                                    </div>
                                </ion-col>
                                <ion-col size="4" class="ion-padding-end">
                                    <div class="hsma">
                                        <div class="insd">
                                            <p>andrew@yahoo.com</p>
                                        </div>
                                    </div>
                                </ion-col>
                            </ion-row>

                            <ion-row class="main_conipad  main-cont-desk">
                                <ion-col size="3">
                                    <ion-item lines="none">
                                    <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                    <ion-label>Andy Bickel</ion-label>
                                    </ion-item>
                                </ion-col>
                                <ion-col size="3" class="ion-padding-end">
                                    <div class="insd">
                                        <p>13 Green Park Avenues Kassel 11015 Germany</p>
                                    </div>
                                </ion-col>
                                <ion-col size="2">
                                    <div class="insd">
                                        <p>503-272-2562</p>
                                    </div>
                                </ion-col>
                                <ion-col size="4" class="ion-padding-end">
                                    <div class="hsma">
                                        <div class="insd">
                                            <p>andybickkel@yahoo.com</p>
                                        </div>
                                    </div>
                                </ion-col>
                            </ion-row>
                        </div>
                    </div>

                    <div class="contactlist contactlist-desk "> 
                        <div class="alpha"><p>B</p></div>
                        <div class="contact_name_list">
                        <ion-row class="main_conipad  main-cont-desk">
                                <ion-col size="3">
                                    <ion-item lines="none">
                                    <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                    <ion-label>Bryan Adams</ion-label>
                                    </ion-item>
                                </ion-col>
                                <ion-col size="3" class="ion-padding-end">
                                    <div class="insd">
                                        <p>12 Model Town Road Berlin 11017 Germany</p>
                                    </div>
                                </ion-col>
                                <ion-col size="2">
                                    <div class="insd">
                                        <p>503-272-2562</p>
                                    </div>
                                </ion-col>
                                <ion-col size="4" class="ion-padding-end">
                                    <div class="hsma">
                                        <div class="insd">
                                            <p>bryan@yahoo.com</p>
                                        </div>
                                    
                                    </div>
                                </ion-col>
                            </ion-row>
                            <ion-row class="main_conipad  main-cont-desk">
                                <ion-col size="3">
                                    <ion-item lines="none">
                                    <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                    <ion-label>Benjamin Williams</ion-label>
                                    </ion-item>
                                </ion-col>
                                <ion-col size="3" class="ion-padding-end">
                                    <div class="insd">
                                        <p>133 Civil Lines GT Road Munich 11017 Germany</p>
                                    </div>
                                </ion-col>
                                <ion-col size="2">
                                    <div class="insd">
                                        <p>503-272-2562</p>
                                    </div>
                                </ion-col>
                                <ion-col size="4" class="ion-padding-end">
                                    <div class="hsma">
                                        <div class="insd">
                                            <p>bryan@yahoo.com</p>
                                        </div>
                                    </div>
                                </ion-col>
                            </ion-row>

                            <ion-row class="main_conipad  main-cont-desk">
                                <ion-col size="3">
                                    <ion-item lines="none">
                                    <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                    <ion-label>Brett D'souza</ion-label>
                                    </ion-item>
                                </ion-col>
                                <ion-col size="3" class="ion-padding-end">
                                    <div class="insd">
                                        <p>13 Green Park Avenues Kassel 11015 Germany</p>
                                    </div>
                                </ion-col>
                                <ion-col size="2">
                                    <div class="insd">
                                        <p>503-272-2562</p>
                                    </div>
                                </ion-col>
                                <ion-col size="4" class="ion-padding-end">
                                    <div class="hsma">
                                        <div class="insd">
                                            <p>brett@gmail.com</p>
                                        </div>
                                    </div>
                                </ion-col>
                            </ion-row>
                        </div>
                    </div>

                    <ion-row class="ion-justify-content-center ion-padding ion-margin-vertical">
                        <ion-col size="12">
                            <div class="BtnBlock">
                                <ion-button shape="round" class="MakeDefault-btn">Create Group</ion-button>
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
import { IonPage,IonHeader, IonContent, IonToolbar, modalController, getPlatforms  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { isPlatform } from '@ionic/vue';
import Contacts from './Contacts.vue';

export default defineComponent({
  name: 'Creategroup',
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
        isDesktop: isPlatform('desktop'),
        isMobile: getPlatforms().indexOf('iphone')>-1||getPlatforms().indexOf('android')>-1,
        isIpad:getPlatforms().indexOf('ipad')>-1,
      }
  },
  methods: {
      cancel() {
        modalController.dismiss('cancel')
    },
    async back() {
        modalController.dismiss();
         const modal = await modalController.create({
          component: Contacts,
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
