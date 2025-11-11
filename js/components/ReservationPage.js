export const ReservationPage = {
  emits: ["booked"],
  data() {
    return {
      form: { name: "", email: "", service: "", date: "", time: "" },
      services: ["Consultation", "Bilan", "Suivi", "Coiffure"],
      times: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
    };
  },
  methods: {
    submitForm() {
      console.log("Réservation confirmée ✅:", this.form);
      const clean = JSON.parse(JSON.stringify(this.form)); // pure object
      this.$emit("booked", clean); // send to parent
    },
  },
  template: `
    <section class="bg-white p-8 rounded shadow max-w-2xl mx-auto mt-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Réserver un rendez-vous</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="form.name" type="text" placeholder="Nom complet" class="border rounded p-2 w-full" required />
        <input v-model="form.email" type="email" placeholder="Email" class="border rounded p-2 w-full" required />
        <select v-model="form.service" class="border rounded p-2 w-full" required>
          <option disabled value="">-- Choisir un service --</option>
          <option v-for="s in services" :key="s">{{ s }}</option>
        </select>
        <div class="grid grid-cols-2 gap-4">
          <input v-model="form.date" type="date" class="border rounded p-2 w-full" required />
          <select v-model="form.time" class="border rounded p-2 w-full" required>
            <option disabled value="">-- Choisir une heure --</option>
            <option v-for="t in times" :key="t">{{ t }}</option>
          </select>
        </div>
        <button class="bg-indigo-600 text-white px-4 py-2 rounded" type="submit">Confirmer</button>
      </form>
    </section>
  `,
};
