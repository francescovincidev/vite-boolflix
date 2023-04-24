<script>
import { store } from '../store';

export default {
    name: "AppCards",
    data() {
        return {
            store
        }
    },
    props: {
        show: Object,
        index: Number
    },
    methods: {

    },
    computed: {
        starsFuncition() {
            return Math.ceil(this.show.list[this.index].vote_average / 2);
        }

    }


}

</script>

<template>
    <div class="card">
        <div class="poster">
            <img v-if="show.list[index].poster_path === null"
                src="https://static8.depositphotos.com/1009634/988/v/450/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
                alt="">
            <img v-else :src="'https://image.tmdb.org/t/p/w185' + show.list[index].poster_path" alt="">
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
                        Voto:
                        <span v-for="num, index in  starsFuncition" :key="index"><i class="fa-solid fa-star"></i></span>
                        <span v-for="num, index in 5 - starsFuncition" :key="index"><i class="fa-regular fa-star"></i></span>

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
    background-color: black;

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
        overflow: auto;
        height: 100%;

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