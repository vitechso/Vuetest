<template>

<ion-page>
<div  v-if="!isIpad">
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
          <span class="title_top">Contacts</span> 
        </div>
      </ion-col>
      
    </ion-row>
  </ion-toolbar>

  <ion-segment value="contacts" @ionChange="segmentChanged($event)" class="segmnt">
    <ion-segment-button value="contacts" >
      <ion-label>Contacts</ion-label>
    </ion-segment-button>
    <ion-segment-button value="groups">
      <ion-label>Groups</ion-label>
    </ion-segment-button>
  </ion-segment>
    <ion-row class="ion-padding-top ion-padding-bottom">
        <ion-col size="12" class="ion-padding-start ion-padding-end">
            <ion-searchbar class="ion-no-padding search_bts"></ion-searchbar>
        </ion-col>
    </ion-row>

    <ion-row class="ion-padding-start ion-padding-end ion-text-center">
        <ion-col size="6">
            <ion-button class="import_csv" @click="() => router.push('/import-CSVExcel')">Import CSV/Excel</ion-button>
        </ion-col>
        <ion-col size="6">
            <ion-button class="import_csv" @click="() => router.push('/add-contact')">Add Contact</ion-button>
        </ion-col>
    </ion-row>
</ion-header>
  <ion-content :fullscreen="true">
    <div v-if="selectedSegment == 'contacts'" class="ion-padding-start ion-padding-end ion-padding-top">
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
    <div v-if="selectedSegment == 'groups'" class="ion-padding-start ion-padding-end ion-padding-top">
        <div class="contactlist"> 
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
                        <slot end>
                        <div class="control_cin sddsd">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        </slot> 

                        <slot end>
                             <div class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                        </slot>
                    </ion-item>
                </ion-list>
            </div>
        </div>
    </div>
    
  </ion-content>

  <ion-footer class="ion-no-border">
    <ion-toolbar>
        <ion-row>
            <ion-col size="6">
                <ion-button shape="round" class="ok_btn">Ok</ion-button>
            </ion-col>
            <ion-col size="6">
                <ion-button shape="round" class="cancel_btn">Cancel</ion-button>
            </ion-col>
        </ion-row>
      
    </ion-toolbar>
  </ion-footer>
</div>
<div v-if="isIpad">
<ion-header class="ipad_topbar">
        <ion-toolbar>
        <ion-row class="ion-align-items-center bar_c">
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <span class="popup_title">Contacts</span> 
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

          <ion-segment value="contacts" @ionChange="segmentChanged($event)" class="segmnt">
    <ion-segment-button value="contacts" >
      <ion-label>Contacts</ion-label>
    </ion-segment-button>
    <ion-segment-button value="groups">
      <ion-label>Groups</ion-label>
    </ion-segment-button>
  </ion-segment>
    <ion-row class="ion-padding-top ion-padding-bottom">
        <ion-col size="12" class="ion-padding-start ion-padding-end">
            <ion-searchbar class="ion-no-padding search_bts hans_ipad"></ion-searchbar>
        </ion-col>
    </ion-row>

    <ion-row class="ion-padding-start ion-padding-end ion-text-center">
        <ion-col size="8">
            
        </ion-col>
        <ion-col size="4">
            <ion-button class="import_csv" @click="excel">Import CSV/Excel</ion-button>
            <ion-button class="import_csv" @click="() => router.push('/add-contact')">Add Contact</ion-button>
        </ion-col>
    </ion-row>
  </ion-header>

  <ion-content :fullscreen="true">
    <div v-if="selectedSegment == 'contacts'" class="ion-padding-start ion-padding-end ion-padding-top">
        <div class="contactlist"> 
            <div class="alpha"><p>A</p></div>
            <div class="contact_name_list">

                <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>

                <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
        </div>

        <div class="contactlist"> 
            <div class="alpha"><p>B</p></div>
            <div class="contact_name_list">
               <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
        </div>

        <div class="contactlist"> 
            <div class="alpha"><p>C</p></div>
            <div class="contact_name_list">
                <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
        </div>
    </div>
    <div v-if="selectedSegment == 'groups'" class="ion-padding-start ion-padding-end ion-padding-top">
        <div class="contactlist"> 
            <div class="contact_name_list">
                
               <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>

                <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
        </div>
    </div>
    
  </ion-content>
</div>
</ion-page>


</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonFooter, IonButton, IonSegmentButton, IonSegment, IonItem, IonLabel, IonList, IonCheckbox, isPlatform, modalController   } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import ImportCSVExcel from './ImportCSVExcel.vue'
export default defineComponent({
  name: 'Contacts',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonFooter,
    IonSegmentButton,
    IonSegment,
    IonItem,
    IonLabel,
    IonList,
    IonCheckbox,
    IonButton
  },
  setup() {
      
      const router = useRouter();
      return { router };
  },
  data(){
      return{
          selectedSegment:'contacts',
          styleClass:"",
          isIpad:isPlatform('ipad')
      }
  },
  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log('Segment changed', ev.detail.value);
      this.$data.selectedSegment = ev.detail.value;
    },

    async excel() {
        modalController.dismiss()
      const modal = await modalController.create({
          component: ImportCSVExcel,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },
    cancel() {
        modalController.dismiss()
    }
  }
});
</script>

<style scoped>

</style>