<template>
  <div class="Job">
    <h1>This is an job page</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
      <RouterLink
        :to="{
          name: 'jobDetail',
          params: { id: job.id },
          query: { title: job.title, detail: job.detail },
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
      jobs: [
        { id: 1, title: "Project Manager", detail: "I'm a project manager." },
        { id: 2, title: "Designer", detail: "I'm a designer." },
        { id: 3, title: "Developer", detail: "I'm a developer." },
      ],
    };
  },
};
</script>

<style>
.job {
  color: #42b983;
}
</style>
