<template>
<ion-page>
<div v-if="isMobile">
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="mobo-container">
        <div class="login-Info-box">
          <div class="drak_mode">
            <img class="w-100" src="assets/images/dark_mode_logo.svg"/>
          </div>

          <div class="logo">
            <img src="/assets/images/normal_u1.svg">
          </div>

          <form @submit.prevent="handleLogin">
            <div class="sign_with">
              <h2>Sign up with</h2>
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
              <div class="common mobile-login-form">

                <div class="tow_part">
                  <div lines="none" class="pdd_b ion-p-end ion_tabs">
                    <input v-model="form.first_name" type="text" id="first_name" placeholder="First Name" class="user_nam" />
                    <div class="icon_in"><img src="assets/images/normal_u41.svg"/></div>
                  </div>

                  <div lines="none" class="pdd_b ion-p-start">
                    <input v-model="form.last_name" type="text" id="last_name" placeholder="Last Name" class="user_nam" />
                    <div class="icon_in"><img src="assets/images/normal_u41.svg"/></div>
                  </div>
                </div>
          

                <div lines="none" class="pdd_b">
                  <input v-model="form.username" type="text" id="username" placeholder="Email" class="user_nam" />
                  <div class="icon_in"><img src="assets/images/mail.png"/></div>
                </div>

                <div class="tow_part">
                  <div lines="none" class="pdd_b ion-p-end ion_tabs">
                    <input v-model="form.password" type="password" id="password" placeholder="Password" class="user_nam" />
                    <div class="icon_in"><img src="assets/images/key.png"/></div>
                  </div>

                  <div lines="none" class="pdd_b ion-p-start">
                    <input v-model="form.password" type="password" id="password" placeholder="Retype Password" class="user_nam" />
                    <div class="icon_in"><img src="assets/images/key.png"/></div>
                  </div>
                </div>

                <div v-if="invalid" class="error_mesg_invalid">
                  <p>Invalid Email and Password</p>
                </div>
              </div>
              <div lines="none" class="pdd_b top_am">
                <ion-button type="submit" shape="round" class="sign_ups" @click="() => router.push('/intro')">Sign Up</ion-button>
              </div>
              <div lines="none" class="">
                <div class="sign_doens mt-4">
                You have an account <a @click="() => router.push('/home')">Sign In ?</a>
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

      </div>
    </ion-content>
  </ion-page>
</div>

<div v-if="isIpad">
  <ion-page>
    <ion-content :fullscreen="true" scroll-y="false">
    
      <div id="container_ipad_regi">
      
        <form @submit.prevent="handleLogin">
        <div class="drak_mode">
          <img class="w-100" src="assets/images/dark_mode_logo.svg"/>
        </div>
      <div class="logo">
        <img src="/assets/images/normal_u1.svg">
      </div>
      
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

        <ion-row class="tow_part">
          <ion-col size="6">
            <div lines="none" class="pdd_b ion-p-end ion_tabs">
              <input v-model="form.first_name" type="text" id="first_name" placeholder="First Name" class="user_nam" />
              <div class="icon_in"><img src="assets/images/normal_u41.svg"/></div>
            </div>
          </ion-col>

          <ion-col size="6">
            <div lines="none" class="pdd_b ion-p-start">
              <input v-model="form.last_name" type="text" id="last_name" placeholder="Last Name" class="user_nam" />
              <div class="icon_in"><img src="assets/images/normal_u41.svg"/></div>
            </div>
          </ion-col>
        </ion-row>
         
        <ion-row>
          <ion-col size="12">
            <div lines="none" class="pdd_b">
              <input v-model="form.username" type="text" id="username" placeholder="Email" class="user_nam" />
              <div class="icon_in"><img src="assets/images/mail.png"/></div>
            </div>
          </ion-col>
        </ion-row>

        <ion-row class="tow_part">
        <ion-col size="6">
          <div lines="none" class="pdd_b ion-p-end ion_tabs">
            <input v-model="form.password" type="password" id="password" placeholder="Password" class="user_nam" />
            <div class="icon_in"><img src="assets/images/key.png"/></div>
          </div>
        </ion-col>
        <ion-col size="6">
          <div lines="none" class="pdd_b ion-p-start">
            <input v-model="form.password" type="password" id="password" placeholder="Retype Password" class="user_nam" />
            <div class="icon_in"><img src="assets/images/key.png"/></div>
          </div>
        </ion-col>
        </ion-row>

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
</div>

<div v-if="isDesktop">
  <ion-page>
    <ion-content :fullscreen="true">
    
      <div id="container_ipad_regi" class="container_desktop">
      
        <form @submit.prevent="handleLogin">
        <div class="drak_mode">
          <img class="w-100" src="assets/images/dark_mode_logo.svg"/>
        </div>
      <div class="logo">
        <img src="/assets/images/normal_u1.svg">
      </div>
      
        <div class="sign_with">
          <h2>Sign up with</h2>
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

        <ion-row class="tow_part">
          <ion-col size="6">
            <div lines="none" class="pdd_b ion-p-end ion_tabs">
              <input v-model="form.first_name" type="text" id="first_name" placeholder="First Name" class="user_nam" />
              <div class="icon_in"><img src="assets/images/normal_u41.svg"/></div>
            </div>
          </ion-col>

          <ion-col size="6">
            <div lines="none" class="pdd_b ion-p-start">
              <input v-model="form.last_name" type="text" id="last_name" placeholder="Last Name" class="user_nam" />
              <div class="icon_in"><img src="assets/images/normal_u41.svg"/></div>
            </div>
          </ion-col>
        </ion-row>
         
        <ion-row>
          <ion-col size="12">
            <div lines="none" class="pdd_b">
              <input v-model="form.username" type="text" id="username" placeholder="Email" class="user_nam" />
              <div class="icon_in"><img src="assets/images/mail.png"/></div>
            </div>
          </ion-col>
        </ion-row>

        <ion-row class="tow_part">
        <ion-col size="6">
          <div lines="none" class="pdd_b ion-p-end ion_tabs">
            <input v-model="form.password" type="password" id="password" placeholder="Password" class="user_nam" />
            <div class="icon_in"><img src="assets/images/key.png"/></div>
          </div>
        </ion-col>
        <ion-col size="6">
          <div lines="none" class="pdd_b ion-p-start">
            <input v-model="form.password" type="password" id="password" placeholder="Retype Password" class="user_nam" />
            <div class="icon_in"><img src="assets/images/key.png"/></div>
          </div>
        </ion-col>
        </ion-row>

        <div v-if="invalid" class="error_mesg_invalid">
          <p>Invalid Email and Password</p>
        </div>
  </div>
        <div lines="none" class="pdd_b top_am">
          <ion-button type="submit" shape="round" class="sign_ups" @click="() => router.push('/intro')">Sign Up</ion-button>
        </div>
        <div lines="none" class="pdd_b">
          <div class="sign_doens mt-0">
           You have an account <a @click="() => router.push('/home')">Sign In ?</a>
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
</div>
</ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, isPlatform } from '@ionic/vue'
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
      invalid:false,
      styleClass:"",
      isIpad:isPlatform('ipad'),
      isDesktop: isPlatform('desktop'),
      isMobile: isPlatform('mobile'),
    };
  },
});
</script>

<style scoped>

</style>