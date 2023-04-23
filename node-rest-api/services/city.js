const City = require('../models/city');

const getAllCities = async (req, res) => {
    try {
        let cities = await City.find();
        return res.json({ status: 200, cities: cities })
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getAllCities }


