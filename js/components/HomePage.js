export const HomePage = {
  template: `
  <section class="bg-white min-h-screen flex flex-col justify-center items-center px-6 py-10">
    <!-- Hero Section -->
    <div class="max-w-4xl text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        Prenez votre rendez-vous facilement
      </h1>
      <p class="text-gray-500 mb-6">
        Réservez vos consultations ou services en quelques clics avec RéserV.
      </p>
      <button 
        @click="$emit('navigate','ReservationPage')"
        class="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition">
        Commencer ma réservation
      </button>
    </div>

    <!-- Info Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
      <div class="flex items-start bg-teal-50 p-5 rounded-lg shadow-sm">
        <div class="flex-shrink-0 text-teal-600 text-3xl mr-4">💼</div>
        <div>
          <h3 class="font-semibold text-gray-800 mb-1">Nos services</h3>
          <p class="text-gray-500 text-sm">
            Consultation, Bilan, Suivi — choisissez le service adapté à vos besoins.
          </p>
        </div>
      </div>

      <div class="flex items-start bg-teal-50 p-5 rounded-lg shadow-sm">
        <div class="flex-shrink-0 text-teal-600 text-3xl mr-4">🕒</div>
        <div>
          <h3 class="font-semibold text-gray-800 mb-1">Horaires d’ouverture</h3>
          <p class="text-gray-500 text-sm">
            Lundi à Vendredi — de 9h00 à 18h00
          </p>
        </div>
      </div>
    </div>
  </section>
  `,
};
