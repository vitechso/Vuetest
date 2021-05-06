<template>
  <ion-page>
    <div v-if="isMobile">
      <ion-page>
        <ion-content :fullscreen="true">
          <div id="Login-page" class="login-container">
            <div class="login-Info-box">
              <form @submit.prevent="handleLogin">
                <div class="drak_mode">
                  <img class="dark-logo" src="assets/images/darklogo.svg" />
                </div>

                <div class="logo">
                  <img src="assets/images/logo.svg" />
                </div>

                <div class="sign_with">
                  <h2>Sign in with</h2>
                  <div class="social_icons">
                    <ul>
                      <li class="face">
                        <a href="#"><img src="assets/images/facebook.svg"/></a>
                      </li>
                      <li class="twe">
                        <a href="#"><img src="assets/images/u8.svg"/></a>
                      </li>
                      <li class="lin_d">
                        <a href="#"><img src="assets/images/in.svg"/></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="or"><h2>OR</h2></div>
                <div class="valids mobile-login-form">
                  <div class="login-inputs">
                    <div lines="none" class="inputs-group inputs-icon-group">
                      <input
                        v-model="form.username"
                        type="text"
                        id="username"
                        placeholder="Email"
                        class="user_nam"
                      />
                      <div class="icon_in">
                        <img src="assets/images/mail.png" />
                      </div>
                    </div>

                    <div lines="none" class="inputs-group inputs-icon-group">
                      <input
                        v-model="form.password"
                        type="password"
                        id="password"
                        placeholder="Password"
                        class="user_nam"
                      />
                      <div class="icon_in">
                        <img src="assets/images/key.png" />
                      </div>
                    </div>

                    <div v-if="invalid" class="error_mesg_invalid inputs-group">
                      <p>Invalid Email and Password</p>
                    </div>
                  </div>

                  <div lines="none" class="Login-btn-box">
                    <ion-button type="submit" shape="round" class="sign_ups"
                      >Sign In</ion-button
                    >
                    <div class="for_got">
                      <a @click="() => router.push('/forgot')"
                        >Forgot your password?</a
                      >
                    </div>
                  </div>

                  <div class="have-accout-box">
                    <h5>
                      Don't have account
                      <a @click="() => router.push('/register')">Sign Up ?</a>
                    </h5>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </ion-content>
      </ion-page>
    </div>

    <div v-if="isIpad">
      <ion-page class="logins_nms">
        <ion-content :fullscreen="true" scroll-y="false">
          <div id="Login-page" class="login-container">
            <div class="login-Info-box">
              <form @submit.prevent="handleLogin">
                <div class="drak_mode">
                  <img class="dark-logo" src="assets/images/darklogo.svg" />
                </div>

                <div class="logo">
                  <img src="assets/images/logo.svg" />
                </div>

                <div class="sign_with">
                  <h2>Sign in with</h2>
                  <div class="social_icons">
                    <ul>
                      <li class="face">
                        <a href="#"><img src="assets/images/facebook.svg"/></a>
                      </li>
                      <li class="twe">
                        <a href="#"><img src="assets/images/u8.svg"/></a>
                      </li>
                      <li class="lin_d">
                        <a href="#"><img src="assets/images/in.svg"/></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="or"><h2>OR</h2></div>

                <div class="valids mobile-login-form">
                  <div class="login-inputs">
                    <div lines="none" class="inputs-group inputs-icon-group">
                      <input
                        v-model="form.username"
                        type="text"
                        id="username"
                        placeholder="Email"
                        class="user_nam"
                      />
                      <div class="icon_in">
                        <img src="assets/images/mail.png" />
                      </div>
                    </div>

                    <div lines="none" class="inputs-group inputs-icon-group">
                      <input
                        v-model="form.password"
                        type="password"
                        id="password"
                        placeholder="Password"
                        class="user_nam"
                      />
                      <div class="icon_in">
                        <img src="assets/images/key.png" />
                      </div>
                    </div>

                    <div v-if="invalid" class="error_mesg_invalid inputs-group">
                      <p>Invalid Email and Password</p>
                    </div>
                  </div>

                  <div lines="none" class="Login-btn-box">
                    <ion-button type="submit" shape="round" class="sign_ups"
                      >Sign In</ion-button
                    >
                    <div class="for_got">
                      <a @click="() => router.push('/forgot')"
                        >Forgot your password?</a
                      >
                    </div>
                  </div>

                  <div class="have-accout-box">
                    <h5>
                      Don't have account
                      <a @click="() => router.push('/register')">Sign Up ?</a>
                    </h5>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </ion-content>
      </ion-page>
    </div>

    <div v-if="isDesktop">
      <ion-page class="logins_nms">
        <ion-content :fullscreen="true">
          <div id="Login-page" class="login-container">
            <div class="login-Info-box">
              <form @submit.prevent="handleLogin">
                <div class="drak_mode">
                  <img class="dark-logo" src="assets/images/darklogo.svg" />
                </div>

                <div class="logo">
                  <img src="assets/images/logo.svg" />
                </div>

                <div class="sign_with">
                  <h2>Sign in with</h2>
                  <div class="social_icons">
                    <ul>
                      <li class="face">
                        <a href="#"><img src="assets/images/facebook.svg"/></a>
                      </li>
                      <li class="twe">
                        <a href="#"><img src="assets/images/u8.svg"/></a>
                      </li>
                      <li class="lin_d">
                        <a href="#"><img src="assets/images/in.svg"/></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="or"><h2>OR</h2></div>

                <div class="valids mobile-login-form">
                  <div class="login-inputs">
                    <div lines="none" class="inputs-group inputs-icon-group">
                      <input
                        v-model="form.username"
                        type="text"
                        id="username"
                        placeholder="Email"
                        class="user_nam"
                      />
                      <div class="icon_in">
                        <img src="assets/images/mail.png" />
                      </div>
                    </div>

                    <div lines="none" class="inputs-group inputs-icon-group">
                      <input
                        v-model="form.password"
                        type="password"
                        id="password"
                        placeholder="Password"
                        class="user_nam"
                      />
                      <div class="icon_in">
                        <img src="assets/images/key.png" />
                      </div>
                    </div>

                    <div v-if="invalid" class="error_mesg_invalid inputs-group">
                      <p>Invalid Email and Password</p>
                    </div>
                  </div>

                  <div lines="none" class="Login-btn-box">
                    <ion-button type="submit" shape="round" class="sign_ups"
                      >Sign In</ion-button
                    >
                    <div class="for_got">
                      <a @click="() => router.push('/forgot')"
                        >Forgot your password?</a
                      >
                    </div>
                  </div>

                  <div class="have-accout-box">
                    <h5>
                      Don't have account
                      <a @click="() => router.push('/register')">Sign Up ?</a>
                    </h5>
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
import {
  IonPage,
  IonContent,
  alertController,
  isPlatform,
  getPlatforms,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
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
        password: "",
      },
      invalid: false,
      styleClass: "",
      isDesktop: isPlatform("desktop"),
      isMobile:
        getPlatforms().indexOf("iphone") > -1 ||
        getPlatforms().indexOf("android") > -1,
      isIpad:
        getPlatforms().indexOf("ipad") > -1,
    };
  },
  methods: {
    async handleLogin() {
      this.$router.push("/all-letters");
    },
  },
});
</script>
<style scoped></style>
