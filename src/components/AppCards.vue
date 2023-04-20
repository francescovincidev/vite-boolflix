<script>
import { store } from '../store';

export default {
    name: "AppCards",
    data() {
        return {
            store
        }
    },
    mounted() {

        console.log(this.show);
        console.log(this.show.list[0].title);
    },


    props: {
        show: Object,
        index: Number
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
    <div class="card">
        <div class="poster">
            <img :src="'https://image.tmdb.org/t/p/w185' + show.list[index].poster_path" alt="">
            <div class="show-info p-2">

                <div class="title">Titolo:
                    <span v-if="show.type == 'Film'">{{ show.list[index].title }}</span>
                    <span v-if="show.type == 'TV Show'">{{ show.list[index].name }}</span>
                </div>
                <div class="original-title">Titolo originale:
                    <span v-if="show.type == 'Film'">{{ show.list[index].original_title }}</span>
                    <span v-if="show.type == 'TV Show'">{{ show.list[index].original_name }}</span>
                </div>
                <div class="original-language">Lingua originale: {{ show.list[index].original_language }}
                    <span v-if="show.list[index].original_language == 'en'" class="fi fi-gb"></span>
                    <span v-if="show.list[index].original_language == 'ja'" class="fi fi-jp"></span>
                    <span :class="'fi fi-' + show.list[index].original_language"></span>
                </div>
                <div class="vote-average">
                    <div>
                        {{ starsFuncition(show.list[index].vote_average) }}
                        Voto:
                        <span v-for="num, index in fullStar" :key="index"><i class="fa-solid fa-star"></i></span>
                        <span v-for="num, index in emptyStar" :key="index"><i class="fa-regular fa-star"></i></span>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/mixins" as *;

.card {
    height: 260px;
    width: 175px;
    position: relative;
    flex-shrink: 0;

    img {
        height: 260px;
        width: 175px;
        object-fit: cover;
    }

    .show-info {
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        display: none;
    }

    .poster:hover {
        img {
            filter: brightness(40%);
        }
        .show-info {
            display: block;
            filter: none;
        }
    }



}</style>