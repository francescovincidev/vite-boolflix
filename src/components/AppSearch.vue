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
    <input type="text" name="" id="" v-model="store.wordToSearch">
    <button @click="$emit(`filter`)">Cerca</button>
</template>