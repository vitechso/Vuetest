<template>
<ion-page>
<div v-if="isMobile">
<ion-page> 
<ion-header class="header_am">
    <ion-toolbar>
        <ion-row class="ion-align-items-center">
            <ion-col size="1">
                    <div class="ion-text-center">
                        <img @click="()=>router.push('/all-letters')" src="assets/images/back_btn.svg"/>
                    </div>
            </ion-col>

            <ion-col size="9">
                <div class="ion-text-left">
                <span class="title_top">Contacts</span> 
                </div>
            </ion-col>
        
        </ion-row>
    </ion-toolbar>

    <ion-segment value="contacts" @ionChange="segmentChanged($event)" class="segmnt">
        <ion-segment-button value="contacts" >
            <ion-label>Contacts</ion-label>
        </ion-segment-button>

        <ion-segment-button value="groups">
            <ion-label>Groups</ion-label>
        </ion-segment-button>
    </ion-segment>

    <ion-row class="ion-padding-top ion-padding-bottom">
        <ion-col size="12" class="ion-padding-start ion-padding-end">
            <ion-searchbar class="ion-no-padding search_bts"></ion-searchbar>
        </ion-col>
    </ion-row>

    <ion-row class="ion-justify-content-center ion-padding-start ion-padding-end ion-padding-bottom">
        <ion-col size="12">
            <div class="BtnBlock">
                <ion-button class="import_csv" @click="() => router.push('/import-CSVExcel')">Import CSV/Excel</ion-button>
                <ion-button class="import_csv" @click="() => router.push('/add-contact')">Add Contact</ion-button>
            </div>
        </ion-col>
    </ion-row>
</ion-header>

<ion-content :fullscreen="true">
    <div v-if="selectedSegment == 'contacts'" class="ion-padding-start ion-padding-end ion-padding-top Contacts-List-Info">
        <div class="contactlist"> 
            <div class="alpha"><p>A</p></div>
            <div class="contact_name_list">
                <ion-list>
                    <ion-item lines="none" class="list_cons">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                    </ion-item>


                    <ion-item lines="none" class="list_cons">
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                        <ion-label>Andy Bickel</ion-label>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                    </ion-item>


                    <ion-item lines="none" class="list_cons">
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                        <ion-label>Jon Snow</ion-label>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                    </ion-item>
                </ion-list>
            </div>
        </div>

        <div class="contactlist"> 
            <div class="alpha"><p>B</p></div>
            <div class="contact_name_list">
                <ion-list>
                    <ion-item lines="none" class="list_cons">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                    </ion-item>


                    <ion-item lines="none" class="list_cons">
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                        <ion-label>Andy Bickel</ion-label>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                    </ion-item>


                    <ion-item lines="none" class="list_cons">
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                        <ion-label>Jon Snow</ion-label>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                    </ion-item>
                </ion-list>
            </div>
        </div>

        <div class="contactlist"> 
            <div class="alpha"><p>C</p></div>
            <div class="contact_name_list">
                <ion-list>
                    <ion-item lines="none" class="list_cons">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                    </ion-item>


                    <ion-item lines="none" class="list_cons">
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                        <ion-label>Andy Bickel</ion-label>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                    </ion-item>


                    <ion-item lines="none" class="list_cons">
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                        <ion-label>Jon Snow</ion-label>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                    </ion-item>
                </ion-list>
            </div>
        </div>
    </div>
    <div v-if="selectedSegment == 'groups'" class="ion-padding-start ion-padding-end ion-padding-top">
        <div class="contactlist"> 
            <div class="contact_name_list">
                <ion-list>
                    <ion-item lines="none" class="list_cons">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                    </ion-item>


                    <ion-item lines="none" class="list_cons">
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                        <ion-label>Andy Bickel</ion-label>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        <div slot="end" class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                    </ion-item>


                    <ion-item lines="none" class="list_cons">
                        <ion-checkbox color="primary" slot="start"></ion-checkbox>
                        <ion-label>Jon Snow</ion-label>
                        <slot end>
                        <div class="control_cin sddsd">
                            <img src="assets/images/edit.svg"/>
                        </div>
                        </slot> 

                        <slot end>
                             <div class="control_cin">
                            <img src="assets/images/delete_black.svg"/>
                        </div>
                        </slot>
                    </ion-item>
                </ion-list>
            </div>
        </div>
    </div>
    
  </ion-content>

  <ion-footer class="ion-no-border">
    <ion-toolbar>
        <ion-row>
            <ion-col size="6">
                <ion-button shape="round" class="ok_btn">Ok</ion-button>
            </ion-col>
            <ion-col size="6">
                <ion-button shape="round" class="cancel_btn">Cancel</ion-button>
            </ion-col>
        </ion-row>
      
    </ion-toolbar>
  </ion-footer>
</ion-page>
</div>

<div v-if="isIpad">
<ion-page>
<ion-header class="ipad_topbar">
        <ion-toolbar>
        <ion-row class="ion-align-items-center bar_c">
      <ion-col size="6" class="ipad_cols">
        <div class="ion-text-left ipad_flx">
          <span class="popup_title">Contacts</span> 
        </div>
      </ion-col>
      <ion-col size="4"></ion-col>
      <ion-col size="2">
        <div @click="cancel" class="close_popus">
            <img src="assets/images/cross_icon.svg"/>
        </div>
      </ion-col>
    </ion-row>
        </ion-toolbar>

          <ion-segment value="contacts" @ionChange="segmentChanged($event)" class="segmnt">
    <ion-segment-button value="contacts" >
      <ion-label>Contacts</ion-label>
    </ion-segment-button>
    <ion-segment-button value="groups">
      <ion-label>Groups</ion-label>
    </ion-segment-button>
  </ion-segment>
    <ion-row class="ion-padding-top ion-padding-bottom">
        <ion-col size="12" class="ion-padding-start ion-padding-end">
            <ion-searchbar class="ion-no-padding search_bts hans_ipad"></ion-searchbar>
        </ion-col>
    </ion-row>

    <ion-row class="ion-padding-start ion-padding-end ion-text-center">
        <ion-col size="8">
            
        </ion-col>
        <ion-col size="4">
            <ion-button class="import_csv" @click="excel">Import CSV/Excel</ion-button>
            <ion-button class="import_csv" @click="() => router.push('/add-contact')">Add Contact</ion-button>
        </ion-col>
    </ion-row>
  </ion-header>

  <ion-content :fullscreen="true">
    <div v-if="selectedSegment == 'contacts'" class="ion-padding-start ion-padding-end ion-padding-top">
        <div class="contactlist"> 
            <div class="alpha"><p>A</p></div>
            <div class="contact_name_list">

                <ion-row class="main_conipad main-cont-desk">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>

                <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
        </div>

        <div class="contactlist"> 
            <div class="alpha"><p>B</p></div>
            <div class="contact_name_list">
               <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
        </div>

        <div class="contactlist"> 
            <div class="alpha"><p>C</p></div>
            <div class="contact_name_list">
                <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>
            </div>
        </div>
    </div>
    <div v-if="selectedSegment == 'groups'" class="ion-padding-start ion-padding-end ion-padding-top">
        <div class="contactlist"> 
            <div class="contact_name_list">
                
               <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
                            </div>
                        </div>
                        </div>
                    </ion-col>
                </ion-row>

                <ion-row class="main_conipad">
                    <ion-col size="3">
                        <ion-item lines="none">
                        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                        <ion-label>Andrew Symonds</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <div class="insd">
                            <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                        </div>
                    </ion-col>
                    <ion-col size="2">
                        <div class="insd">
                            <p>401-333-2828</p>
                        </div>
                    </ion-col>
                    <ion-col size="4">
                        <div class="hsma">
                        <div class="insd">
                            <p>andrew@yahoo.com</p>
                        </div>
                        <div class="colsd">
                            <div class="control_cin">
                                <img src="assets/images/edit.svg"/>
                            </div>
                            <div class="control_cin">
                                <img src="assets/images/delete_black.svg"/>
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

<div v-if="isDesktop">
<ion-page>
    <ion-header class="ipad_topbar desktop_topbar">
        <ion-toolbar>
            <ion-row class="ion-align-items-center bar_c">
                <ion-col size="6" class="ipad_cols">
                    <div class="ion-text-left ipad_flx">
                    <span class="popup_title">Contacts</span> 
                    </div>
                </ion-col>
                <ion-col size="4"></ion-col>
                <ion-col size="2">
                    <div @click="cancel" class="close_popus">
                        <img src="assets/images/cross_icon.svg"/>
                    </div>
                </ion-col>
            </ion-row>
        </ion-toolbar>

        <ion-segment value="contacts" @ionChange="segmentChanged($event)" class="segmnt desktop-segmnt">
            <ion-segment-button value="contacts" >
                <ion-label>Contacts</ion-label>
            </ion-segment-button>

            <ion-segment-button value="groups">
                <ion-label>Groups</ion-label>
            </ion-segment-button>
        </ion-segment>

        <ion-row class="ion-padding-top">
            <ion-col size="12" class="ion-padding-start ion-padding-end">
                <ion-searchbar class="ion-no-padding search_bts hans_ipad cntct-search-desk"></ion-searchbar>
            </ion-col>
        </ion-row>

        <ion-row class="ContactList-btnBox ion-justify-content-end ion-padding">
            <ion-col size="6" class="d-flex ion-justify-content-end ion-no-padding">
                <ion-button v-if="selectedSegment == 'contacts'" class="import_csv" @click="excel">Import CSV/Excel</ion-button>
                <ion-button v-if="selectedSegment == 'contacts'" class="import_csv" @click="addacontact">Add Contact</ion-button>
                <ion-button v-if="selectedSegment == 'groups'" class="import_csv" @click="creategroup">Create Group</ion-button>
            </ion-col>
        </ion-row>
    </ion-header>

    <ion-content :fullscreen="true">
        <div v-if="selectedSegment == 'contacts'" class="ion-padding-start Contacts-List-Info">
            <div class="contactlist contactlist-desk"> 
                <div class="alpha"><p>A</p></div>
                <div class="contact_name_list">
                    <ion-row class="main_conipad  main-cont-desk">
                        <ion-col size="3">
                            <ion-item lines="none">
                                <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                                <ion-label>Andrew Symonds</ion-label>
                            </ion-item>
                        </ion-col>

                        <ion-col size="3" class="ion-padding-end">
                            <div class="insd">
                                <p>243 Park Hall Aveneues Kassel 11015 Germany</p>
                            </div>
                        </ion-col>
                        
                        <ion-col size="2">
                            <div class="insd">
                                <p>401-333-2828</p>
                            </div>
                        </ion-col>
                        
                        <ion-col size="4" class="ion-padding-end">
                            <div class="hsma">
                            <div class="insd">
                                <p>andrew@yahoo.com</p>
                            </div>
                            <div class="colsd">
                                <div class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </div>
                            </div>
                        </ion-col>
                    </ion-row>

                    <ion-row class="main_conipad  main-cont-desk">
                        <ion-col size="3">
                            <ion-item lines="none">
                            <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                            <ion-label>Andy Bickel</ion-label>
                            </ion-item>
                        </ion-col>

                        <ion-col size="3" class="ion-padding-end">
                            <div class="insd">
                                <p>13 Green Park Avenues Kassel 11015 Germany</p>
                            </div>
                        </ion-col>

                        <ion-col size="2">
                            <div class="insd">
                                <p>503-272-2562</p>
                            </div>
                        </ion-col>

                        <ion-col size="4" class="ion-padding-end">
                            <div class="hsma">
                            <div class="insd">
                                <p>andybickkel@yahoo.com</p>
                            </div>
                            <div class="colsd">
                                <div class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </div>
                            </div>
                        </ion-col>
                    </ion-row>
                </div>
            </div>

            <div class="contactlist contactlist-desk "> 
                <div class="alpha"><p>B</p></div>
                <div class="contact_name_list">
                <ion-row class="main_conipad  main-cont-desk">
                        <ion-col size="3">
                            <ion-item lines="none">
                            <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                            <ion-label>Bryan Adams</ion-label>
                            </ion-item>
                        </ion-col>

                        <ion-col size="3" class="ion-padding-end">
                            <div class="insd">
                                <p>12 Model Town Road Berlin 11017 Germany</p>
                            </div>
                        </ion-col>

                        <ion-col size="2">
                            <div class="insd">
                                <p>503-272-2562</p>
                            </div>
                        </ion-col>

                        <ion-col size="4" class="ion-padding-end">
                            <div class="hsma">
                            <div class="insd">
                                <p>bryan@yahoo.com</p>
                            </div>
                            <div class="colsd">
                                <div class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </div>
                            </div>
                        </ion-col>
                    </ion-row>
                    <ion-row class="main_conipad  main-cont-desk">
                        <ion-col size="3">
                            <ion-item lines="none">
                            <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                            <ion-label>Benjamin Williams</ion-label>
                            </ion-item>
                        </ion-col>

                        <ion-col size="3" class="ion-padding-end">
                            <div class="insd">
                                <p>133 Civil Lines GT Road Munich 11017 Germany</p>
                            </div>
                        </ion-col>

                        <ion-col size="2">
                            <div class="insd">
                                <p>401-333-2828</p>
                            </div>
                        </ion-col>

                        <ion-col size="4" class="ion-padding-end">
                            <div class="hsma">
                            <div class="insd">
                                <p>andrew@yahoo.com</p>
                            </div>
                            <div class="colsd">
                                <div class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </div>
                            </div>
                        </ion-col>
                    </ion-row>

                    <ion-row class="main_conipad  main-cont-desk">
                        <ion-col size="3" >
                            <ion-item lines="none">
                            <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                            <ion-label>Brett D'souza</ion-label>
                            </ion-item>
                        </ion-col>

                        <ion-col size="3" class="ion-padding-end">
                            <div class="insd">
                                <p>13 Green Park Avenues Kassel 11015 Germany</p>
                            </div>
                        </ion-col>

                        <ion-col size="2">
                            <div class="insd">
                                <p>401-333-2828</p>
                            </div>
                        </ion-col>

                        <ion-col size="4" class="ion-padding-end">
                            <div class="hsma">
                            <div class="insd">
                                <p>brett@gmail.com</p>
                            </div>
                            <div class="colsd">
                                <div class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </div>
                            </div>
                        </ion-col>
                    </ion-row>
                </div>
            </div>

            <ion-row class="ion-justify-content-center ion-padding ion-margin-vertical">
                <ion-col size="12">
                    <div class="BtnBlock">
                        <ion-button shape="round" class="MakeDefault-btn">Ok</ion-button>
                        <ion-button shape="round" type="default" @click="cancel" class="MakeDefault-btn _gary-outline-btn">Cancel</ion-button>
                    </div>
                </ion-col>
            </ion-row>
        </div>

        <div v-if="selectedSegment == 'groups'" class="ion-padding-start">
            <div class="contactlist contactlist-desk">
                
                <div class="contact_name_list create-groups-list">
                    <ion-row class="main_conipad main-cont-desk ion-justify-content-between">
                        <ion-col size="3">
                            <ion-item lines="none">
                            <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                            <ion-label>Company</ion-label>
                            </ion-item>
                        </ion-col>

                        <ion-col size="3" class="ion-padding-end">
                            <div class="colsd ion-justify-content-end">
                                <div class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </div>
                        </ion-col>
                    </ion-row>

                    <ion-row class="main_conipad main-cont-desk ion-justify-content-between">
                        <ion-col size="3">
                            <ion-item lines="none">
                            <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                            <ion-label>CEO</ion-label>
                            </ion-item>
                        </ion-col>

                        <ion-col size="3" class="ion-padding-end">
                            <div class="colsd ion-justify-content-end">
                                <div class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </div>
                        </ion-col>
                    </ion-row>

                    <ion-row class="main_conipad main-cont-desk ion-justify-content-between">
                        <ion-col size="3">
                            <ion-item lines="none">
                            <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                            <ion-label>Directors</ion-label>
                            </ion-item>
                        </ion-col>

                        <ion-col size="3" class="ion-padding-end">
                            <div class="colsd ion-justify-content-end">
                                <div class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </div>
                        </ion-col>
                    </ion-row>

                    <ion-row class="main_conipad main-cont-desk ion-justify-content-between">
                        <ion-col size="3">
                            <ion-item lines="none">
                            <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                            <ion-label>Designers</ion-label>
                            </ion-item>
                        </ion-col>

                        <ion-col size="3" class="ion-padding-end">
                            <div class="colsd ion-justify-content-end">
                                <div class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </div>
                        </ion-col>
                    </ion-row>

                    <ion-row class="main_conipad main-cont-desk ion-justify-content-between">
                        <ion-col size="3">
                            <ion-item lines="none">
                            <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                            <ion-label>Marketing</ion-label>
                            </ion-item>
                        </ion-col>

                        <ion-col size="3" class="ion-padding-end">
                            <div class="colsd ion-justify-content-end">
                                <div class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </div>
                        </ion-col>
                    </ion-row>

                    <ion-row class="main_conipad main-cont-desk ion-justify-content-between">
                        <ion-col size="3">
                            <ion-item lines="none">
                            <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                            <ion-label>SEO</ion-label>
                            </ion-item>
                        </ion-col>

                        <ion-col size="3" class="ion-padding-end">
                            <div class="colsd ion-justify-content-end">
                                <div class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </div>
                        </ion-col>
                    </ion-row>

                    <ion-row class="main_conipad main-cont-desk ion-justify-content-between">
                        <ion-col size="3">
                            <ion-item lines="none">
                            <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
                            <ion-label>XYZ</ion-label>
                            </ion-item>
                        </ion-col>

                        <ion-col size="3" class="ion-padding-end">
                            <div class="colsd ion-justify-content-end">
                                <div class="control_cin">
                                    <img src="assets/images/edit.svg"/>
                                </div>
                                <div class="control_cin">
                                    <img src="assets/images/delete_black.svg"/>
                                </div>
                            </div>
                        </ion-col>
                    </ion-row>
                </div>
            </div>

            <ion-row class="ion-justify-content-center ion-padding ion-margin-vertical">
                <ion-col size="12">
                    <div class="BtnBlock">
                        <ion-button shape="round" class="MakeDefault-btn">Ok</ion-button>
                        <ion-button shape="round" type="default" @click="cancel" class="MakeDefault-btn _gary-outline-btn">Cancel</ion-button>
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
import { IonPage,IonHeader, IonContent, IonToolbar, IonFooter, IonButton, IonSegmentButton, IonSegment, IonItem, IonLabel, IonList, IonCheckbox, isPlatform, modalController   } from '@ionic/vue'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import ImportCSVExcel from './ImportCSVExcel.vue'
import Addacontact from './Addacontact.vue'
import Creategroup from './Creategroup.vue'

export default defineComponent({
  name: 'Contacts',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonFooter,
    IonSegmentButton,
    IonSegment,
    IonItem,
    IonLabel,
    IonList,
    IonCheckbox,
    IonButton
  },
  setup() {
      
      const router = useRouter();
      return { router };
  },
  data(){
      return{
          selectedSegment:'contacts',
          styleClass:"",
          isIpad:isPlatform('ipad'),
        isDesktop: isPlatform('desktop'),
        isMobile: isPlatform('mobile'),
      }
  },
  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log('Segment changed', ev.detail.value);
      this.$data.selectedSegment = ev.detail.value;
    },

    async excel() {
        modalController.dismiss()
      const modal = await modalController.create({
          component: ImportCSVExcel,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },

    async addacontact() {
        modalController.dismiss()
      const modal = await modalController.create({
          component: Addacontact,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },

    async creategroup() {
        modalController.dismiss()
      const modal = await modalController.create({
          component: Creategroup,
          cssClass: 'choosetem',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },

    cancel() {
        modalController.dismiss()
    }
  }
});
</script>

<style scoped>

</style>