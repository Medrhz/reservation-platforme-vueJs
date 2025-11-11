const { createApp, markRaw } = Vue;

/***********************
 * Navbar
 ***********************/
const Navbar = {
  template: `
    <nav class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-indigo-600">RéserV</h1>
        <div class="space-x-4">
          <button @click="$emit('navigate', 'HomePage')" class="hover:text-indigo-600">Accueil</button>
          <button @click="$emit('navigate', 'ReservationPage')" class="hover:text-indigo-600">Réserver</button>
        </div>
      </div>
    </nav>
  `,
};

/***********************
 * Home Page
 ***********************/
const HomePage = {
  template: `
    <section class="bg-white p-8 rounded shadow max-w-2xl mx-auto mt-6 text-center">
      <h2 class="text-3xl font-semibold mb-4 text-gray-800">Bienvenue sur RéserV</h2>
      <p class="text-gray-600">
        Votre plateforme simple et rapide pour réserver vos rendez-vous en ligne.
      </p>
      <button
        @click="$emit('navigate','ReservationPage')"
        class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Commencer
      </button>
    </section>
  `,
};

/***********************
 * Reservation Page
 ***********************/
const ReservationPage = {
  emits: ["booked"],
  data() {
    return {
      form: { name: "", email: "", service: "", date: "", time: "" },
      services: ["Consultation", "Bilan", "Suivi", "Coiffure"],
      times: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
    };
  },
  methods: {
    submitForm() {
      console.log("Réservation confirmée ✅:", this.form);
      const clean = JSON.parse(JSON.stringify(this.form)); // pure object
      this.$emit("booked", clean); // send to parent
    },
  },
  template: `
    <section class="bg-white p-8 rounded shadow max-w-2xl mx-auto mt-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Réserver un rendez-vous</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="form.name" type="text" placeholder="Nom complet" class="border rounded p-2 w-full" required />
        <input v-model="form.email" type="email" placeholder="Email" class="border rounded p-2 w-full" required />
        <select v-model="form.service" class="border rounded p-2 w-full" required>
          <option disabled value="">-- Choisir un service --</option>
          <option v-for="s in services" :key="s">{{ s }}</option>
        </select>
        <div class="grid grid-cols-2 gap-4">
          <input v-model="form.date" type="date" class="border rounded p-2 w-full" required />
          <select v-model="form.time" class="border rounded p-2 w-full" required>
            <option disabled value="">-- Choisir une heure --</option>
            <option v-for="t in times" :key="t">{{ t }}</option>
          </select>
        </div>
        <button class="bg-indigo-600 text-white px-4 py-2 rounded" type="submit">Confirmer</button>
      </form>
    </section>
  `,
};

/***********************
 * Confirmation Page
 ***********************/
const ConfirmationPage = {
  props: ["lastBooking"],
  mounted() {
    console.log("👀 ConfirmationPage mounted:", this.lastBooking);
  },
  template: `
    <section class="bg-white p-8 rounded shadow max-w-2xl mx-auto mt-6 text-center">
      <div v-if="lastBooking">
        <h2 class="text-2xl font-semibold mb-4">✅ Merci, {{ lastBooking.name }} !</h2>
        <p class="text-gray-600">
          Votre réservation pour <strong>{{ lastBooking.service }}</strong><br/>
          le <strong>{{ lastBooking.date }}</strong> à <strong>{{ lastBooking.time }}</strong> est bien enregistrée.
        </p>
        <button @click="$emit('navigate','HomePage')" class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
          Retour à l'accueil
        </button>
      </div>
      <div v-else>
        <p class="text-gray-500">Aucune réservation trouvée.</p>
      </div>
    </section>
  `,
};

/***********************
 * Footer
 ***********************/
const FooterBar = {
  template: `
    <footer class="bg-white border-t mt-8">
      <div class="text-center text-slate-500 py-4 text-sm">
        © 2025 RéserV — Tous droits réservés
      </div>
    </footer>
  `,
};

/***********************
 * App Root
 ***********************/
createApp({
  components: { Navbar, FooterBar },
  data() {
    return {
      currentView: "HomePage",
      lastBooking: null,
      views: {
        HomePage: markRaw(HomePage),
        ReservationPage: markRaw(ReservationPage),
        ConfirmationPage: markRaw(ConfirmationPage),
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
      this.currentView = view;
    },
    handleBooking(data) {
      console.log("📦 Nouvelle réservation :", data);
      this.lastBooking = data;
      console.log("✅ lastBooking enregistré :", this.lastBooking);
      this.currentView = "ConfirmationPage";
    },
  },
}).mount("#app");
