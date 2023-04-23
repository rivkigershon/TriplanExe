const mongoose = require('mongoose');

const placeInfoSchema = mongoose.Schema({
    shanghai:{
        type: String,
        require
    },
    country: String,
    alpha2code: String,
    alpha3code: String,
    viatorDestinationId: Number,
    viatorDestinationName: String
});

const locationPointSchema = mongoose.Schema({
    lat: {
        type: Number,
        require
    },
    lng: {
        type: Number,
        require
    }
});

const boundsInfoSchema = mongoose.Schema({
    northeast: {
        type: locationPointSchema,
        require
    },
    southwest: {
        type: locationPointSchema,
        require
    }
});

const boundingBoxInfoSchema = mongoose.Schema({
    northeast: {
        type: locationPointSchema,
        require
    },
    southeast: {
        type: locationPointSchema,
        require
    },
    southwest: {
        type: locationPointSchema,
        require
    },
    northwest: {
        type: locationPointSchema,
        require
    }
});

const citySchema = mongoose.Schema({
    place: {
        type: placeInfoSchema,
        require
    },
    bounds: {
        type: boundsInfoSchema,
        require
    },
    boundingBox: {
        type: boundingBoxInfoSchema,
        require
    }
});

module.exports = mongoose.model('City', citySchema);
