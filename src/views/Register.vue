<template>
  <ion-page>
    <ion-content :fullscreen="true">
    
      <div id="container_01">
      <div class="drak_mode">
          <img class="w-100" src="assets/images/dark_mode_logo.svg"/>
        </div>
      <div class="logo">
        <img src="/assets/images/normal_u1.svg">
      </div>
        <form @submit.prevent="handleLogin">
        <div class="sign_with">
          <h2>Sign Up With Social</h2>
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
          <input v-model="form.first_name" type="text" id="first_name" placeholder="First Name" class="user_nam" />
          <div class="icon_in"><img src="assets/images/normal_u41.svg"/></div>
        </div>

        <div lines="none" class="pdd_b">
          <input v-model="form.last_name" type="text" id="last_name" placeholder="Last Name" class="user_nam" />
          <div class="icon_in"><img src="assets/images/normal_u41.svg"/></div>
        </div>

        <div lines="none" class="pdd_b">
          <input v-model="form.username" type="text" id="username" placeholder="Email" class="user_nam" />
          <div class="icon_in"><img src="assets/images/mail.png"/></div>
        </div>
 
        <div lines="none" class="pdd_b">
          <input v-model="form.password" type="password" id="password" placeholder="Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
        </div>

         <div lines="none" class="pdd_b">
          <input v-model="form.password" type="password" id="password" placeholder="Retype Password" class="user_nam" />
          <div class="icon_in"><img src="assets/images/key.png"/></div>
        </div>

        <div v-if="invalid" class="error_mesg_invalid">
          <p>Invalid Email and Password</p>
        </div>
  </div>
        <div lines="none" class="pdd_b top_am">
          <ion-button type="submit" shape="round" class="sign_ups" @click="() => router.push('/intro')">Sign In</ion-button>
        </div>
        <div lines="none" class="pdd_b">
          <div class="sign_doens mt-0">
           You have an account <a @click="() => router.push('/home')">Sign Up ?</a>
          </div>
        </div>
       <!-- <div v-if="invalid" class="error_mesg_invalid">
          <p>Invalid Email and Password</p>
        </div>-->
        <!-- <div class="sign_doens pdd_b">
            Don't have account <a href="#">Sign Up ?</a>
          </div>-->
      </div>
    </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Register',
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
      invalid:false
    };
  },
});
</script>

<style scoped>

</style>