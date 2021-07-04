const boardStructure = {
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
}

export default {
    boardStructure
}
