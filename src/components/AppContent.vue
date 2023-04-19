<script>
import { store } from '../store';


export default {
    name: "AppContent",
    data() {
        return {
            store,
            valutazione: "",
            numberStar: store.films.vote_average

        }
    },

    props: {
        shows: Object
    },

    methods: {
        starsFuncition(vote) {
            let starVote = Math.ceil(vote / 2);
            let star = '';
            for (let i = 0; i < starVote; i++) {
                star += '<i class="fa-solid fa-star"></i>';
            }
            return star;
        }


    },


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

                    <span :class="'fi fi-' + film.original_language"></span>


                </div>
                <div>
                    Voto: {{ film.vote_average }}
                    {{ valutazione }}
                  <span>{{starsFuncition(film.vote_average)}}</span>  


                </div>
                <div>
                    <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" alt="">
                </div>
            </li>
        </ul>

        TV Show:
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

                    <span :class="'fi fi-' + tvShow.original_language"></span>
                </div>
                <div>
                    Voto: {{ tvShow.vote_average }}
                </div>
                <div>
                    <img :src="'https://image.tmdb.org/t/p/w342' + tvShow.poster_path" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
li {
    padding: 10px;
}

.show-list {
    display: flex;

}
</style>