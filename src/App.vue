<script>
import AppSearch from './components/AppSearch.vue';
import AppContent from './components/AppContent.vue';


import "/node_modules/flag-icons/css/flag-icons.min.css";
import { store } from './store';
import axios from "axios";
import "/node_modules/@fortawesome/fontawesome-free/css/all.css";

export default {
  components: {
    AppSearch,
    AppContent
  },
  data() {
    return {
      store,
      nameGenres: [],
    }
  },
  mounted() {
    for (let i = 0; i < this.store.genreList.url.length; i++) {

      axios.get(this.store.apiURL + this.store.genreList.url[i], {
        params: {
          api_key: this.store.apiKey
        }
      }).then(resp => {

        for (let y = 0; y < resp.data.genres.length; y++) {
          if (!this.nameGenres.includes(resp.data.genres[y].id)) {
            this.nameGenres.push(resp.data.genres[y].id)
            this.store.genreList.list.push(resp.data.genres[y])

          }
        }
      }).catch(error => {
        console.log(error);
      }).finally(() => {
      })


    }
  },
  methods: {
    getShows() {

      const params = {};
      if (this.store.wordToSearch) {
        this.store.loading = true;
        params.api_key = this.store.apiKey;
        params.query = this.store.wordToSearch;
      

      for (let i = 0; i < this.store.toSearch.length; i++) {
        this.store.toSearch[i].list =[];
        axios.get(this.store.apiURL + this.store.toSearch[i].url, {
          params
        }).then(resp => {

          // ciclo per cercare con genere
          for (let y = 0; y < resp.data.results.length; y++) {

            if (this.store.genreList.genreSelecterd && resp.data.results[y].genre_ids.includes(this.store.genreList.genreSelecterd)) {
              this.store.toSearch[i].list.push(resp.data.results[y]);

            } else if (this.store.genreList.genreSelecterd == 0) {
              this.store.toSearch[i].list = resp.data.results;

            }
          }
        }).catch(error => {
          console.log(error);
        }).finally(() => {
          this.store.loading = false;
        })

      }
    }
    },
    filtrShow() {
      this.getShows();
    }
  }
}
</script>

<template>
  <AppSearch @filter="filtrShow" />
  <AppContent />
</template>

<style scoped lang="scss">
@use "./style/general.scss";
</style>
