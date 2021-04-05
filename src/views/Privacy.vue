<template>
<ion-page>
<div v-if="isMobile">
<ion-page>
<ion-header class="header_am Mobo-header">
  <ion-toolbar>
      <ion-row class="ion-align-items-center bar_c">
          <ion-col size="12" class="ion-padding-horizontal">
              <div class="Page-header">
                  <div class="Page-Title">
                      <img @click="()=>router.push('/Settings')" src="assets/images/back_btn.svg"/>
                      <span class="title_top title_top_mobo">Privacy</span>
                  </div>
                  <div class="TopHeader-icon">
                      <ion-buttons class="menu-btn header-icon">
                          <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
                      </ion-buttons>
                  </div>
              </div>
          </ion-col>
      </ion-row>
  </ion-toolbar>
</ion-header>


  <ion-content :fullscreen="true">
    <div class="main_setting ion-margin">
        <ion-row class="ion-padding-bottom">
            <ion-col>
              <div class="privacy_description">
                <h6>01 Präambel</h6>
                <p>This privacy statement by fino GmbH, Universitätsplatz 12, 34127 Kassel, aims to inform you as a user about which personal data will be collected and processed by us as the responsible acting party during your visit to our websites and in accordance with the General Data Protection Regulation.</p>
              </div>
            </ion-col>
        </ion-row>

        <ion-row class="ion-padding-bottom">
            <ion-col>
              <div class="privacy_description">
                <h6>02 Collection and usage of personal data</h6>
                <p>All data is collected as per the principle of data avoidance and data minimization. You are neither legally nor contractually bound to transmit your personal data to us. Insofar you decide against the entering or transmission of data, we cannot execute your order or the required service fully or at all.</p>
              </div>
            </ion-col>
        </ion-row>

        <ion-row class="ion-padding-bottom">
            <ion-col>
              <div class="privacy_description">
                <h6>03 Contact form</h6>
                <p>When you establish communications with us as website provider through the provided contact opportunities, your details will be saved so that they can be accessed to process and reply to your query.</p>
              </div>
            </ion-col>
        </ion-row>

        <ion-row class="ion-padding-bottom">
            <ion-col>
              <div class="privacy_description">
                <h6>04 Encrypted transmission of personal data</h6>
                <p>The entire data traffic between your browser or end device and the server used by this service is encrypted. To this purpose, a modern transmission procedure, the TLS Protocol (Transport Layer Security Protocol) is employed. This ensures that all data is transmitted encrypted and protected from manipulation and unauthorized access by third parties on the transmission route.</p>
              </div>
            </ion-col>
        </ion-row>

        <ion-row class="ion-padding-bottom">
            <ion-col>
              <div class="privacy_description">
                <h6>05 Rights of the data subject</h6>
                <p>We guarantee your right to informational self-determination and the protection of your personal rights during the utilisation of our offers. On application, you can exercise the following rights at any time and free of charge: disclosure of your stored data; correction or deletion of your stored data; restriction to the processing of your stored data; revocation of the processing of your stored data; right of revocation of given approval for the collection, processing and utilization of your personal data with future effect; right to data portability. To this end, please turn to the contact opportunities listed in the imprint. At any time, you reserve the right to repeal to a supervisory authority if you are of the view that the processing of your personal data has been conducted unlawfully.</p>
              </div>
            </ion-col>
        </ion-row>

        <ion-row class="">
            <ion-col>
              <div class="privacy_description">
                <h6>06 Logfiles and Cookies</h6>
                <p>During every visit to this website, anonymized data relating to that process is captured in a logfile. This includes the names of the retrieved files; date and time of the retrieval; the amount of the transmitted data; possible error reports; if necessary, the end device’s operating system and browser software; the website from which the web offer has been visited; as well as general information about usage behaviours concerning the website. These recordings will only be used for the following purposes and not forwarded to third parties:<br>
                <br>06 Logfiles and Cookies
                <ul class="description-list-view">
                  <li>(a) Search for the cause of possible server difficulties</li>
                  <li>(b) Analysis of technical errors</li>
                  <li>(c) Website maintenance</li>
                  <li>(d) Guarantee of system security</li>
                  <li>(e) Protection from misuse (e.g. recognition of and defence against hacker attacks)</li>
                  <li>(f) Pseudonymized statistic analysis of captured data</li>
                  <li>(g) Optimization of the application</li>
                </ul>
                Partly, those processes will be executed with the aid of third-party providers and/or Cookies. This is in accordance with Art 6 I f General Data Protection Regulation and the legitimate interests of the responsible as described in paragraph 1. Cookies are small text files that are placed on your computer and stored in your browser. We usually use session Cookies that are automatically deleted at the end of your visit or your utilization of our application. You can prevent the setting of Cookies with the aid of your browser settings, or choose to be automatically informed before a Cookie is placed, so to be able to decline this in individual cases. However, in this case it is possible that parts of our service will not work or not work optimally. Our Cookies do not contain indicators that can identify you personally. Insofar there are any deviations from paragraph 1, the same are described separately in paragraph 2 under the according service.</p>
              </div>
            </ion-col>
        </ion-row>
    </div>
  </ion-content>

</ion-page>
</div>

<div>
<ion-page v-if="isIpad"> 
<ion-header class="header_am">
  <ion-toolbar class="">
    <ion-row class="ion-align-items-center">
      <ion-col size="4" class="bars_hms">
        <div class="ion-text-center ins_han">
            <img @click="()=>router.push('/Settings')" src="assets/images/back_btn.svg"/>
        </div>
        <div class="ion-text-left ipad_flx">
          <span class="title_top ipad_title_top">Privacy</span> 
        </div>
      </ion-col>
      <ion-col size="6">
      </ion-col>
      <ion-col size="2">
        <ion-buttons class="right_ipad">
            <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg"/></ion-menu-button>
        </ion-buttons>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</ion-header>
  <ion-content :fullscreen="true">
    <div class="main_setting ion-margin priy_ipad">
        <ion-row class="ion-padding-bottom">
            <ion-col>
              <div class="privacy_description">
                <h6>01 Präambel</h6>
                <p>This privacy statement by fino GmbH, Universitätsplatz 12, 34127 Kassel, aims to inform you as a user about which personal data will be collected and processed by us as the responsible acting party during your visit to our websites and in accordance with the General Data Protection Regulation.</p>
              </div>
            </ion-col>
        </ion-row>

        <ion-row class="ion-padding-bottom">
            <ion-col>
              <div class="privacy_description">
                <h6>02 Collection and usage of personal data</h6>
                <p>All data is collected as per the principle of data avoidance and data minimization. You are neither legally nor contractually bound to transmit your personal data to us. Insofar you decide against the entering or transmission of data, we cannot execute your order or the required service fully or at all.</p>
              </div>
            </ion-col>
        </ion-row>

        <ion-row class="ion-padding-bottom">
            <ion-col>
              <div class="privacy_description">
                <h6>03 Contact form</h6>
                <p>When you establish communications with us as website provider through the provided contact opportunities, your details will be saved so that they can be accessed to process and reply to your query.</p>
              </div>
            </ion-col>
        </ion-row>

        <ion-row class="ion-padding-bottom">
            <ion-col>
              <div class="privacy_description">
                <h6>04 Encrypted transmission of personal data</h6>
                <p>The entire data traffic between your browser or end device and the server used by this service is encrypted. To this purpose, a modern transmission procedure, the TLS Protocol (Transport Layer Security Protocol) is employed. This ensures that all data is transmitted encrypted and protected from manipulation and unauthorized access by third parties on the transmission route.</p>
              </div>
            </ion-col>
        </ion-row>

        <ion-row class="ion-padding-bottom">
            <ion-col>
              <div class="privacy_description">
                <h6>05 Rights of the data subject</h6>
                <p>We guarantee your right to informational self-determination and the protection of your personal rights during the utilisation of our offers. On application, you can exercise the following rights at any time and free of charge: disclosure of your stored data; correction or deletion of your stored data; restriction to the processing of your stored data; revocation of the processing of your stored data; right of revocation of given approval for the collection, processing and utilization of your personal data with future effect; right to data portability. To this end, please turn to the contact opportunities listed in the imprint. At any time, you reserve the right to repeal to a supervisory authority if you are of the view that the processing of your personal data has been conducted unlawfully.</p>
              </div>
            </ion-col>
        </ion-row>

        <ion-row class="">
            <ion-col>
              <div class="privacy_description">
                <h6>06 Logfiles and Cookies</h6>
                <p>During every visit to this website, anonymized data relating to that process is captured in a logfile. This includes the names of the retrieved files; date and time of the retrieval; the amount of the transmitted data; possible error reports; if necessary, the end device’s operating system and browser software; the website from which the web offer has been visited; as well as general information about usage behaviours concerning the website. These recordings will only be used for the following purposes and not forwarded to third parties:<br>
                <br>06 Logfiles and Cookies
                <ul class="description-list-view">
                  <li>(a) Search for the cause of possible server difficulties</li>
                  <li>(b) Analysis of technical errors</li>
                  <li>(c) Website maintenance</li>
                  <li>(d) Guarantee of system security</li>
                  <li>(e) Protection from misuse (e.g. recognition of and defence against hacker attacks)</li>
                  <li>(f) Pseudonymized statistic analysis of captured data</li>
                  <li>(g) Optimization of the application</li>
                </ul>
                Partly, those processes will be executed with the aid of third-party providers and/or Cookies. This is in accordance with Art 6 I f General Data Protection Regulation and the legitimate interests of the responsible as described in paragraph 1. Cookies are small text files that are placed on your computer and stored in your browser. We usually use session Cookies that are automatically deleted at the end of your visit or your utilization of our application. You can prevent the setting of Cookies with the aid of your browser settings, or choose to be automatically informed before a Cookie is placed, so to be able to decline this in individual cases. However, in this case it is possible that parts of our service will not work or not work optimally. Our Cookies do not contain indicators that can identify you personally. Insofar there are any deviations from paragraph 1, the same are described separately in paragraph 2 under the according service.</p>
              </div>
            </ion-col>
        </ion-row>
    </div>
  </ion-content>
</ion-page>
</div>
</ion-page>
</template>

<script lang="ts">
import { IonPage,IonHeader, IonContent, IonToolbar, IonButtons, IonMenuButton, isPlatform, getPlatforms  } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Privacy',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonMenuButton
  },
  setup() {
      const router = useRouter();
      return { router };
  },
   data() {
      return {
          styleClass:"",
          isDesktop: isPlatform('desktop'),
          isMobile: getPlatforms().indexOf('iphone')>-1||getPlatforms().indexOf('android')>-1,
          isIpad:getPlatforms().indexOf('ipad')>-1||getPlatforms().indexOf('tablet')>-1,
      }
  },
});
</script>

<style scoped>

</style>