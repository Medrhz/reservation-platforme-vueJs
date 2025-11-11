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
      console.log("📅 Réservation confirmée :", this.form);
      const clean = { ...this.form };
      this.$emit("booked", clean);
      alert("✅ Réservation envoyée avec succès !");
      this.form = { name: "", email: "", service: "", date: "", time: "" };
    },
  },
  template: `
  <section class="bg-white py-12 min-h-screen flex justify-center items-start font-sans">
    <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md border border-gray-100">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Réservez votre rendez-vous
      </h2>
      
      <form @submit.prevent="submitForm" class="space-y-5">
        
        <!-- Nom -->
        <div>
          <label class="block text-sm font-medium text-gray-600 mb-1">Nom complet</label>
          <input v-model="form.name" 
                 type="text" 
                 class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:outline-none" 
                 placeholder="Votre nom complet" required>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-600 mb-1">Adresse email</label>
          <input v-model="form.email" 
                 type="email" 
                 class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:outline-none" 
                 placeholder="exemple@mail.com" required>
        </div>

        <!-- Service -->
        <div>
          <label class="block text-sm font-medium text-gray-600 mb-1">Type de service</label>
          <select v-model="form.service" 
                  class="w-full border border-gray-300 rounded-lg p-2.5 bg-white focus:ring-2 focus:ring-primary focus:outline-none" 
                  required>
            <option disabled value="">-- Sélectionner un service --</option>
            <option v-for="s in services" :key="s">{{ s }}</option>
          </select>
        </div>

        <!-- Date & Heure -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Date</label>
            <input v-model="form.date" 
                   type="date" 
                   class="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-primary focus:outline-none" 
                   required>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Heure</label>
            <select v-model="form.time" 
                    class="w-full border border-gray-300 rounded-lg p-2.5 bg-white focus:ring-2 focus:ring-primary focus:outline-none" 
                    required>
              <option disabled value="">-- Choisir une heure --</option>
              <option v-for="t in times" :key="t">{{ t }}</option>
            </select>
          </div>
        </div>

        <!-- Submit -->
        <button type="submit" 
                class="w-full mt-4 bg-primary hover:bg-accent text-white py-2.5 rounded-lg font-medium transition-all shadow-md">
          Confirmer la réservation
        </button>

      </form>
    </div>
  </section>
  `,
};
