export const FooterBar = {
  template: `
  <footer class="bg-white border-t border-gray-200 mt-16 shadow-sm">
    <div class="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
      
      <!-- Logo & Nom du site -->
      <div class="mb-3 sm:mb-0">
        <h1 class="text-xl font-semibold text-teal-600">RéserV</h1>
        <p class="text-gray-500 text-sm">Votre plateforme de réservation simple et rapide</p>
      </div>

      <!-- Liens rapides -->
      <div class="flex gap-4 text-sm text-gray-600">
        <button @click="$emit('navigate', 'HomePage')" class="hover:text-teal-600 transition">Accueil</button>
        <button @click="$emit('navigate', 'ReservationPage')" class="hover:text-teal-600 transition">Réserver</button>
        <button @click="$emit('navigate', 'LoginPage')" class="hover:text-teal-600 transition">Admin</button>
      </div>
    </div>

    <!-- Ligne de copyright -->
    <div class="bg-teal-600 text-white text-sm py-3 text-center mt-4">
      © 2025 <span class="font-semibold">RéserV</span> — Tous droits réservés.
    </div>
  </footer>
  `,
};
