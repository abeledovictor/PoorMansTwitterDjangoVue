import Nav from '../Nav/Nav';
import TweetBox from '../TweetBox/TweetBox';

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Nav,
    TweetBox,
  },
  data: function() {
    return { results: [], sort: 'createdAt' }
  },
  mounted () {
    this.getData();
  },
  methods: {
    changeTab(sortBy) {
      this.sort = sortBy;
    },
    setData({ userName, tweet }) {
      fetch('http://localhost:8000/api/tweets/',
        {
          method: 'POST',
          body: JSON.stringify({ userName, tweet }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      .then(function() {
        this.getData();
      }.bind(this));
    },
    getData() {
      fetch(`http://localhost:8000/api/tweets?sort=${this.sort}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        this.results = myJson;
      }.bind(this));
    }
  },
  watch: {
    sort: function () {
      this.getData();
    },
  }
}