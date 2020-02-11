<template>
  <button
    class="twitter-button"
    :type="type"
    @click="onClick"
    :disabled="disabled"
  >
    Tweet
  </button>
</template>

<script src="./component.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"></style>