<template>
  <div>
    <Nav :onSubmit="setData" />
    <div class="home">
      <TweetBox :items="results" :onClick="changeTab" :active="sort"/>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"></style>
