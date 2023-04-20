<script>
import { store } from '../store';

    export default {
        name: "AppSearch",
        emits:["filter"],
        data() {
            return{
                store
            }
        },
        
    }

</script>

<template>
    <div class="header-bar">

        <div class="content h-100 d-flex align-items-center justify-content-between">

            <div class="app-name fs-2 fw-semibold">
                Boolflix
            </div>
            <div>
                <input type="text" name="" id="" v-model="store.wordToSearch"  @keyup.enter="$emit(`filter`)">
                <button @click="$emit(`filter`)">Cerca</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/mixins" as *;
.header-bar{
    height: 80px;
    background-color: black;
    .content{
        @include container;
        
        .app-name{
            color: red;
            text-transform: uppercase;
        }
    }
    
}

</style>