const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const { router } = require('./routes/router'); 

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use('/api', router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});