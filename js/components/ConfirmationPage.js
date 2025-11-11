export const ConfirmationPage = {
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
