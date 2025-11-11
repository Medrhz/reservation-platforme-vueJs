import { FooterBar } from "./components/FooterBar.js";
import { Navbar } from "./components/Navbar.js";
import { HomePage } from "./components/HomePage.js";
import { ReservationPage } from "./components/ReservationPage.js";
import { ConfirmationPage } from "./components/ConfirmationPage.js";
import { AdminDashboard } from "./components/AdminDashboard.js";
import { LoginPage } from "./components/Login.page.js";

const { createApp, markRaw } = Vue;

/***********************
 * App Root
 ***********************/
createApp({
  components: { Navbar, FooterBar },
  data() {
    return {
      currentView: "HomePage",
      lastBooking: null,
      allBookings: [],
      reservations: JSON.parse(localStorage.getItem("reservations") || "[]"),
      isAdminLoggedIn: localStorage.getItem("isAdmin") === "true",

      views: {
        HomePage: markRaw(HomePage),
        ReservationPage: markRaw(ReservationPage),
        ConfirmationPage: markRaw(ConfirmationPage),
        AdminDashboard: markRaw(AdminDashboard),
        LoginPage: markRaw(LoginPage),
      },
    };
  },
  computed: {
    currentViewComponent() {
      return this.views[this.currentView] || this.views.HomePage;
    },
  },
  methods: {
    navigate(view) {
      // this.currentView = view;
      if (view === "AdminDashboard" && !this.isAdminLoggedIn) {
        this.currentView = "LoginPage";
      } else {
        this.currentView = view;
      }
    },

    handleBooking(data) {
      console.log("📦 Nouvelle réservation :", data);

      const newBooking = { ...data, id: Date.now(), status: "pending" };
      this.reservations.push(newBooking);

      // save in  localstorage
      localStorage.setItem("reservations", JSON.stringify(this.reservations));

      this.lastBooking = newBooking;
      console.log("Enregistré dans localStorage :", this.reservations);
      this.currentView = "ConfirmationPage";
    },
    updateReservations(newList) {
      this.reservations = newList;
      localStorage.setItem("reservations", JSON.stringify(newList));
    },
    handleLoginSuccess() {
      this.isAdminLoggedIn = true;
      localStorage.setItem("isAdmin", "true");
    },
    handleLogout() {
      this.isAdminLoggedIn = false;
      localStorage.removeItem("isAdmin");
      this.currentView = "HomePage";
    },
  },
}).mount("#app");
