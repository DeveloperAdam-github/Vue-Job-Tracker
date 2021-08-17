<template>
  <div class="home">
    <div class="header">
      <h1>Job Tracker</h1>

      <div class="input-container">
        <span class="material-icons">search</span>
        <input type="text" />
      </div>
      <Filter @filterChange="current = $event" :current="current" />
    </div>
    <div v-if="error">{{ error }}</div>
    <main v-if="jobs.length">
      <JobList :jobs="jobs" />
    </main>
  </div>
</template>

<script>
import getJobs from '../composables/getJobs';
// import JobCard from '../components/JobCard.vue';
import JobList from '../components/JobList.vue';
import Filter from '../components/Filter.vue';

export default {
  name: 'Home',
  components: { Filter, JobList },

  setup() {
    const current = 'all';

    const { jobs, error, getData } = getJobs();

    getData();

    // const FilterJobs = () => {
    //   if (current === 'responded') {
    //     return jobs.filter((job) => job.response === true);
    //   }
    //   if (current === 'noResponse') {
    //     return jobs.filter((job) => job.response === false);
    //   }
    //   return jobs;
    // };

    return { jobs, error, current };
  },
};
</script>

<style scoped>
.home {
  width: 80%;
  background-color: #d9e2eb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}

/* @media screen and (max-width: 800px) {
  .home {
    width: 80%;
  }
} */

.header {
  /* height: 6rem; */
  width: 100%;
  margin: 30px auto;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 800px) {
  .header {
    margin: 10px auto;
    height: 120px;
  }
}

.input-container {
  height: 2rem;
  margin: 2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  width: 70%;
  background-color: whitesmoke;
  border-radius: 25px;
}

.checkboxContainer {
  width: 80%;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 800px) {
  .checkboxContainer label {
    font-size: 0.7rem;
  }

  .checkboxContainer input {
    height: 20px;
  }
}

.checkboxContainer label {
  width: 50%;
}

.checkboxContainer input {
  padding: 0;
}

form {
  display: flex;
  align-items: center;
  width: 80%;
  background-color: whitesmoke;
  border-radius: 25px;
}

input {
  width: 90%;
  height: 2rem;
  outline: none;
  border: none;
  background-color: whitesmoke;
  padding-left: 0.3rem;
  color: #777;
}

main {
  /* overflow: scroll; */
  margin-bottom: 14px;
}
</style>
