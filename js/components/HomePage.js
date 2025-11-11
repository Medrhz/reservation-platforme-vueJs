export const HomePage = {
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
