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
          <span class="title_top">Contacts</span> 
        </div>
      </ion-col>
      
    </ion-row>
  </ion-toolbar>

  <ion-segment value="contacts" @ionChange="segmentChanged($event)">
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
</ion-page>

</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonFooter, IonButton, IonSegmentButton, IonSegment, IonItem, IonLabel, IonList, IonCheckbox   } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

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
          selectedSegment:'contacts'
      }
  },
  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log('Segment changed', ev.detail.value);
      this.$data.selectedSegment = ev.detail.value;
    }
  }
});
</script>

<style scoped>

</style>