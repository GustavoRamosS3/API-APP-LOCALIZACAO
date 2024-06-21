// services/locationService.js
const db = require('../data/db');

function saveLocation(deviceId, latitude, longitude) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO locations (device_id, latitude, longitude) VALUES (?, ?, ?)';
        db.execute(query, [deviceId, latitude, longitude], (err, results) => {
            if (err) {
                reject(err);
                return;
            }
            resolve({ id: results.insertId, deviceId, latitude, longitude });
        });
    });
}

function getAllLocations() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM locations';
        db.query(query, (err, results) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(results);
        });
    });
}

module.exports = {
    saveLocation,
    getAllLocations
};
