export const Navbar = {
  props: ["isAdminLoggedIn"],
  template: `
    <nav class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-indigo-600">RéserV</h1>
        <div class="space-x-4">
          <button @click="$emit('navigate', 'HomePage')" class="hover:text-indigo-600">Accueil</button>
          <button @click="$emit('navigate', 'ReservationPage')" class="hover:text-indigo-600">Réserver</button>
          <template v-if="!isAdminLoggedIn">
            <button @click="$emit('navigate', 'LoginPage')" class="hover:text-indigo-600">Admin</button>
          </template>
          <template v-else>
            <button @click="$emit('navigate', 'AdminDashboard')" class="hover:text-indigo-600">Dashboard</button>
            <button @click="$emit('logout')" class="text-red-500 hover:text-red-700">Logout</button>
          </template>
        </div>
      </div>
    </nav>
  `,
};
