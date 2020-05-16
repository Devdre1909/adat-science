<template>
  <div>
    <NavBar />
    <b-container>
      <h2 style="margin-top: 3rem">Your email has been confirmed</h2>
      <p>
        Buy the book "<strong
          >The Puzzle - The Personification of Alkebulan</strong
        >" to proceed
      </p>
      <b-button variant="success">Buy the book</b-button>
    </b-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>

<style></style>
