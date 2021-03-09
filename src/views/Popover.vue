<template>
    <ion-list class="desktop_header_dropdownList">
            <!-- <ion-list-header>Ionic</ion-list-header> -->
            <ion-item button @click="account" lines="none">
                <img src="assets/images/user-account.svg"/>
                <p>Account</p>
            </ion-item>

            <ion-item button lines="none">
                <img src="assets/images/contact_book.svg"/>
                <p>Contacts</p>
            </ion-item>

            <ion-item button lines="none">
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
import {IonList,IonItem,modalController} from '@ionic/vue';
import { defineComponent } from 'vue';
import Account from './Account.vue';

export default defineComponent({
    name: 'Popover Component',
    components: {
        IonList,
        IonItem
    },
    methods:{
        async account() {
        modalController.dismiss()
        const modal = await modalController.create({
          component: Account,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },
    }
})
</script>