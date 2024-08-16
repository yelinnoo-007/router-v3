<template>
  <div v-if="job" class="detail">
    <h1>This is an detail page {{ id }}</h1>
    <p>title - {{ job.title }}</p>
    <p>detail - {{ job.detail }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.job = data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};
</script>
