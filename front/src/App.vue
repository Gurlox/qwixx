<template>
  <Board />
</template>

<script>
    import Board from './components/Board.vue'

    export default {
        name: 'App',
            components: {
                Board
            }
        }
</script>

<style lang="scss">
    @import "./scss/main.scss";
</style>
