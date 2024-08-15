<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
    <RouterLink :to="{ name: 'about' }">About</RouterLink> |
    <RouterLink :to="{ name: 'job' }">Jobs</RouterLink>
  </nav>
  <RouterView />
  <div>
    <button @click="redirect">Redirect</button>
    <button @click="forward">Go Forward</button>
    <button @click="backward">Go Backward</button>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "home" });
    },
    forward() {
      this.$router.go(+1);
    },
    backward() {
      this.$router.go(-1);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
  background-color: crimson;
  padding: 5px;
  border-radius: 3px;
}
</style>
