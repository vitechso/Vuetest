<template>
    <ion-list class="desktop_header_dropdownList">
            <ion-item button lines="none">
                <div class="Icon-Box">
                  <img src="assets/images/allLetter.svg"/>
                </div>
                
                <p>All Letters</p>
                <p slot="end">20</p>
            </ion-item>

            <ion-item button lines="none">
                <div class="Icon-Box">
                  <img src="assets/images/Draft.svg"/>
                </div>
               
                <p>Drafts</p>
                <p slot="end">10</p>
            </ion-item>

            <ion-item button lines="none" @click="()=>router.push('/send-doc')">
                <div class="Icon-Box">
                  <img src="assets/images/sent-icon.svg" class="send-doc"/>
                </div>
                
                <p>Sent</p>
                <p slot="end">15</p>
            </ion-item> 
    </ion-list>
</template>

<script lang="ts">
import {IonList,IonItem,modalController, popoverController} from '@ionic/vue';
import { defineComponent } from 'vue';
import Account from './Account.vue';
import Settings from './Settings.vue';
import Contacts from './Contacts.vue';

export default defineComponent({
    name: 'AllletterMenu',
    components: {
        IonList,
        IonItem
    }, 
    methods:{
        cancel () {
        modalController.dismiss()
    },
        async account() {
        modalController.dismiss()
        const modal = await modalController.create({
          component: Account,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        });
        popoverController.dismiss()
      return modal.present();
    },

    async settings () {
        modalController.dismiss()
        const modal = await modalController.create({
          component: Settings,
          cssClass: 'choosetem',
          animated: false,
          componentProps: {
            title: 'New Title'
          },
        })
         popoverController.dismiss()
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
        popoverController.dismiss()
      return modal.present();
    },
    }
})
</script>