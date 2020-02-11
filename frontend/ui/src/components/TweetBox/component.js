export default {
  name: 'TweetBox',
  props: {
    items: Array,
    onClick: Function,
    active: String,
  },
  methods: {
    getClass(tab) {
      if(tab === this.active) {
        return 'tweet-box-tab-wrap--active';
      } else {
        return '';
      }
    }
  },
}