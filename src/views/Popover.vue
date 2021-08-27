<template>
   <ion-list class="desktop_header_dropdownList">
      <!-- <ion-list-header>Ionic</ion-list-header> -->
      <ion-item button @click="account" lines="none">
         <div class="Icon-Box">
            <img src="assets/images/user-account.svg" />
         </div>
         <p>Account</p>
      </ion-item>

      <ion-item button lines="none" @click="contact">
         <div class="Icon-Box">
            <img src="assets/images/contact_book.svg" />
         </div>

         <p>Contacts</p>
      </ion-item>

      <ion-item button lines="none" @click="settings">
         <div class="Icon-Box">
            <img src="assets/images/setting.svg" />
         </div>

         <p>Settings</p>
      </ion-item>

      <ion-item button lines="none" @click="() => {router.push('/home');dismiss();}">
         <div class="Icon-Box">
            <img class="logout-icon" src="assets/images/logout.svg" />
         </div>
         <p>Logout</p>
      </ion-item>
      <!-- <ion-item lines="none" detail="false" button onClick="dismissPopover()">Close</ion-item> -->
   </ion-list>
</template>

<script lang="ts">
   import { IonList, IonItem, modalController, popoverController } from '@ionic/vue';
   import { defineComponent } from 'vue';
   import { useRouter } from 'vue-router';
   import Account from './Account.vue';
   import Settings from './Settings.vue';
   import Contacts from './Contacts.vue';

   export default defineComponent({
      name: 'Popover Component',
      components: {
         IonList,
         IonItem
      },

      setup() {
         const router = useRouter();
         return {
            router
         };
      },
      
      methods: {

         dismiss() {
            popoverController.dismiss()
         },

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