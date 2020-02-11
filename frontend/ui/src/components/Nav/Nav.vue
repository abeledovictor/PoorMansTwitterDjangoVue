<template>
  <div class="nav-box">
    <TwitterSvg class="nav-box-svg" />
    <Input
      :value="user"
      :onChange="setUser"
      class="nav-box-input"
      placeholder="Username"
    />
    <Input
      :value="tweet"
      :onChange="setTweet"
      class="nav-box-input"
      placeholder="Write your tweet..."
    />
    <Button
      type="button"
      class="nav-box-button"
      :disabled="!user.trim() || !tweet.trim()"
      :onClick="() => {
        onSubmit({ userName: user, tweet: tweet });
        this.user = '';
        this.tweet = '';
        }"
      />
  </div>
</template>

<script src="./component.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"></style>
