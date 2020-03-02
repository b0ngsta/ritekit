<template>
  <div id="app">
  <ul class="nav justify-content-center nav-pills" style="margin-top: 20px;">
    <router-link class="nav-item nav-link" to="/" tag="li" active-class="active" exact><a @click="meto3" class="new" >Home</a></router-link>
    <router-link class="nav-item nav-link" to="/queue" tag="li" active-class="active" ><a @click="meto2" class="new">Queue</a></router-link>
</ul>
    <router-view></router-view>

    <div class="container" v-show="unshow4">
      <div class="container" v-show="!unshow2">
      <input type="text" v-model="searchKey" style="width: 60%; padding: 35px;" v-show="unshow6">
      <button class="btn btn-outline-success" style="margin-left: 10px; padding: 20px; margin-top: 10px;" v-show="unshow6" @click="searchPosts">Add to Queue</button>
    </div>
    <div v-show="unshow2" class="alert alert-success text-center" role="alert">
      Post added to queue!
    </div>
    <div v-show="unshow5" class="alert alert-success text-center" style="margin-top: 10px;" role="alert">
      Don't leave it empty,You are better than that!!
    </div>
    <div class="container" style="margin-top: 10px;" v-show="unshow7">
      <button @click="meto" class="btn btn-outline-info" style="margin-left: 45%; padding: 20px;">Compose</button>
    </div>
    </div>
    <ul v-show="unshow3">
      <li v-for="item in postList" :key="item.id">
          <HelloWorld3 style="position: fixed;" :post="postList.post"  />
      </li>
    </ul>
    <div style="margin-top: 18vw;" class="alert alert-success container text-center" v-show="unshow8" role="alert">
      <h2>Made by Nitesh</h2>   
    </div>
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
      unshow5: false,
      unshow6: true,
      unshow8: true,
      unshow7: false,
      searchKey: '',
      postList: []
    }
  },
  components: {
    HelloWorld3
  },
  methods: {
    searchPosts(){
      if(this.searchKey== ''){
        this.unshow5 = true;
        this.unshow7 = true;
      this.unshow6 = false;

      }
      else{
      this.unshow3 = false;
        this.unshow7 = true;

      this.unshow2 = true;
      }
    },
    meto() {
      this.unshow6 = true;
      this.unshow2 = false;
        this.unshow7 = false;

      this.unshow5 = false;
        this.searchKey = '';

    },
    meto2() {
      this.unshow3 = true;
      this.unshow4 = false;
      this.unshow8 = false;
       var arr = [];
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
      })
    },
    meto3() {
      this.unshow3 = false;
      this.unshow4 = true;
      this.unshow8 = true;

    }
  }
}
</script>

<style>
li{
  text-decoration: none;
  display: inline-block;
}
.new{
  text-decoration: none;
  color: black;
  font-size: 1rem;
}
</style>