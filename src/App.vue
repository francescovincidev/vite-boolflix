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
        params.api_key = this.store.apiKey;
        params.query = this.store.wordToSearch;
      }

      for (let i = 0; i < this.store.toSearch.length; i++) {

        axios.get(this.store.apiURL + this.store.toSearch[i].url, {
          params
        }).then(resp => {
          this.store.toSearch[i].list = resp.data.results;
        }).catch(error => {
          console.log(error);
        }).finally(() => {
          this.store.loading = false;
        })

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

<style scoped></style>
