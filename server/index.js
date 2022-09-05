const connectToMongo = require('./db')
const express = require('express')


connectToMongo();
const app = express();
const port = 5000;
app.use(express.json())

app.use('/api/task',require('./routes/task'))

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
})