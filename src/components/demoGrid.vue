<template>
  <div class="hello">
    <div>
        
        
            <h1>{{ msg }}</h1>

       
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
          heroes: Array,
          columns: Array,
          filterKey: String
        },
        data: function() {
          var sortOrders = {};
          this.columns.forEach(function(key) {
            sortOrders[key] = 1;
          });
          return {
            sortKey: "",
            sortOrders: sortOrders
          };
        },
        computed: {
          filteredHeroes: function() {
            var sortKey = this.sortKey;
            var filterKey = this.filterKey && this.filterKey.toLowerCase();
            var order = this.sortOrders[sortKey] || 1;
            var heroes = this.heroes;
            if (filterKey) {
              heroes = heroes.filter(function(row) {
                return Object.keys(row).some(function(key) {
                  return (
                    String(row[key])
                      .toLowerCase()
                      .indexOf(filterKey) > -1
                  );
                });
              });
            }
            if (sortKey) {
              heroes = heroes.slice().sort(function(a, b) {
                a = a[sortKey];
                b = b[sortKey];
                return (a === b ? 0 : a > b ? 1 : -1) * order;
              });
            }
            return heroes;
          }
        },
        filters: {
          capitalize: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
          }
        },
        methods: {
          sortBy: function(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
          }
        }
      }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
    color: aqua;
}
.comni{
    height: 60vh;
    background: rgb(204, 144, 144);
    width: 100vw;
}
.omni{
    height: 100vh;
    background: rgb(134, 238, 178);
    width: 100vw;
}
</style>
