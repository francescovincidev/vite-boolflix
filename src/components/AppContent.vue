<script>
import AppCards from './AppCards.vue';
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
    components: {
        AppCards
    },

}

</script>

<template>
    <div class="show-list">
        <div v-for="category in store.toSearch" class="my-4">

            {{ category.type }}

            <div class="card-list">
                <AppCards v-for="card, index in category.list" :show="category" :index="index" class="m-4" />
            </div>
        </div>

    </div>
</template>

<style  scoped lang="scss">
.show-list {

    .card-list {
        display: flex;
        overflow: auto;
    }


}
</style>