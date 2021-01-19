<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Forgot Password</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Forgot Password</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
      <div class="logo">
        <img src="assets/images/logo.svg">
      </div>
        <form @submit.prevent="handleLogin">
        <div class="sign_with">
          <h2>Forgot your password?</h2>
          <p>Confirm your email and we'll send the instructions to reset your password.</p>
        </div>
        
      <div>
        <div lines="none" class="pdd_b">
          <input  v-model="form.username" type="text" id="username" placeholder="Email" class="user_nam" />
          <div class="icon_in"><img src="assets/images/mail.png"/></div>
          <!--<ion-label position="floating">Username</ion-label>-->
           <!--<ion-input v-model="form.username" id="username" pleaseholder="Username"></ion-input>-->
        </div>
        <div v-if="invalid" class="error_mesg_invalid">
          <p>Invalid email</p>
        </div>

        <div lines="none" class="pdd_b top_am">
          <ion-button type="submit" shape="round" class="sign_ups">Submit</ion-button>
        </div>
       

         <div class="sign_doens pdd_b">
            Don't have account <a href="#">Sign Up ?</a>
          </div>
      </div>
    </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader,IonContent,IonToolbar, IonCard,IonTitle, IonItem, IonLabel, IonButton, IonInput, alertController, IonIcon } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Forgot',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
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
      invalid:false
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
           var self = this;
          setTimeout(function(){self.invalid=false},1500)
          // const errorAlert = await alertController
          //   .create({
          //     header: 'Failed',
          //     subHeader: 'Sign in Failed',
          //     message: "Invalid username or password",
          //     buttons: ['OK'],
          //   });
          // await errorAlert.present()

        }
      }else{
       // alert("Please fill the required fields")
        // const errorAlert = await alertController
        //     .create({
        //       header: 'Failed',
        //       subHeader: 'Sign in Failed',
        //       message: "Please fill username and password",
        //       buttons: ['OK'],
        //     });
        // await errorAlert.present()
        var self = this;
        setTimeout(function(){self.invalid=false},1500)
        this.invalid=true;
      }
    },
    validEmail: function (email:any) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
});
</script>