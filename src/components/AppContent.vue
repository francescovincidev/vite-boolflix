<script>
import { store } from '../store';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "../../node_modules/flag-icons/css/flag-icons.min.css"

export default {
    name: "AppContent",
    data() {
        return {
            store
        }
    },

    props: {
        shows: Object
    }

}

</script>

<template>
    <div class="show-list">
        Films:
        <ul>
            <li v-for="film in store.films">
                <div>
                    Titolo: {{ film.title }}
                </div>
                <div>
                    Titolo originale: {{ film.original_title }}
                </div>
                <div>
                    Linugua originale: {{ film.original_language }}
                    <span v-if="film.original_language == 'en'" class="fi fi-gb"></span>
                    <span v-if="film.original_language == 'ja'" class="fi fi-jp"></span>

                    <span :class="'fi fi-'+film.original_language"></span>
                    

                </div>
                <div>
                    Voto: {{ film.vote_average }}
                </div>
            </li>
        </ul>

        TV SHow:
        <ul>
            <li v-for="tvShow in store.TvShows">
                <div>
                    Nome:{{ tvShow.name }}
                </div>
                <div>
                    Nome originale:{{ tvShow.original_name }}
                </div>
                <div>
                    Lingua originale: {{ tvShow.original_language }}
                    <span v-if="tvShow.original_language == 'en'" class="fi fi-gb"></span>
                    <span v-if="tvShow.original_language == 'ja'" class="fi fi-jp"></span>

                    <span :class="'fi fi-'+tvShow.original_language"></span>
                </div>
                <div>
                    Voto: {{ tvShow.vote_average }}
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
li {
    padding: 10px;
}
.show-list{
    display: flex;

}
</style>