<template>
  <div class="job-list">
    <div v-for="job in jobs" :key="job.id">
      <JobCard :job="job" />
    </div>
  </div>
</template>

<script>
import JobCard from '../components/JobCard.vue';
export default {
  components: { JobCard },
  props: ['jobs'],
};
</script>

<style>
.job-list {
  width: 100%;
  height: 100%;
}
</style>
