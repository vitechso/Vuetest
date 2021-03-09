<template>
    <ion-list class="desktop_header_dropdownList">
            <!-- <ion-list-header>Ionic</ion-list-header> -->
            <ion-item button @click="account" lines="none">
                <img src="assets/images/user-account.svg"/>
                <p>Account</p>
            </ion-item>

            <ion-item button lines="none"  @click="contact">
                <img src="assets/images/contact_book.svg"/>
                <p>Contacts</p>
            </ion-item>

            <ion-item button lines="none" @click="settings">
                <img src="assets/images/setting.svg"/>
                <p>Settings</p>
            </ion-item> 

            <ion-item button lines="none">
                <img src="assets/images/logout.svg"/>
                <p>Logout</p>
            </ion-item>
            <!-- <ion-item lines="none" detail="false" button onClick="dismissPopover()">Close</ion-item> -->
    </ion-list>
</template>

<script lang="ts">
import {IonList,IonItem,modalController, popoverController} from '@ionic/vue';
import { defineComponent } from 'vue';
import Account from './Account.vue';
import Settings from './Settings.vue';
import Contacts from './Contacts.vue';

export default defineComponent({
    name: 'Popover Component',
    components: {
        IonList,
        IonItem
    }, 
    methods:{
        cancel() {
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

    async settings() {
        modalController.dismiss()
        const modal = await modalController.create({
          component: Settings,
          cssClass: 'choosetem',
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