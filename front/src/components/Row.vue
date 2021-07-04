<template>
  <div
    class="row"
    :class="'row-' + color"
  >
    <Cell
      v-for="(number, key) in cells"
      :key="key"
      :color="color"
      :number="number"
    />
    <Cell
      :color="color"
      :is-lock="true"
    />
  </div>
</template>

<script>
    import Cell from "./Cell";

    export default {
        name: 'Row',
        components: {
            Cell,
        },
        props: {
            color: {
                type: String,
                required: true,
            },
            cells: {
                type: Array,
                required: true,
            },
        },
    }
</script>
