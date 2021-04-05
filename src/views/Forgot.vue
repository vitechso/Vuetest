<template>
<ion-page>
<div v-if="isMobile">
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="forgot-page" class="login-container">
        <div class="login-Info-box">     
          <form @submit.prevent="handleLogin">
            <div class="drak_mode">
              <img class="w-100" src="assets/images/dark_mode_logo.svg"/>
            </div>

            <div class="logo">
              <img src="assets/images/logo.svg">
            </div>

            <div class="sign_with">
              <h2>Forgot your password?</h2>
              <p>Confirm your email and we'll send the instructions to reset your password.</p>
            </div>

            <div class="valids mobile-login-form">
              <div class="login-inputs">
                <div lines="none" class="inputs-group inputs-icon-group">
                  <input  v-model="form.username" type="text" id="username" placeholder="Email" class="user_nam" />
                  <div class="icon_in"><img src="assets/images/mail.png"/></div>
                </div>

                <div v-if="invalid" class="error_mesg_invalid">
                  <p>Invalid email</p>
                </div>
              </div>

              <div lines="none" class="Login-btn-box">
                <ion-button type="submit" shape="round" class="sign_ups">Submit</ion-button>
              </div>

              <div class="have-accout-box">
                <h5>Don't have account <a @click="() => router.push('/register')">Sign Up ?</a></h5>
              </div>
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

      <div id="forgot-page" class="login-container">
        <div class="login-Info-box">     
          <form @submit.prevent="handleLogin">
            <div class="drak_mode">
              <img class="w-100" src="assets/images/dark_mode_logo.svg"/>
            </div>

            <div class="logo">
              <img src="assets/images/logo.svg">
            </div>

            <div class="sign_with">
              <h2>Forgot your password?</h2>
              <p>Confirm your email and we'll send the instructions to reset your password.</p>
            </div>

            <div class="valids mobile-login-form">
              <div class="login-inputs">
                <div lines="none" class="inputs-group inputs-icon-group">
                  <input  v-model="form.username" type="text" id="username" placeholder="Email" class="user_nam" />
                  <div class="icon_in"><img src="assets/images/mail.png"/></div>
                </div>

                <div v-if="invalid" class="error_mesg_invalid">
                  <p>Invalid email</p>
                </div>
              </div>

              <div lines="none" class="Login-btn-box">
                <ion-button type="submit" shape="round" class="sign_ups">Submit</ion-button>
              </div>

              <div class="have-accout-box">
                <h5>Don't have account <a @click="() => router.push('/register')">Sign Up ?</a></h5>
              </div>
            </div>
          </form>
        </div>
      </div>

      
    </ion-content>
  </ion-page>
</div>
</ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, alertController, isPlatform, getPlatforms } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Forgot',
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
        username: ""
      },
      invalid:false,
      styleClass:"",
      isDesktop: isPlatform('desktop'),
      isMobile: getPlatforms().indexOf('iphone')>-1||getPlatforms().indexOf('android')>-1,
      isIpad:getPlatforms().indexOf('ipad')>-1||getPlatforms().indexOf('tablet')>-1,
    };
  },
  methods: {
    async handleLogin(){
      console.log(this.form.username)
      if(this.form.username !='' && this.validEmail(this.form.username)){
        //alert("here")
        if(this.form.username == 'admin@moreyou.com'){
          this.invalid=false
          const errorAlert = await alertController
            .create({
              header: 'Success',
              
              message: "A mail has been sent to your account",
              buttons: [{text:'OK',
              handler:()=>{
                console.log('Confirm Okay');
                this.router.push('/home')
              },
              }]
          });
          await errorAlert.present()
        }else{
          this.invalid=true;
          setTimeout(()=>{this.invalid=false},1500)
        }
      }else{
        this.invalid=true;
        setTimeout(()=>{this.invalid=false},1500)
      }
    },
    validEmail: function (email: any) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
});
</script>