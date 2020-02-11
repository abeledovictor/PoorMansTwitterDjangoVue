import TwitterSvg from '../TwitterSvg/TwitterSvg';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default {
  name: 'Nav',
  components: { TwitterSvg, Input, Button },
  props: { onSubmit: Function },
  data: function() {
    return {user: '', tweet: ''}
  },
  methods: {
    setUser(v) {
      this.user = v.target.value;
    },
    setTweet(v) {
      this.tweet = v.target.value;
    },
  }
}