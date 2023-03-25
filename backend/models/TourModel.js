const mongoose = require( 'mongoose' )

const tournamentSchema = new mongoose.Schema( {
    gamename: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    prize: {
        type: String,
        required: true
    },
    entryfee: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: true,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        // required: true
    }
} );

module.exports = mongoose.model( 'Tour', tournamentSchema )