<template>
  <div class="detail">
    <h1>This is an detail page {{ id }}</h1>
    <p>title - {{ title }}</p>
    <p>detail - {{ detail }}</p>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'detail'],
  // props: {
  //   title: String,
  //   detail: String,
  //   id: String,
  // },
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>
