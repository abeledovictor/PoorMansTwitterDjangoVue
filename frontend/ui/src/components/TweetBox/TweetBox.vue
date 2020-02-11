<template>
  <div class="tweet-box">
    <div role="tablist" class="tweet-box-tablist">
      <div
        role="presentation"
        class="tweet-box-tab-wrap"
        :class="getClass('createdAt')"
        v-on:click="() => onClick('createdAt')"
      >
        <div role="tab" class="tweet-box-tab">Sort by time</div>
      </div>
      <div
        role="presentation"
        class="tweet-box-tab-wrap"
        :class="getClass('userName')"
        v-on:click="() => onClick('userName')"
      >
        <div role="tab" class="tweet-box-tab">Sort by name</div>
      </div>
    </div>
    <ul class="tweet-list">
      <li v-for="item in items" :key="item.tweet_id" class="tweet-list-box">
        <div class="tweet-item-box">
          <span class="tweet-item-username">{{ item.userName }}</span>
          <span class="tweet-item-date">{{ item.createdAt.split('.')[0].replace(/T/g, " ") }}</span>
        </div>
        <div class="tweet-item-tweet">{{ item.tweet }}</div>
      </li>
</ul>
  </div>
</template>

<script src="./component.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"></style>
