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
      store
    }
  },
  methods: {
    getShows() {
      this.store.loading = true;
      const params = {};
      if (this.store.wordToSearch) {
        params.query = this.store.wordToSearch;
      }
      axios.get(this.store.apiSearchFilm, {
        params
      }).then(resp => {
        this.store.films = resp.data.results;
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        this.store.loading = false;
      })
      
      axios.get(this.store.apiSearchTVShow, {
        params
      }).then(resp => {
        this.store.TvShows = resp.data.results;
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        this.store.loading = false;
        console.log(this.store.films, this.store.TvShows);
       })
    },
    filtrShow() {
      this.getShows();
    }
  }
}
</script>

<template>
  <AppSearch @filter="filtrShow" />
  <AppContent/>
</template>

<style scoped></style>
