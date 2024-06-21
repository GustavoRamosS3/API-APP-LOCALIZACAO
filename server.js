const express = require('express');
const bodyParser = require('body-parser');
const locationRoutes = require('./routes/locationRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', locationRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
