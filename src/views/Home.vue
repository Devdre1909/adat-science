<template>
  <div class="home">
    <NavBar />
    <RegisterVue />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar";
import RegisterVue from "@/views/Register.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    RegisterVue
  }
};
</script>
