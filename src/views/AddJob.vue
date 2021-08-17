<template>
  <div class="add-job">
    <header>
      <h1>Add a new Job</h1>
    </header>
    <main>
      <div class="form-container">
        <form @submit.prevent="handleSubmit">
          <label>Company:</label>
          <input v-model="company" type="text" required />

          <label>Role:</label>
          <input v-model="role" type="text" required />

          <label>Date</label>
          <input v-model="date" type="date" required />

          <button>Add</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { projectFirestore, timestamp } from '../firebase/config';
export default {
  setup() {
    const company = ref('');
    const role = ref('');
    const date = ref('');
    const response = ref(false);

    const router = useRouter();

    const handleSubmit = async () => {
      const newJob = {
        company: company.value,
        role: role.value,
        date: date.value,
        response: response.value,
        createdAt: timestamp(),
      };

      const res = await projectFirestore.collection('posts').add(newJob);
      res;

      router.push('/');
    };

    return { company, role, date, response, handleSubmit };
  },
};
</script>

<style>
.add-job {
  width: 80%;
  background-color: #d9e2eb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  margin: 1rem auto;
  padding: 2rem;
}

main {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 4rem auto;
}

.form-container {
  width: 70%;
  height: 60%;
  max-height: 400px;
  max-width: 600px;
  background-color: whitesmoke;
  border-radius: 25px;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 800px) {
  .form-container {
    width: 90%;
    height: 70%;
  }
}
form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

input {
  width: 100%;
  height: 2rem;
  border-radius: 15px;
  border: none;
  margin: 10px;
  padding: 1rem;
  outline: none;
  padding-left: 1rem;
  font-size: 1rem;
}

label {
  font-size: 1.2rem;
  font-weight: 500;
  color: #5291cf;
}

button {
  width: 80%;
  height: 40px;
  margin: 2rem auto;
  background-color: #5291cf;
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
}
</style>
