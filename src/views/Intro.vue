<template>
  <ion-page>
  <div  v-if="!isIpad">
    <ion-content fullscreen="true">
      <div id="container" class="main_self">
      <ion-row>
        <ion-col size="12">
        <div class="drak_mode">
          <img class="w-100" src="assets/images/dark_mode_logo.svg"/>
        </div>
          <div class="logo">
            <img src="/assets/images/normal_u1.svg">
          </div>
        </ion-col>
      </ion-row>
      
        <ion-slides pager="true">
        <ion-slide>
          <div class="slide">
            <img src="/assets/images/normal_u61.svg"/>
            <p>This app allows you to write letters & faxes easily</p>
          </div>
        </ion-slide>

        <ion-slide>
        <div class="slide">
          <img src="/assets/images/normal_u71.svg"/>
          <p>You don’t have to format nicely, we do that for you</p>
        </div>
        </ion-slide>

        <ion-slide>
        <div class="slide">
          <img src="/assets/images/normal_u83.svg"/>
          <p>You don’t have to search and type addresses</p>
        </div>
        </ion-slide>

        <ion-slide>
        <div class="slide">
          <img src="/assets/images/normal_u95.svg"/>
          <p>You don’t have to print paper #green</p>
        </div>
        </ion-slide>

        <ion-slide>
        <div class="slide">
          <img src="/assets/images/normal_u107.svg"/>
          <p>You don’t have to buy envelope and stamps</p>
        </div>
        </ion-slide>

      </ion-slides>

        <ion-row>
        <ion-col size="12">
          <ion-button type="submit" shape="round" class="get_st" @click="() => router.push('/all-letters')">Get Started</ion-button>
        </ion-col>
      </ion-row>
       

      </div>
    </ion-content>
 </div>

  <div v-if="isIpad" scroll-y="false">
    <ion-content fullscreen="true">
      <div id="container_intro" class="main_self">
      <ion-row>
        <ion-col size="12"> 
        <div class="drak_mode">
          <img class="w-100" src="assets/images/dark_mode_logo.svg"/>
        </div>
          <div class="logo">
            <img src="/assets/images/normal_u1.svg">
          </div>
        </ion-col>
      </ion-row>
      
        <ion-slides pager="true">
        <ion-slide>
          <div class="slide">
            <img src="/assets/images/normal_u61.svg"/>
            <p>This app allows you to write letters & faxes easily</p>
          </div>
        </ion-slide>

        <ion-slide>
        <div class="slide">
          <img src="/assets/images/normal_u71.svg"/>
          <p>You don’t have to format nicely, we do that for you</p>
        </div>
        </ion-slide>

        <ion-slide>
        <div class="slide">
          <img src="/assets/images/normal_u83.svg"/>
          <p>You don’t have to search and type addresses</p>
        </div>
        </ion-slide>

        <ion-slide>
        <div class="slide">
          <img src="/assets/images/normal_u95.svg"/>
          <p>You don’t have to print paper #green</p>
        </div>
        </ion-slide>

        <ion-slide>
        <div class="slide">
          <img src="/assets/images/normal_u107.svg"/>
          <p>You don’t have to buy envelope and stamps</p>
        </div>
        </ion-slide>

      </ion-slides>

        <ion-row>
        <ion-col size="12">
          <ion-button type="submit" shape="round" class="get_st" @click="() => router.push('/all-letters')">Get Started</ion-button>
        </ion-col>
      </ion-row>
       

      </div>
    </ion-content>
    </div>
</ion-page>

</template>

<script lang="ts">
import { IonPage, IonContent, IonSlides, IonSlide, IonButton, isPlatform } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Intro',
  components: {
    IonContent,
    IonPage,
    IonSlides,
    IonSlide,
    IonButton
  },
  setup() {
      const router = useRouter();
      return { router };
  },
  data() {
      return {
          styleClass:"",
          isIpad:isPlatform('ipad')
      }
  },
});
</script>

<style scoped>

</style>