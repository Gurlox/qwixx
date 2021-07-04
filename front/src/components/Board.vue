<template>
  <div class="board">
    <Row
      v-for="(row, key) in boardStructure.rows"
      :key="key"
      :color="row.color"
      :cells="row.numeration"
    />
  </div>
</template>

<script>
    import Row from "./Row";

    export default {
        name: 'Board',
        components: {
            Row
        },
        data: function() {
            return {
                boardStructure: {
                    rows: [
                        {
                            color: this.RED,
                            numeration: this.$_.range(2, 12),
                        },
                        {
                            color: this.YELLOW,
                            numeration: this.$_.range(2, 12),
                        },
                        {
                            color: this.GREEN,
                            numeration: this.$_.range(12, 2),
                        },
                        {
                            color: this.BLUE,
                            numeration: this.$_.range(12, 2),
                        },
                    ]
                },
            }
        },
    }
</script>
