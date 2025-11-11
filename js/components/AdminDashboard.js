// export const AdminDashboard = {
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
//       console.log("remove ");
//       const updated = this.reservations.filter((x) => x.id !== r.id);
//       this.$emit("update-reservations", updated);
//     },
//   },
// };
export const AdminDashboard = {
  props: ["reservations"],
  emits: ["update-reservations", "navigate"],
  template: `
  <section class="bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto mt-10">
    <h2 class="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
      📋 Tableau de bord des réservations
    </h2>

    <div v-if="reservations.length" class="overflow-x-auto">
      <table class="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead class="bg-secondary text-gray-700 uppercase text-sm font-semibold">
          <tr>
            <th class="p-3 text-left">Nom</th>
            <th class="p-3 text-left">Service</th>
            <th class="p-3 text-left">Date</th>
            <th class="p-3 text-left">Heure</th>
            <th class="p-3 text-left">Statut</th>
            <th class="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in reservations" :key="r.id" class="border-t hover:bg-gray-50 transition">
            <td class="p-3">{{ r.name }}</td>
            <td class="p-3">{{ r.service }}</td>
            <td class="p-3">{{ r.date }}</td>
            <td class="p-3">{{ r.time }}</td>
            <td class="p-3">
              <span :class="r.status === 'confirmée' ? 'text-green-600 font-medium' : 'text-yellow-600 font-medium'">
                {{ r.status }}
              </span>
            </td>
            <td class="p-3 flex gap-2">
              <button 
                @click="confirmer(r)" 
                class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 disabled:opacity-40"
                :disabled="r.status === 'confirmée'">
                Confirmer
              </button>
              <button 
                @click="supprimer(r)" 
                class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="text-center py-10 text-gray-500">
      <p>Aucune réservation trouvée.</p>
    </div>

    <div class="mt-6 flex justify-between items-center">
      <button @click="$emit('navigate','HomePage')" 
              class="border px-4 py-2 rounded-lg hover:bg-gray-50 transition">
        ⬅ Retour à l'accueil
      </button>
      <button @click="viderTout" 
              class="text-red-600 font-medium hover:underline">
        Supprimer tout
      </button>
    </div>
  </section>
  `,
  methods: {
    confirmer(r) {
      r.status = "confirmée";
      this.$emit("update-reservations", this.reservations);
    },
    supprimer(r) {
      const updated = this.reservations.filter((x) => x.id !== r.id);
      this.$emit("update-reservations", updated);
    },
    viderTout() {
      if (confirm("Voulez-vous vraiment supprimer toutes les réservations ?")) {
        this.$emit("update-reservations", []);
      }
    },
  },
};
