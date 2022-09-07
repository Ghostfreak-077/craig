const connectToMongo = require('./db')
const cors = require('cors')
const express = require('express')


connectToMongo();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

app.use('/api/task',require('./routes/task'))
app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
})