export const Navbar = {
  props: ["isAdminLoggedIn"],
  template: `
  <nav class="bg-primary text-white py-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center px-6">
      <h1 class="text-xl font-semibold tracking-wide">RDV App</h1>
      <div class="flex items-center gap-4">
        <button @click="$emit('navigate', 'HomePage')" class="hover:underline">Accueil</button>
        <button @click="$emit('navigate', 'ReservationPage')" class="hover:underline">Réserver</button>
        <template v-if="!isAdminLoggedIn">
          <button @click="$emit('navigate', 'LoginPage')" class="hover:underline">Admin</button>
        </template>
        <template v-else>
          <button @click="$emit('navigate', 'AdminDashboard')" class="hover:underline">Dashboard</button>
          <button @click="$emit('logout')" class="text-red-200 hover:text-white font-semibold">Logout</button>
        </template>
      </div>
    </div>
  </nav>
  `,
};
