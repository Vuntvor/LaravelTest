<template>

    <div class="errors">
        <Error v-for="(error, i) in $store.state.errors"
               :key="i"
               :error="error"/>
    </div>
</template>

<script>
import Error from './Error'

export default {
    components: {Error},
    name: "Errors",
    data() {
        return {}
    }
}
</script>

<style>

</style>
