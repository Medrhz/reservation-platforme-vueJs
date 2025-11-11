export const AdminDashboard = {
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
