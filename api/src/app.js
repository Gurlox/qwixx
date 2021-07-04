const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081)

app.get('/', (req, res) => {
    res.send({
        hi: 'elo'
    })
})

app.get('/board', (req, res) => {
    res.send({
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
        }
    })
})
