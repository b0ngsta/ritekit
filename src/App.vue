<template>
  <div id="app">
  <ul class="nav justify-content-center">
  <li class="nav-item" @click="meto3">
    <router-link class="nav-link" to="/">Home</router-link>
  </li>
  <li class="nav-item"  @click="meto2">
    <router-link class="nav-link" to="queue">Queue</router-link>
  </li>
</ul>
    <router-view></router-view>

    <div class="container" v-show="unshow4">
      <div class="container" v-show="!unshow2">
      <input type="text" v-model="searchKey">
    <button class="btn btn-outline-success" @click="searchPosts">Search</button>
    </div>
    <div v-show="unshow2" class="alert alert-success" role="alert">
      Post added to queue!
    </div>
    <div class="container">
      <button @click="meto" class="btn btn-outline-info">Compose more</button>
    </div>
    </div>
    <ul v-show="unshow3">
      <li v-for="item in postList" :key="item.id">
          <HelloWorld3 style="position: fixed;" :post="postList.post"  />
      </li>
    </ul>
</div>
</template>

<script>
import HelloWorld3 from './components/HelloWorld3.vue'
// import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      unshow2: false,
      unshow3: true,
      unshow4: true,
      searchKey: '',
      postList: []
    }
  },
  components: {
    HelloWorld3
  },
  methods: {
    searchPosts(){
      var arr = [];
      // var url0 = 'https://api.ritekit.com/v1/emoji/suggestions?text='
      var url0 = 'https://api.ritekit.com/v1/stats/auto-hashtag?post='
      var res = this.searchKey.split(" ");
      for(var i=0; i<= res.length-1; i++){
      arr.push(res[i]);
      }
      for(var m=0; m< arr.length; m++){
        url0 += arr[m] + '%20';
      }
      var url= url0+'&client_id=192b3d49f217992dc0483e4d4f502af119f29eba6653';
      fetch(url)
      .then(res => res.json())
      .then(data => {
        this.postList = data;
        this.unshow2 = true;
        this.unshow3 = false;
        this.searchKey = '';
      })
    },
    meto() {
      this.unshow2 = false;
    },
    meto2() {
      this.unshow3 = true;
      this.unshow4 = false;
    },
    meto3() {
      this.unshow3 = false;
      this.unshow4 = true;
    }
  }
}
</script>

<style>
li{
  text-decoration: none;
  display: inline-block;
}
</style>