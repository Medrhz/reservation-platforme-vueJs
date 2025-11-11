// export const LoginPage = {
//   emits: ["login-success", "navigate"],
//   data() {
//     return {
//       username: "",
//       password: "",
//       error: "",
//     };
//   },
//   methods: {
//     login() {
//       if (this.username === "admin" && this.password === "1234") {
//         localStorage.setItem("isAdmin", "true");
//         this.$emit("login-success");
//         this.$emit("navigate", "AdminDashboard");
//       } else {
//         this.error = "Identifiants invalides ❌";
//       }
//     },
//   },
//   template: `
//     <section class="bg-white p-8 rounded shadow max-w-sm mx-auto mt-12 text-center">
//       <h2 class="text-2xl font-semibold mb-4">🔐 Connexion Admin</h2>
//       <input v-model="username" type="text" placeholder="Nom d'utilisateur" class="border rounded p-2 w-full mb-3" />
//       <input v-model="password" type="password" placeholder="Mot de passe" class="border rounded p-2 w-full mb-3" />
//       <button @click="login" class="bg-indigo-600 text-white px-4 py-2 rounded w-full">Se connecter</button>
//       <p v-if="error" class="text-red-500 mt-3">{{ error }}</p>
//     </section>
//   `,
// };

export const LoginPage = {
  emits: ["login-success", "navigate"],
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      if (this.username === "admin" && this.password === "1234") {
        localStorage.setItem("isAdmin", "true");
        this.$emit("login-success");
        this.$emit("navigate", "AdminDashboard");
      } else {
        this.error = "Identifiants invalides ❌";
      }
    },
  },
  template: `
  <section class="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4">
    <div class="bg-white shadow-xl border border-gray-100 rounded-2xl p-8 w-full max-w-md text-center">
      
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">
        🔐 Connexion administrateur
      </h2>

      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block text-left text-sm text-gray-600 mb-1">Nom d'utilisateur</label>
          <input 
            v-model="username"
            type="text"
            placeholder="admin"
            class="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-teal-500 outline-none"
          />
        </div>

        <div>
          <label class="block text-left text-sm text-gray-600 mb-1">Mot de passe</label>
          <input 
            v-model="password"
            type="password"
            placeholder="••••••"
            class="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-teal-500 outline-none"
          />
        </div>

        <button 
          type="submit"
          class="bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg px-4 py-2 w-full transition">
          Se connecter
        </button>
      </form>

      <p v-if="error" class="text-red-500 mt-4 text-sm font-medium">
        {{ error }}
      </p>

      <p class="text-gray-500 text-sm mt-6">
        © 2025 RéserV — Accès réservé à l'administrateur
      </p>
    </div>
  </section>
  `,
};
