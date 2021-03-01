<template>
<ion-page>
<div v-if="!isIpad">
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
      <div class="drak_mode">
          <img class="w-100" src="assets/images/dark_mode_logo.svg"/>
        </div>
      <div class="logo">
        <img src="assets/images/logo.svg">
      </div>
        <form @submit.prevent="handleLogin">
        <div class="sign_with">
          <h2>Sign In With Social</h2>
          <div class="social_icons">
            <ul>
              <li class="face"><a href="#"><img src="assets/images/facebook.svg"/></a></li>
              <li class="twe"><a href="#"><img src="assets/images/u8.svg"/></a></li>
              <li class="lin_d"><a href="#"><img src="assets/images/in.svg"/></a></li>
            </ul>
          </div>
        </div>
        <div class="or"><h2>OR</h2></div>
      <div class="valids">
      <div class="common">
        <div lines="none" class="pdd_b">
          <input v-model="form.username" type="text" id="username" placeholder="Email" class="user_nam" />
          <div class="icon_in"><img src="assets/images/mail.png"/></div>
          <!--<ion-label position="floating">Username</ion-label>-->
           <!--<ion-input v-model="form.username" id="username" pleaseholder="Username"></ion-input>-->
        </div>
 
        <div lines="none" class="pdd_b">
          <input v-model="form.password" type="password" id="password" placeholder="Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
          <!--<ion-label position="floating">Password</ion-label>
          <ion-input type="password" v-model="form.password" id="password"></ion-input>-->
        </div>

        <div v-if="invalid" class="error_mesg_invalid">
          <p>Invalid Email and Password</p>
        </div>
  </div>
        <div lines="none" class="pdd_b top_am">
          <ion-button type="submit" shape="round" class="sign_ups">Sign In</ion-button>
        </div>
        <div lines="none" class="pdd_b">
          <div class="for_got">
            <a @click="() => router.push('/forgot')">Forgot your password?</a>
          </div>
        </div>
       <!-- <div v-if="invalid" class="error_mesg_invalid">
          <p>Invalid Email and Password</p>
        </div>-->
         <div class="sign_doens pdd_b">
            Don't have account <a @click="() => router.push('/register')">Sign Up ?</a>
          </div>
      </div>
    </form>
      </div>
    </ion-content>
  </ion-page>
</div>

<div v-if="isIpad">
  <ion-page class="logins_nms">
    <ion-content :fullscreen="true" scroll-y="false">
      <div id="container_ipad">
      <div class="drak_mode">
          <img class="w-100" src="assets/images/dark_mode_logo.svg"/>
        </div>
      <div class="logo">
        <img src="assets/images/logo.svg">
      </div>
        <form @submit.prevent="handleLogin">
        <div class="sign_with">
          <h2>Sign In With Social</h2>
          <div class="social_icons">
            <ul>
              <li class="face"><a href="#"><img src="assets/images/facebook.svg"/></a></li>
              <li class="twe"><a href="#"><img src="assets/images/u8.svg"/></a></li>
              <li class="lin_d"><a href="#"><img src="assets/images/in.svg"/></a></li>
            </ul>
          </div>
        </div>
        <div class="or"><h2>OR</h2></div>
      <div class="valids">
      <div class="common">
        <div lines="none" class="pdd_b">
          <input v-model="form.username" type="text" id="username" placeholder="Email" class="user_nam" />
          <div class="icon_in"><img src="assets/images/mail.png"/></div>
          <!--<ion-label position="floating">Username</ion-label>-->
           <!--<ion-input v-model="form.username" id="username" pleaseholder="Username"></ion-input>-->
        </div>
 
        <div lines="none" class="pdd_b">
          <input v-model="form.password" type="password" id="password" placeholder="Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
          <!--<ion-label position="floating">Password</ion-label>
          <ion-input type="password" v-model="form.password" id="password"></ion-input>-->
        </div>

        <div v-if="invalid" class="error_mesg_invalid">
          <p>Invalid Email and Password</p>
        </div>
  </div>
        <div lines="none" class="pdd_b top_am">
          <ion-button type="submit" shape="round" class="sign_ups">Sign In</ion-button>
        </div>
        <div lines="none" class="pdd_b">
          <div class="for_got">
            <a @click="() => router.push('/forgot')">Forgot your password?</a>
          </div>
        </div>
       <!-- <div v-if="invalid" class="error_mesg_invalid">
          <p>Invalid Email and Password</p>
        </div>-->
         <div class="sign_doens pdd_b">
            Don't have account <a @click="() => router.push('/register')">Sign Up ?</a>
          </div>
      </div>
    </form>
      </div>
    </ion-content>
  </ion-page>
  </div>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, alertController, isPlatform } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonPage,
  },
  setup() {
      const router = useRouter();
      return { router };
  },
  data() {
    return {
      
      form: {
        username: "",
        password: ""
      },
      invalid:false,
      styleClass:"",
      isIpad:isPlatform('ipad')
    };
  },
  methods: {
    async handleLogin(){
      this.$router.push('/intro')
    }
  }
});
</script>

<style scoped>

</style>