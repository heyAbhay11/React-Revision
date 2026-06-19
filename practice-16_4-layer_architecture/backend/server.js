import express from 'express';
import cors from 'cors';
const app = express();


app.use(cors())
app.use(express.json())

app.get('/api/user', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'jayprakash',
        },
        {
            id: 2,
            name: 'rakesh',
        }, {
            id: 3,
            name: 'hitesh',
        }, {
            id: 4,
            name: 'rishika',
        }
    ])
})



app.listen(3000, () => {
    console.log('server is running on port 3000')
})