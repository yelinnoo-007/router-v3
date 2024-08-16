<template>
  <div class="Job">
    <h1>This is an job page</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
      <RouterLink
        :to="{
          name: 'jobDetail',
          params: { id: job.id },
          // query: { title: job.title, detail: job.detail },
        }"
        >{{ job.title }}</RouterLink
      >
    </div>
  </div>
</template>

<script>
import JobDetailView from "./JobDetailView.vue";
export default {
  components: {
    JobDetailView,
  },
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.jobs = data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};
</script>

<style>
.job {
  color: #42b983;
}
</style>
