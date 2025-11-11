// export const ConfirmationPage = {
//   props: ["lastBooking"],
//   mounted() {
//     console.log("👀 ConfirmationPage mounted:", this.lastBooking);
//   },
//   template: `
//     <section class="bg-white p-8 rounded shadow max-w-2xl mx-auto mt-6 text-center">
//       <div v-if="lastBooking">
//         <h2 class="text-2xl font-semibold mb-4">✅ Merci, {{ lastBooking.name }} !</h2>
//         <p class="text-gray-600">
//           Votre réservation pour <strong>{{ lastBooking.service }}</strong><br/>
//           le <strong>{{ lastBooking.date }}</strong> à <strong>{{ lastBooking.time }}</strong> est bien enregistrée.
//         </p>
//         <button @click="$emit('navigate','HomePage')" class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
//           Retour à l'accueil
//         </button>
//       </div>
//       <div v-else>
//         <p class="text-gray-500">Aucune réservation trouvée.</p>
//       </div>
//     </section>
//   `,
// };

export const ConfirmationPage = {
  props: ["lastBooking"],
  mounted() {
    console.log("✅ ConfirmationPage loaded:", this.lastBooking);
  },
  template: `
  <section class="min-h-screen flex items-center justify-center bg-slate-50 py-10">
    <div class="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center border border-gray-100">
      
      <!-- Si une réservation existe -->
      <div v-if="lastBooking">
        <div class="flex justify-center mb-4">
          <div class="bg-teal-100 text-teal-600 rounded-full w-14 h-14 flex items-center justify-center text-3xl">
            ✓
          </div>
        </div>

        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          Merci, {{ lastBooking.name }} !
        </h2>

        <p class="text-gray-600 mb-6">
          Votre réservation a été confirmée avec succès.  
          Vous trouverez ci-dessous les détails de votre rendez-vous.
        </p>

        <div class="bg-slate-50 border rounded-lg p-5 text-left mb-6">
          <h3 class="font-medium text-gray-700 mb-3">🧾 Détails de la réservation</h3>
          <p><strong>Nom :</strong> {{ lastBooking.name }}</p>
          <p><strong>Email :</strong> {{ lastBooking.email }}</p>
          <p><strong>Service :</strong> {{ lastBooking.service }}</p>
          <p><strong>Date :</strong> {{ lastBooking.date }}</p>
          <p><strong>Heure :</strong> {{ lastBooking.time }}</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-3">
          <button 
            @click="$emit('navigate', 'HomePage')" 
            class="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
            Retour à l'accueil
          </button>
          <button 
            @click="$emit('navigate', 'ReservationPage')" 
            class="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
            Faire une autre réservation
          </button>
        </div>
      </div>

      <!-- Si aucune réservation -->
      <div v-else>
        <h2 class="text-xl font-semibold text-gray-700 mb-3">
          Aucune réservation récente
        </h2>
        <p class="text-gray-500 mb-6">
          Vous n'avez pas encore effectué de réservation.
        </p>
        <button 
          @click="$emit('navigate', 'ReservationPage')" 
          class="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
          Réserver maintenant
        </button>
      </div>
    </div>
  </section>
  `,
};
