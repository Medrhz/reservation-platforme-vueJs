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
          <button @click="$emit('navigate', 'AdminDashboard')" class="hover:text-indigo-600">Admin</button>
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
 * Admin Dashboard
 ***********************/
// const AdminDashboard = {
//   props: ["bookings"],
//   emits: ["navigate", "delete-booking"],
//   template: `
//     <section class="bg-white p-8 rounded shadow max-w-4xl mx-auto mt-6">
//       <h2 class="text-2xl font-semibold mb-6 text-gray-800 text-center">📊 Tableau de bord - Admin</h2>

//       <div v-if="bookings && bookings.length">
//         <table class="w-full border-collapse border border-gray-200">
//           <thead class="bg-indigo-600 text-white">
//             <tr>
//               <th class="border border-gray-200 p-2">Nom</th>
//               <th class="border border-gray-200 p-2">Email</th>
//               <th class="border border-gray-200 p-2">Service</th>
//               <th class="border border-gray-200 p-2">Date</th>
//               <th class="border border-gray-200 p-2">Heure</th>
//               <th class="border border-gray-200 p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr v-for="(b, index) in bookings" :key="index" class="text-center hover:bg-gray-50">
//               <td class="border border-gray-200 p-2">{{ b.name }}</td>
//               <td class="border border-gray-200 p-2">{{ b.email }}</td>
//               <td class="border border-gray-200 p-2">{{ b.service }}</td>
//               <td class="border border-gray-200 p-2">{{ b.date }}</td>
//               <td class="border border-gray-200 p-2">{{ b.time }}</td>
//               <td class="border border-gray-200 p-2">
//                 <button
//                   @click="$emit('delete-booking', index)"
//                   class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
//                 >
//                   Supprimer
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div v-else class="text-center text-gray-500 mt-6">
//         Aucune réservation trouvée.
//       </div>

//       <div class="text-center mt-6">
//         <button
//           @click="$emit('navigate', 'HomePage')"
//           class="bg-indigo-600 text-white px-4 py-2 rounded"
//         >
//           Retour à l'accueil
//         </button>
//       </div>
//     </section>
//   `,
// };

// const AdminDashboard = {
//   props: ["reservations"],
//   emits: ["update-reservations", "navigate"],
//   template: `
//     <section class="bg-white p-8 rounded shadow max-w-4xl mx-auto mt-6">
//       <h2 class="text-2xl font-semibold mb-4 text-gray-800">📋 Liste des Réservations</h2>

//       <table class="w-full border-collapse">
//         <thead class="bg-slate-100 text-left">
//           <tr>
//             <th class="p-2 border-b">Nom</th>
//             <th class="p-2 border-b">Service</th>
//             <th class="p-2 border-b">Date</th>
//             <th class="p-2 border-b">Heure</th>
//             <th class="p-2 border-b">Statut</th>
//             <th class="p-2 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr v-for="r in reservations" :key="r.id" class="border-b">
//             <td class="p-2">{{ r.name }}</td>
//             <td class="p-2">{{ r.service }}</td>
//             <td class="p-2">{{ r.date }}</td>
//             <td class="p-2">{{ r.time }}</td>
//             <td class="p-2">
//               <span :class="r.status === 'confirmed' ? 'text-green-600' : 'text-yellow-600'">
//                 {{ r.status }}
//               </span>
//             </td>
//             <td class="p-2 space-x-2">
//               <button
//                 @click="confirm(r)"
//                 class="bg-green-600 text-white px-2 py-1 rounded"
//                 :disabled="r.status === 'confirmed'">
//                 Confirmer
//               </button>
//               <button
//                 @click="remove(r)"
//                 class="bg-red-600 text-white px-2 py-1 rounded">
//                 Supprimer
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <div class="mt-4">
//         <button @click="$emit('navigate','HomePage')" class="border px-3 py-2 rounded">⬅️ Retour</button>
//       </div>
//     </section>
//   `,
//   methods: {
//     confirm(r) {
//       r.status = "confirmed";
//       this.$emit("update-reservations", this.reservations);
//     },
//     remove(r) {
//       const updated = this.reservations.filter((x) => x.id !== r.id);
//       this.$emit("update-reservations", updated);
//     },
//   },
// };
const AdminDashboard = {
  props: ["reservations"],
  emits: ["update-reservations", "navigate"],
  template: `
    <section class="bg-white p-8 rounded shadow max-w-4xl mx-auto mt-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">📋 Liste des Réservations</h2>

      <table class="w-full border-collapse">
        <thead class="bg-slate-100 text-left">
          <tr>
            <th class="p-2 border-b">Nom</th>
            <th class="p-2 border-b">Service</th>
            <th class="p-2 border-b">Date</th>
            <th class="p-2 border-b">Heure</th>
            <th class="p-2 border-b">Statut</th>
            <th class="p-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in reservations" :key="r.id" class="border-b">
            <td class="p-2">{{ r.name }}</td>
            <td class="p-2">{{ r.service }}</td>
            <td class="p-2">{{ r.date }}</td>
            <td class="p-2">{{ r.time }}</td>
            <td class="p-2">
              <span :class="r.status === 'confirmed' ? 'text-green-600' : 'text-yellow-600'">
                {{ r.status }}
              </span>
            </td>
            <td class="p-2 space-x-2">
              <button 
                @click="confirm(r)" 
                class="bg-green-600 text-white px-2 py-1 rounded"
                :disabled="r.status === 'confirmed'">
                Confirmer
              </button>
              <button 
                @click="remove(r)" 
                class="bg-red-600 text-white px-2 py-1 rounded">
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="mt-4">
        <button @click="$emit('navigate','HomePage')" class="border px-3 py-2 rounded">⬅️ Retour</button>
      </div>
    </section>
  `,
  methods: {
    confirm(r) {
      r.status = "confirmed";
      this.$emit("update-reservations", this.reservations);
    },
    remove(r) {
      console.log("remove ");
      const updated = this.reservations.filter((x) => x.id !== r.id);
      this.$emit("update-reservations", updated);
    },
  },
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
      allBookings: [],
      reservations: JSON.parse(localStorage.getItem("reservations") || "[]"),

      views: {
        HomePage: markRaw(HomePage),
        ReservationPage: markRaw(ReservationPage),
        ConfirmationPage: markRaw(ConfirmationPage),
        AdminDashboard: markRaw(AdminDashboard), // 👈 nouveau
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
    // handleBooking(data) {
    //   console.log("📦 Nouvelle réservation :", data);
    //   this.lastBooking = data;
    //   console.log("✅ lastBooking enregistré :", this.lastBooking);
    //   this.currentView = "ConfirmationPage";
    //   this.allBookings.push(data);
    // },
    handleBooking(data) {
      console.log("📦 Nouvelle réservation :", data);

      const newBooking = { ...data, id: Date.now(), status: "pending" };
      this.reservations.push(newBooking);

      // ✅ نحفظها فـ localStorage
      localStorage.setItem("reservations", JSON.stringify(this.reservations));

      this.lastBooking = newBooking;
      console.log("✅ Enregistré dans localStorage :", this.reservations);
      this.currentView = "ConfirmationPage";
    },
    updateReservations(newList) {
      this.reservations = newList;
      localStorage.setItem("reservations", JSON.stringify(newList));
    },
  },
}).mount("#app");
