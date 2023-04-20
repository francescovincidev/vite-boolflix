<script>
import { store } from '../store';


export default {
    name: "AppContent",
    data() {
        return {
            store,
            fullStar: 0,
            emptyStar: 0
        }
    },

    props: {
        shows: Object
    },

    methods: {
        starsFuncition(vote) {
            this.fullStar = Math.ceil(vote / 2);
            this.emptyStar = 5 - this.fullStar
        }
    },
}

</script>

<template>
    <div class="show-list">
        <div v-for="category in store.toSearch">
            {{ category.type }}
            <ul>
                <li v-for="show in category.list" :key="show.id">
                    <div>
                        Titolo:
                        <span v-if="category.type == 'Film'">{{ show.title }}</span>
                        <span v-if="category.type == 'TV Show'">{{ show.name }}</span>
                    </div>

                    <div>
                        Titolo originale:
                        <span v-if="category.type == 'Film'">{{ show.original_title }}</span>
                        <span v-if="category.type == 'TV Show'">{{ show.original_name }}</span>
                    </div>
                    <div>
                        {{ starsFuncition(show.vote_average) }}
                        Voto:
                        <span v-for="num, index in fullStar" :key="index"><i class="fa-solid fa-star"></i></span>
                        <span v-for="num, index in emptyStar" :key="index"><i class="fa-regular fa-star"></i></span>

                    </div>
                    <div>
                        <img :src="'https://image.tmdb.org/t/p/w342' + show.poster_path" alt="">
                    </div>
                </li>

            </ul>
        </div>

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