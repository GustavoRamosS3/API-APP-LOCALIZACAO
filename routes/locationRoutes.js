// routes/locationRoutes.js
const express = require('express');
const bodyParser = require('body-parser');
const locationService = require('../services/locationService');

const router = express.Router();
router.use(bodyParser.json());

router.post('/location', (req, res) => {
    const { deviceId, latitude, longitude } = req.body;
    locationService.saveLocation(deviceId, latitude, longitude)
        .then(result => {
            res.status(201).send(result);
        })
        .catch(error => {
            console.error('Erro ao salvar localização:', error);
            res.status(500).send('Erro ao salvar localização');
        });
});

router.get('/locations', (req, res) => {
    locationService.getAllLocations()
        .then(locations => {
            res.send(locations);
        })
        .catch(error => {
            console.error('Erro ao obter localizações:', error);
            res.status(500).send('Erro ao obter localizações');
        });
});

module.exports = router;
