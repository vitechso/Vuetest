<template>
   <ion-page>
      <!---------------Mobile Code--------------->
      <div v-if="isMobile">
         <ion-page>
            <ion-header class="header_am Mobo-header">
               <ion-toolbar>
                  <ion-row class="ion-align-items-center bar_c">
                     <ion-col size="12" class="ion-padding-horizontal">
                        <div class="Page-header">
                           <div class="Page-Title">
                              <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg" />
                              <span class="title_top title_top_mobo">Address Change</span>
                           </div>
                           <div class="TopHeader-icon">
                              <ion-buttons class="menu-btn header-icon">
                                 <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg" />
                                 </ion-menu-button>
                              </ion-buttons>

                              <div class="search_icon header-icon">
                                 <img @click="()=>router.push('/preview')" src="assets/images/send_share.svg" />
                              </div>
                           </div>
                        </div>
                     </ion-col>
                  </ion-row>
               </ion-toolbar>

               <div class="lock_unlock">
                  <ion-row>
                     <ion-col size="2" class="ion-no-padding">
                        <div class="img_unloacks" @click="addclass($event)">
                           <img v-if="styleClass==''" src="assets/images/un_lock.svg" />
                           <img v-if="styleClass!=''" src="assets/images/lock.svg" />
                        </div>
                     </ion-col>
                  </ion-row>
               </div>
            </ion-header>
            <ion-content :fullscreen="true">
               <div :class="styleClass" id="container_write" class="">
                  <ion-row class="Form-subject-row">
                     <ion-col size="12" class="ion-no-padding">
                        <div class="Form-subject-block">
                           <div class="Form-subject">
                              <h5>From</h5>
                              <p class="fontlight">John Anderson 243 Park Hall Aveneues Kassel 11017 Germany
                              </p>
                           </div>

                           <div class="contact_book contact_book-desk">
                              <img src="assets/images/contact_book.svg" />
                           </div>
                        </div>
                     </ion-col>
                  </ion-row>

                  <ion-row class="Form-subject-row">
                     <ion-col size="12" class="ion-no-padding">
                        <div class="Form-subject-block">
                           <div class="Form-subject">
                              <h5>To</h5>
                              <p class="fontlight">Justin Shepp 564 Urban Estate Phase 2 Kassel 11017 Germany
                              </p>
                           </div>

                           <div class="contact_book contact_book-desk icon-hover"
                              @click="() => router.push('/contacts')">
                              <img src="assets/images/contact_book.svg" />
                           </div>
                        </div>
                     </ion-col>
                  </ion-row>

                  <ion-row class="Form-subject-row">
                     <ion-col size="12" class="ion-no-padding">
                        <div class="Form-subject-block">
                           <div class="Form-subject">
                              <h5>Subject</h5>
                              <p class="fontlight">Address Change</p>
                           </div>
                        </div>
                     </ion-col>
                  </ion-row>

                  <ion-row class="row_01 b_p bor_b">
                     <ion-col size="12" class="ion-no-padding">
                        <h5>Dear Sirs and Madames,</h5>
                     </ion-col>
                     <ion-col size="12" class="ion-no-padding">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                           Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                           unknown printer took a galley of type and scrambled it to make a type specimen book.
                           It has survived not only five centuries, but also the leap into electronic
                           typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                           the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                           with desktop publishing software like Aldus PageMaker including versions of Lorem
                           Ipsum.</p>
                     </ion-col>
                  </ion-row>

                  <ion-row class="row_01 b_p bor_b">
                     <ion-col size="3" class="ion-no-padding">
                        <h5>Footer</h5>
                     </ion-col>
                     <ion-col size="9" class="ion-no-padding">
                        <p class="fontlight">Sincerely, <br> Justin Shepp</p>
                     </ion-col>
                  </ion-row>

                  <ion-row class="row_01 b_p ion-padding-vertical">
                     <ion-col size="6" class="ion-no-padding">
                        <h5>Signature</h5>
                     </ion-col>
                     <ion-col size="6" class="ion-no-padding">
                        <div class="btn_ajj ion-text-right">
                           <ion-button shape="round" type="button" @click="() => router.push('/changesignature')">Adjust
                           </ion-button>
                        </div>
                     </ion-col>
                  </ion-row>

                  <ion-row class="row_01 b_p">
                     <ion-col size="6" class="ion-no-padding">
                        <h5>Letter Size</h5>
                     </ion-col>
                     <ion-col size="6" class="ion-no-padding">
                        <div class="lett_selct">
                           <ion-item lines="none">
                              <ion-label class="select-label">Letter Size</ion-label>
                              <ion-select value="DIN 5001 A" class="DIN-select">
                                 <ion-select-option value="DIN 5001 A">DIN 5001 A</ion-select-option>
                                 <ion-select-option value="DIN 5002 A">DIN 5002 A</ion-select-option>
                                 <ion-select-option value="DIN 5003 A">DIN 5003 A</ion-select-option>
                                 <ion-select-option value="DIN 5008 A">DIN 5008 A</ion-select-option>
                              </ion-select>
                           </ion-item>
                        </div>
                     </ion-col>
                  </ion-row>

                  <ion-row class="row_01 b_p ">
                     <ion-col size="6" class="ion-no-padding">
                        <h5>Markers</h5>
                     </ion-col>

                     <ion-col size="6" class="ion-no-padding">
                        <div class="mark_toggle">
                           <ion-toggle slot="end"></ion-toggle>
                        </div>
                     </ion-col>
                  </ion-row>
               </div>
            </ion-content>

            <ion-footer class="ion-no-border back_foo">
               <ion-toolbar>
                  <ion-row>
                     <ion-col size="12" class="ion-no-padding">
                        <div class="board-icon">
                           <div :class="styleClass!=''?'hideBottom':''" class="board-left">
                              <div class="icon_bn icon-hover">
                                 <img src="assets/images/bold.svg" />
                              </div>

                              <div class="icon_bn icon-hover">
                                 <img src="assets/images/itelic.svg" />
                              </div>

                              <div class="icon_bn icon-hover">
                                 <img src="assets/images/underline.svg" />
                              </div>
                           </div>

                           <div class="board-center">
                              <div class="icon_bn icon-hover" @click="() => router.push('/preview')">
                                 <img src="assets/images/view_black.svg" />
                              </div>
                           </div>

                           <div class="board-right">
                              <div class="icon_bn icon-hover" @click="sendtype">
                                 <img @click="presentAlert" class="dlt-icon" src="assets/images/delete_black.svg" />
                              </div>
                           </div>
                        </div>
                     </ion-col>
                  </ion-row>
               </ion-toolbar>
            </ion-footer>
         </ion-page>
      </div>
      <!---------------Ipad Code--------------->
      <div v-if="isIpad">
         <ion-page>

            <ion-header class="header_am Hrd-ipad">
               <ion-toolbar class="header-top-ipad border_tabs">
                  <div class="ipad-header">
                     <div class="left-header">
                        <ion-row class="ion-align-items-center bar_c">
                           <ion-col size="12" class="ipad_cols">
                              <div class="ion-text-left ipad_flx">
                                 <span class="letter-heading">All Letters</span>
                                 <ion-badge class="badgs">8</ion-badge>
                              </div>
                              <div class="edit_icon">
                                 <img src="assets/images/edit_pencil.svg" />
                              </div>
                           </ion-col>
                        </ion-row>
                     </div>

                     <div class="right-header">
                        <ion-row class="ion-align-items-center bar_c">
                           <ion-col size="8">
                              <div class="ion-text-left ipad_flx ion-padds-l">
                                 <span class="letter-heading">Address Change</span>
                              </div>
                           </ion-col>

                           <ion-col size="4" class="ion-padding-end">
                              <div class="TopHeader-icon ion-justify-content-end">
                                 <ion-buttons class="menu-btn header-icon">
                                    <ion-menu-button class="primary_arrow_inner"><img src="assets/images/menu.svg" />
                                    </ion-menu-button>
                                 </ion-buttons>

                                 <div class="search_icon header-icon">
                                    <img @click="preview" src="assets/images/send_share.svg" />
                                 </div>
                              </div>
                           </ion-col>
                        </ion-row>
                     </div>
                  </div>
               </ion-toolbar>
            </ion-header>

            <ion-content :fullscreen="true" class="ipad_write">
               <div class="ipad_h destop-sitebar-container">
                  <div class="SideBar">
                     <ion-row class="">
                        <ion-col size="12" class="">
                           <div class="search_bar SideBar-search">
                              <ion-searchbar></ion-searchbar>
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="ion-align-items-center active_letters lettes">
                        <ion-col size="12">
                           <div class="texts_letts">
                              <h3>Address Change</h3>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                              </p>
                           </div>
                           <div class="date">
                              <span>15 Jan</span>
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="ion-align-items-center lettes">
                        <ion-col size="12">
                           <div class="texts_letts">
                              <h3>Address Change</h3>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                              </p>
                           </div>
                           <div class="date">
                              <span>15 Jan</span>
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="ion-align-items-center lettes">
                        <ion-col size="12">
                           <div class="texts_letts">
                              <h3>Address Change</h3>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                              </p>
                           </div>
                           <div class="date">
                              <span>15 Jan</span>
                           </div>
                        </ion-col>
                     </ion-row>
                  </div>

                  <div class="right-content-box">
                     <ion-row>
                        <ion-col size="12" class="lock_unlock">
                           <div class="img_unloacks icon-hover" @click="addclass($event)">
                              <img v-if="styleClass==''" src="assets/images/un_lock.svg" />
                              <img v-if="styleClass!=''" src="assets/images/lock.svg" />
                           </div>
                        </ion-col>
                     </ion-row>

                     <div :class="styleClass" id="container_write" class="container_write-ipad">
                        <div class="Form-subject-container">
                           <ion-row class="Form-subject-row">
                              <ion-col size="12" class="pr-0 pl-0">
                                 <div class="Form-subject-block">
                                    <div class="Form-subject">
                                       <h5>From</h5>
                                       <p class="fontlight">John Anderson 243 Park Hall Aveneues Kassel
                                          11017 Germany</p>
                                    </div>

                                    <div class="contact_book contact_book-desk">
                                       <img src="assets/images/contact_book.svg" />
                                    </div>
                                 </div>
                              </ion-col>
                           </ion-row>

                           <ion-row class="Form-subject-row">
                              <ion-col size="12" class="pr-0 pl-0">
                                 <div class="Form-subject-block">
                                    <div class="Form-subject">
                                       <h5>To</h5>
                                       <p class="fontlight">Justin Shepp 564 Urban Estate Phase 2 Kassel
                                          11017 Germany</p>
                                    </div>

                                    <div class="contact_book contact_book-desk icon-hover" @click="contact">
                                       <img src="assets/images/contact_book.svg" />
                                    </div>
                                 </div>
                              </ion-col>
                           </ion-row>

                           <ion-row class="Form-subject-row">
                              <ion-col size="12" class="pr-0 pl-0">
                                 <div class="Form-subject-block">
                                    <div class="Form-subject">
                                       <h5>Subject</h5>
                                       <p class="fontlight">Address Change</p>
                                    </div>
                                 </div>
                              </ion-col>
                           </ion-row>
                        </div>

                        <ion-row class="row_01 b_p bor_b">
                           <ion-col size="12" class="pr-0 pl-0">
                              <h5>Dear Sirs and Madames,</h5>
                           </ion-col>
                           <ion-col size="12" class="pr-0 pl-0">
                              <div class="tab_desc">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five
                                    centuries, but also the leap into electronic typesetting, remaining
                                    essentially unchanged. </p>

                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five
                                    centuries, but also the leap into electronic typesetting, remaining
                                    essentially unchanged. </p>

                                 <p>It was popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.</p>
                              </div>
                           </ion-col>
                        </ion-row>

                        <ion-row class="row_01 b_p bor_b">
                           <ion-col size="12" class="pr-0 pl-0">
                              <div class="Form-subject-block ">
                                 <div class="Form-subject _Full">
                                    <h5>Footer</h5>
                                    <p class="fontlight">Sincerely, <br> Justin Shepp</p>
                                 </div>
                              </div>
                           </ion-col>
                        </ion-row>

                        <ion-row class="row_01 b_p ion-padding-top">
                           <ion-col size="6" class="pl-0">
                              <h5>Signature</h5>
                           </ion-col>

                           <ion-col size="6" class="pr-0">
                              <div class="btn_ajj adjust-btn-desktop ion-text-right">
                                 <ion-button shape="round" type="button" @click="openModal">Adjust
                                 </ion-button>
                              </div>
                           </ion-col>
                        </ion-row>

                        <ion-row class="row_01 b_p">
                           <ion-col size="3" class="pl-0">
                              <h5>Letter Size</h5>
                           </ion-col>

                           <ion-col size="9" class="pr-0">
                              <div class="letter_size">
                                 <div class="inner_sizes active">
                                    <span>DIN 5008 A</span>
                                 </div>
                                 <div class="inner_sizes">
                                    <span>DIN 5008 B</span>
                                 </div>
                                 <div class="inner_sizes">
                                    <span>US Letter</span>
                                 </div>
                              </div>
                           </ion-col>
                        </ion-row>

                        <ion-row class="b_p ion-padding-bottom">
                           <ion-col size="3" class="ion-padding-bottom pl-0">
                              <h5>Markers</h5>
                           </ion-col>
                           <ion-col size="4"></ion-col>
                           <ion-col size="5" class="ion-padding-bottom pr-0">
                              <div class="mark_toggle">
                                 <ion-toggle slot="end"></ion-toggle>
                              </div>
                           </ion-col>
                        </ion-row>
                     </div>
                     <div class="back_fooipad">
                        <ion-row>
                           <ion-col size="12" class="ion-no-padding">
                              <div class="board-icon">
                                 <div :class="styleClass!=''?'hideBottom':''" class="board-left">
                                    <div class="icon_bn icon-hover">
                                       <img src="assets/images/bold.svg" />
                                    </div>

                                    <div class="icon_bn icon-hover">
                                       <img src="assets/images/itelic.svg" />
                                    </div>

                                    <div class="icon_bn icon-hover">
                                       <img src="assets/images/underline.svg" />
                                    </div>
                                 </div>

                                 <div class="board-center">
                                    <div class="icon_bn icon-hover" @click="preview">
                                       <img src="assets/images/view_black.svg" />
                                    </div>
                                 </div>

                                 <div class="board-right">
                                    <div class="icon_bn icon-hover">
                                       <img @click="presentAlert" class="dlt-icon"
                                          src="assets/images/delete_black.svg" />
                                    </div>
                                 </div>
                              </div>
                           </ion-col>
                        </ion-row>
                     </div>
                  </div>
               </div>
            </ion-content>
         </ion-page>
      </div>


      <!---------------desktop Code--------------->
      <div v-if="isDesktop">
         <ion-page>

            <ion-header class="header_am Hrd-Desktop">
               <ion-toolbar class="header-top">
                  <ion-row class="ion-align-items-center bar_c">
                     <ion-col size="3" class="ipad_cols Desktop_cols">
                        <div class="desktop_conn ">

                           <!-- <ion-button class="MenuBar"><img src="assets/images/menu.svg"/></ion-button> -->

                           <div @click="openMenu" class="desktop-header-icon MenuBar icon-hover">
                              <img src="assets/images/menu.svg" />
                           </div>

                           <div class="desktop-header-icon icon-hover" @click="chossetamp">
                              <img src="assets/images/edit_pencil.svg" />
                           </div>

                           <div class="desktop-header-icon icon-hover" @click="desktopdelete">
                              <img src="assets/images/delete.svg" />
                           </div>

                           <div class="desktop-header-icon icon-hover">
                              <img src="assets/images/search.svg" />
                           </div>

                        </div>
                     </ion-col>
                     <ion-col size="6" class="">
                        <div class="ion-text-center ipad_flx ion-padds-l ion-justify-content-center">
                           <span class="title_top desktop-title-top">Address Change</span>
                        </div>
                     </ion-col>
                     <ion-col size="3">
                        <div class="user_img">
                           <div class="user_avtar">
                              <img src="assets/images/userimage.png" />
                           </div>

                           <div class="arrow_ds">
                              <div class="icon-hover" @click="openPopover">
                                 <img src="assets/images/user_down.svg" />
                              </div>
                           </div>

                        </div>
                     </ion-col>
                  </ion-row>
               </ion-toolbar>
            </ion-header>


            <ion-content :fullscreen="true" class="ipad_write">
               <div :class="isMenuOpen?'menu-open':'menu-closed'" class="ipad_h destop-sitebar-container">
                  <div class="bg-white SideBar no_border">
                     <ion-row class="s_bar lettes_desk">
                        <ion-col size="12">
                           <div class="ion-text-left ipad_flx desk_flx">
                              <span class="title_top ipad_title_top desktop_vs">All Letters</span>
                              <ion-badge class="badgs badgs_desks">8</ion-badge>
                              <div class="black-down-arrow">
                                 <ion-button @click="allletterM" expand="block">
                                    <img src="assets/images/user_down.svg" />
                                 </ion-button>
                              </div>

                              <!-- <ion-select interface="popover">
                            <ion-select-option value="nes">NES</ion-select-option>
                            <ion-select-option value="n64">Nintendo64</ion-select-option>
                            <ion-select-option value="ps">PlayStation</ion-select-option>
                            <ion-select-option value="genesis">Sega Genesis</ion-select-option>
                            <ion-select-option value="saturn">Sega Saturn</ion-select-option>
                            <ion-select-option value="snes">SNES</ion-select-option>
                        </ion-select> -->
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="ion-align-items-center active_letters lettes lettes_desk">
                        <ion-col size="12" class="sitebar-text-info">
                           <div class="texts_letts">
                              <h3>Address Change</h3>
                              <p>Dear Sirs and Madames,<br>Lorem Ipsum...</p>
                           </div>
                           <div class="date">
                              <span>11 Jan</span>
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="ion-align-items-center lettes lettes_desk">
                        <ion-col size="12" class="sitebar-text-info">
                           <div class="texts_letts">
                              <h3>Minutes of Meeting</h3>
                              <p>Dear Johnson Charles, <br> It has survived not only...</p>
                           </div>
                           <div class="date">
                              <span>10 Jan</span>
                           </div>
                        </ion-col>
                     </ion-row>

                     <ion-row class="ion-align-items-center lettes lettes_desk">
                        <ion-col size="12" class="sitebar-text-info">
                           <div class="texts_letts">
                              <h3>List of Appointments</h3>
                              <p>Dear Mr Miller, <br> There are many variations of passages...</p>
                           </div>
                           <div class="date">
                              <span>09 Jan</span>
                           </div>
                        </ion-col>
                     </ion-row>
                  </div>

                  <div class="right-content-box">

                     <ion-row>
                        <ion-col size="6" class="ion-no-padding bg-white">
                           <div class="lock_unlock Desktop_lock_unlock">
                              <ion-row>
                                 <ion-col size="12" class="ion-no-padding">
                                    <div class="board-icon">
                                       <div class="board-left">
                                          <div class="icon_bn img_unloacks icon-hover" @click="addclass($event)">
                                             <img v-if="styleClass==''" src="assets/images/un_lock.svg" />
                                             <img v-if="styleClass!=''" src="assets/images/lock.svg" />
                                          </div>

                                          <div :class="styleClass!=''?'hideBottom':''" class="align_icons">

                                             <!---                                        
                                        <div  class="icon_bn icon-hover textEditor">
                                            <img src="assets/images/bold.svg"/>
                                        </div>

                                        <div class="icon_bn icon-hover">
                                            <img src="assets/images/itelic.svg"/>
                                        </div>

                                        <div class="icon_bn icon-hover">
                                            <img src="assets/images/underline.svg"/>
                                        </div>   ---->

                                          </div>
                                       </div>

                                       <div class="board-right">
                                          <div class="icon_bn right_km icon-hover" @click="sendtype">
                                             <img src="assets/images/black_send_share.svg" />
                                          </div>
                                       </div>
                                    </div>
                                 </ion-col>
                              </ion-row>
                           </div>

                           <div :class="styleClass" id="container_write"
                              class="ipad_borders ion-no-margin container_write-desktop GFG">

                              <div class="Form-subject-container">
                                 <ion-row class="Form-subject-row">
                                    <ion-col size="12" class="pr-0 pl-0">
                                       <div class="Form-subject-block">
                                          <div class="Form-subject">
                                             <h5>From</h5>
                                             <p class="fontlight f-20 Include-Dot">John Anderson<span>
                                                   <h6></h6>
                                                </span> 243 Park Hall Aveneues<span>
                                                   <h6></h6>
                                                </span> Kassel 11017 Germany</p>
                                          </div>

                                          <div class="contact_book contact_book-desk icon-hover contact-book-desktop">
                                             <img src="assets/images/contact_book.svg" />
                                          </div>
                                       </div>
                                    </ion-col>
                                 </ion-row>

                                 <ion-row class="Form-subject-row onerows">
                                    <ion-col size="12" class="pr-0 pl-0">
                                       <div class="Form-subject-block">
                                          <div class="Form-subject">
                                             <h5>To</h5>
                                             <!-- <p class="fontlight f-20 Include-Dot">Justin Shepp<span><h6></h6></span> 564 Urban Estate Phase 2<span><h6></h6></span> Kassel 11017 Germany</p> -->
                                             <div class="fullwiths">
                                                <ion-chip>
                                                   <ion-label class="fontlight Include-Dot">Justin
                                                      Shepp<span>
                                                         <h6></h6>
                                                      </span> 564 Urban Estate Phase 2<span>
                                                         <h6></h6>
                                                      </span> Kassel 11017 Germany</ion-label>
                                                   <ion-icon name="close"></ion-icon>
                                                </ion-chip>
                                                <ion-chip>
                                                   <ion-label class="fontlight">Micheal Adams 56 Park Hall Avenues Street
                                                      6 Berlin 11017 Germany</ion-label>
                                                   <ion-icon name="close"></ion-icon>
                                                </ion-chip>
                                                <ion-chip>
                                                   <ion-label class="fontlight">Patrick Moya 67 Green Park Street 11
                                                      Berlin 11017 Germany</ion-label>
                                                   <ion-icon name="close"></ion-icon>
                                                </ion-chip>
                                             </div>

                                          </div>

                                          <div class="contact_book contact_book-desk contact-book-desktop icon-hover" @click="contact">
                                             <img src="assets/images/contact_book.svg" />
                                          </div>
                                       </div>
                                    </ion-col>
                                 </ion-row>

                                 <ion-row class="Form-subject-row">
                                    <ion-col size="12" class="pr-0 pl-0">
                                       <div class="Form-subject-block">
                                          <div class="Form-subject">
                                             <h5>Subject</h5>
                                             <p class="fontlight f-20">Address Change</p>
                                          </div>
                                       </div>
                                    </ion-col>
                                 </ion-row>
                              </div>


                              <ion-row class="row_01 b_p ion-margin-top">
                                 <!---
                            <ion-col size="12" class="pr-0 pl-0 SD">
                                <h5>Dear Sirs and Madames,</h5>
                            </ion-col> ---->
                                 <ion-col size="12" class="pr-0 pl-0">
                                    <!---                   <editor
                             initial-value=" <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
    api-key="no-api-key"
    :init="{
      height: 500,  
      menubar: false,
      plugins: 'lists link image emoticons',
      toolbar: 'bold italic underline'
    }"
  />  
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

  ---->
                                    <div class="tab_desc">

                                    </div>

                                    <vue-editor v-model="content" :editorToolbar="customToolbar">
                                    </vue-editor>

                                 </ion-col>

                              </ion-row>

                              <!---   <ion-row class="row_01 b_p bor_b">
                            <ion-col size="3" class="pr-0">
                                <h5>Footer</h5>
                            </ion-col>
                            <ion-col size="9" class="pl-0">
                                <p class="fontlight">Sincerely, <br> Justin Shepp</p>
                            </ion-col>
                        </ion-row> ---->

                              <ion-row class="row_01 b_p ion-padding-top">
                                 <ion-col size="6" class="pr-0">
                                    <h5>Signature</h5>
                                 </ion-col>

                                 <ion-col size="6" class="pl-0">
                                    <div class="btn_ajj adjust-btn-desktop ion-text-right">
                                       <ion-button shape="round" type="button" @click="openModal">Adjust
                                       </ion-button>
                                    </div>
                                 </ion-col>
                              </ion-row>

                              <ion-row class="row_01 b_p">
                                 <ion-col size="3" class="pr-0">
                                    <h5>Letter Size</h5>
                                 </ion-col>

                                 <ion-col size="9" class="pl-0">
                                    <div class="letter_size">
                                       <div class="inner_sizes">
                                          <span>DIN 5008 A</span>
                                       </div>
                                       <div class="inner_sizes">
                                          <span>DIN 5008 B</span>
                                       </div>
                                       <div class="inner_sizes active">
                                          <span>US Letter</span>
                                       </div>
                                    </div>
                                 </ion-col>
                              </ion-row>

                              <ion-row class="b_p ion-padding-bottom">
                                 <ion-col size="3" class="ion-padding-bottom pr-0">
                                    <h5>Markers</h5>
                                 </ion-col>
                                 <ion-col size="4"></ion-col>
                                 <ion-col size="5" class="ion-padding-bottom pl-0">
                                    <div class="mark_toggle">
                                       <ion-toggle slot="end"></ion-toggle>
                                    </div>
                                 </ion-col>
                              </ion-row>
                           </div>

                        </ion-col>

                        <ion-col size="6" class="relative Lp-bg ion-no-padding customflex">
                           <div class="Testtop"></div>
                           <div id="privew_s" class="back_white privew_ipads privew_desktop SDSD">
                              <ion-row class="privew_r ion-padding-bottom ion-justify-content-between">
                                 <ion-col size="6">
                                    <div class="innerr_b ipad_bs">
                                       <p><strong>John Anderson</strong></p>
                                       <p>Park Hall Aveneues</p>
                                       <p>8726 Kassel</p>

                                       <div class="mail_deta">
                                          <p>john.anderson@gmail.com</p>
                                       </div>
                                    </div>
                                 </ion-col>

                                 <ion-col size="6">
                                    <div class="innerr_b_right">
                                       <p><strong>Justin Shepp</strong></p>
                                       <p>Urban Estate Phase 2</p>
                                       <p>2726 Kassel</p>

                                       <div class="mail_deta">
                                          <p>justin.shepp@gmail.com</p>
                                          <p>January 11, 2021</p>
                                       </div>
                                    </div>
                                 </ion-col>
                              </ion-row>

                              <ion-row class="ion-padding-top ion-padding-bottom">
                                 <ion-col size="12" class="">
                                    <h5 class="desktop-request-title">Address Change</h5>
                                 </ion-col>
                              </ion-row>

                              <ion-row class="privew_r ion-padding-bottom">
                                 <ion-col size="12">
                                    <p class="ion-padding-bottom ruler-line_tab"><strong>Dear Sirs and
                                          Madames,</strong></p>

                                    <p class="ion-padding-bottom ruler-line_tab">Lorem Ipsum is simply dummy
                                       text of the printing and typesetting industry. Lorem Ipsum has been
                                       the industry's standard dummy text ever since the 1500s, when an
                                       unknown printer took a galley of type and scrambled it to make a
                                       type specimen book. It has survived not only five centuries, but
                                       also the leap into electronic typesetting, remaining essentially
                                       unchanged.</p>

                                    <p>It was popularised in the 1960s with the release of Letraset sheets
                                       containing Lorem Ipsum passages, and more recently with desktop
                                       publishing software like Aldus PageMaker including versions of Lorem
                                       Ipsum.</p>
                                 </ion-col>
                              </ion-row>

                              <ion-row class="desktop_row_sinc">
                                 <ion-col size="6">
                                    <div class="sincerely">
                                       <p>Sincerely,</p>
                                       <p><strong>Justin Shepp</strong></p>
                                    </div>
                                 </ion-col>
                              </ion-row>
                           </div>

                           <div class="desktop_pages_of">
                              <div class="arrow">
                                 <img src="assets/images/left-arrow.svg" />
                              </div>
                              <p>Page 1 of 2</p>
                              <div class="arrow">
                                 <img src="assets/images/right-arrow-angle.svg" />
                              </div>
                           </div>

                        </ion-col>
                     </ion-row>
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
      IonHeader,
      IonFooter,
      IonContent,
      IonToolbar,
      IonButtons,
      IonButton,
      IonMenuButton,
      IonSelectOption,
      IonSelect,
      IonToggle,
      IonCol,
      IonRow,
      alertController,
      IonSearchbar,
      modalController,
      popoverController,
      IonLabel,
      IonItem,
      IonBadge
   } from '@ionic/vue'
   import {
      add
   } from 'ionicons/icons';
   import {
      defineComponent
   } from 'vue';
   import {
      useRouter
   } from 'vue-router';
   import {
      isPlatform,
      getPlatforms
   } from '@ionic/vue';
   import Changesignature from './Changesignature.vue'
   import Preview from './Preview.vue'
   import Contacts from './Contacts.vue';
   import Account from './Account.vue'
   import Popover from './Popover.vue'
   import Choosetemplate from './Choosetemplate.vue'
   import Selectsendtype from './Selectsendtype.vue'
   import AllletterMenu from './AllletterMenu.vue'

   import {
      VueEditor
   } from "vue3-editor";


   export default defineComponent({
      name: 'Writedocument',
      components: {
         IonContent,
         IonFooter,
         IonButton,
         IonHeader,
         IonPage,
         IonToolbar,
         IonButtons,
         IonSelect,
         IonSelectOption,
         IonToggle,
         IonCol,
         IonSearchbar,
         IonRow,
         IonMenuButton,
         IonBadge,
         IonLabel,
         VueEditor,
         IonItem

      },


      setup() {
         const router = useRouter();
         return {
            router,
            add
         };
      },
      data() {
         return {
            styleClass: "",

            isDesktop: isPlatform('desktop'),
            isMobile: getPlatforms().indexOf('iphone') > -1 || getPlatforms().indexOf('android') > -1,
            isIpad: getPlatforms().indexOf('ipad') > -1,
            isMenuOpen: true,
            content: "<h5>Dear Sirs and Madames,</h5> <br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br><p class='fontlight'>Sincerely, <br /> Justin Shepp</p>",
            customToolbar: [
               ["bold", "italic", "underline"]
            ]
         }
      },
      methods: {

         openMenu() {
            this.isMenuOpen = !this.isMenuOpen
         },

         async presentAlert() {
            const alert = await alertController
               .create({
                  cssClass: 'my-custom-class',
                  header: 'Delete Document',
                  subHeader: 'Do you really want to delete document',
                  message: 'Address Change?',
                  buttons: ['Cancel', 'Delete'],
               });
            return alert.present();
         },

         async desktopdelete () {
            const alert = await alertController
               .create({
                  cssClass: 'desktop_deletes',
                  header: 'Delete document2',
                  subHeader: 'Do you really want to delete document',
                  message: 'Address Change?',
                  buttons: ['Delete', 'Cancel'],
               });
            return alert.present();
         },

         async openModal () {
            const modal = await modalController.create({
               component: Changesignature,
               cssClass: 'choosetemplate_hm',
               componentProps: {
                  title: 'New Title'
               },
            })
            return await modal.present();
         },


         async sendtype () {
            modalController.dismiss()
            const modal = await modalController.create({
               component: Selectsendtype,
               cssClass: 'choosetem',
               componentProps: {
                  title: 'New Title'
               },
            })
            return modal.present();
         },

         async preview () {
            modalController.dismiss()
            const modal = await modalController.create({
               component: Preview,
               cssClass: 'choosetem',
               componentProps: {
                  title: 'New Title'
               },
            })
            return modal.present();
         },

         async contact () {
            modalController.dismiss()
            const modal = await modalController.create({
               component: Contacts,
               cssClass: 'choosetem',
               componentProps: {
                  title: 'New Title'
               },
            })
            return modal.present();
         },

         async account () {
            modalController.dismiss()
            const modal = await modalController.create({
               component: Account,
               cssClass: 'choosetem',
               componentProps: {
                  title: 'New Title'
               },
            })
            modal.onDidDismiss().then((res) => {
               console.log(res)
            })
            modal.present();

         },

         async documentSend () {
            modalController.dismiss()
            const alert = await alertController
               .create({
                  cssClass: 'document_send',
                  message: '<div class="send_doxs"><img src="assets/images/check_send.svg"/><p>Your Document has been <br> sucessfully sent</p></div>',
               });
           return alert.present();

            // setTimeout(()=>{
            //    alert.dismiss();
            // }, 2000);



         },

         addclass() {
            if (this.$data.styleClass != "locked") {
               this.$data.styleClass = "locked"
            } else {
               this.$data.styleClass = ""
            }

         },
         async openPopover (ev: Event) {
            const popover = await popoverController
               .create({
                  component: Popover,
                  cssClass: 'HeaderDropDown',
                  event: ev,
                  translucent: true
               })
            return popover.present();
         },

         async allletterM (ev: Event) {
            const popover = await popoverController
               .create({
                  component: AllletterMenu,
                  cssClass: 'HeaderDropDown allLetterDropDown',
                  event: ev,
                  translucent: true
               })
            return popover.present();
         },

         async chossetamp () {
            modalController.dismiss()
            const modal = await modalController.create({
               component: Choosetemplate,
               cssClass: 'choosetemplate_hm',
               componentProps: {
                  title: 'New Title'
               },
            })
            return modal.present();
         },



      }
   });
</script>

<style scoped>

</style>