export const HomePage = {
  template: `
  <section class="bg-white min-h-screen flex flex-col justify-center items-center px-6 py-12 font-sans">
    
    <!-- HERO -->
    <div class="max-w-3xl text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Prenez votre rendez-vous facilement
      </h1>
      <p class="text-gray-500 mb-6 text-lg">
        Réservez vos consultations ou services en quelques clics avec RéserV.
      </p>
      <button
        @click="$emit('navigate','ReservationPage')"
        class="bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg shadow-md transition-all">
        Commencer ma réservation
      </button>
    </div>

    <!-- INFOS -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <div class="flex items-start bg-secondary p-6 rounded-lg shadow-sm">
        <div class="flex-shrink-0 text-primary text-3xl mr-4">💼</div>
        <div>
          <h3 class="font-semibold text-gray-800 mb-1">Nos services</h3>
          <p class="text-gray-600 text-sm">
            Consultation, bilan et suivi — choisissez le service adapté à vos besoins.
          </p>
        </div>
      </div>

      <div class="flex items-start bg-secondary p-6 rounded-lg shadow-sm">
        <div class="flex-shrink-0 text-primary text-3xl mr-4">🕒</div>
        <div>
          <h3 class="font-semibold text-gray-800 mb-1">Horaires d’ouverture</h3>
          <p class="text-gray-600 text-sm">
            Du lundi au vendredi — de 9h00 à 18h00
          </p>
        </div>
      </div>
    </div>
  </section>
  `,
};
