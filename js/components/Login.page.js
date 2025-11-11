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
    <section class="bg-white p-8 rounded shadow max-w-sm mx-auto mt-12 text-center">
      <h2 class="text-2xl font-semibold mb-4">🔐 Connexion Admin</h2>
      <input v-model="username" type="text" placeholder="Nom d'utilisateur" class="border rounded p-2 w-full mb-3" />
      <input v-model="password" type="password" placeholder="Mot de passe" class="border rounded p-2 w-full mb-3" />
      <button @click="login" class="bg-indigo-600 text-white px-4 py-2 rounded w-full">Se connecter</button>
      <p v-if="error" class="text-red-500 mt-3">{{ error }}</p>
    </section>
  `,
};
