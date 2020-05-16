<template>
  <b-navbar
    class="b-navbar"
    toggleable="lg"
    type="light"
    variant="light"
    sticky
  >
    <b-navbar-brand href="#">ASACube</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.b-navbar {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}
</style>
