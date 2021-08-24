import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Forgot from "../views/Forgot.vue";
import Register from "../views/Register.vue";
import Intro from "../views/Intro.vue";
import Allletters from "../views/Allletters.vue";
import Choosetemplate from "../views/Choosetemplate.vue";
import Sendfax from "../views/Sendfax.vue";
import Sendprintedletter from "../views/Sendprintedletter.vue";
import Writedocument from "../views/Writedocument.vue";
import Changesignature from "../views/Changesignature.vue";
import Preview from "../views/Preview.vue";
import Selectsendtype from "../views/Selectsendtype.vue";
import Contacts from "../views/Contacts.vue";
import Settings from "../views/Settings.vue";
import Security from "../views/Security.vue";
import Changepassword from "../views/Changepassword.vue";
import Transactionhistory from "../views/Transactionhistory.vue";
import Privacy from "../views/Privacy.vue";
import Ratingfeedback from "../views/Ratingfeedback.vue";
import Account from "../views/Account.vue";
import EnterPasscode from "../views/EnterPasscode.vue";
import Drawsignature from "../views/Drawsignature.vue";
import ImportCSVExcel from "../views/ImportCSVExcel.vue";
import Addacontact from "../views/Addacontact.vue";
import Uploadpdf from "../views/Uploadpdf.vue";
import Creategroup from "../views/Creategroup.vue";
import Orders from "../views/Orders.vue";
import SendDoc from "../views/SendDoc.vue";
import PDFView from "../views/Pdfview.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/pdf-view",
    name: "PDFView",
    component: PDFView,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: Forgot,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/intro",
    name: "Intro",
    component: Intro,
  },
  {
    path: "/all-letters",
    name: "Allletters",
    component: Allletters,
  },
  {
    path: "/choose-template",
    name: "Choosetemplate",
    component: Choosetemplate,
  },
  {
    path: "/sendfax",
    name: "Sendfax",
    component: Sendfax,
  },
  {
    path: "/sendprintedletter",
    name: "Sendprintedletter",
    component: Sendprintedletter,
  },
  {
    path: "/writedocument",
    name: "Writedocument",
    component: Writedocument,
  },
  {
    path: "/changesignature",
    name: "Changesignature",
    component: Changesignature,
  },
  {
    path: "/preview",
    name: "Preview",
    component: Preview,
  },
  {
    path: "/selectsendtype",
    name: "Selectsendtype",
    component: Selectsendtype,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/security",
    name: "Security",
    component: Security,
  },
  {
    path: "/change-password",
    name: "Changepassword",
    component: Changepassword,
  },
  {
    path: "/transaction-history",
    name: "Transactionhistory",
    component: Transactionhistory,
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
  },
  {
    path: "/rating-feedback",
    name: "Ratingfeedback",
    component: Ratingfeedback,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/enterpasscode",
    name: "EnterPasscode",
    component: EnterPasscode,
  },
  {
    path: "/draw-signature",
    name: "Drawsignature",
    component: Drawsignature,
  },
  {
    path: "/import-CSVExcel",
    name: "ImportCSVExcel",
    component: ImportCSVExcel,
  },
  {
    path: "/add-contact",
    name: "Addacontact",
    component: Addacontact,
  },
  {
    path: "/uploadpdf",
    name: "Uploadpdf",
    component: Uploadpdf,
  },

  {
    path: "/create-group",
    name: "Creategroup",
    component: Creategroup,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/send-doc",
    name: "SendDoc",
    component: SendDoc,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
