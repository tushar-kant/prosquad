const mongoose = require( 'mongoose' );

const tourSchema = mongoose.Schema(
    {
        game: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        prize: {
            type: String,
            required: true,
        },
        entryfee: {
            type: String,
            required: true,
        },
        endTime: {
            type: Date,
            required: true
        },
        pic: {
            type: String,
            required: true,
            default: "https://imgs.search.brave.com/RH0J7DaIaLw8qSMniKLNHdrxIB1z2s5MoiV6LFJkSQ8/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/Nk00eERMUEhpS2lU/ckxVR19qMkJnSGFI/YSZwaWQ9QXBp",
        },
    },
    {
        timestamps: true,
    }
);

const Tour = mongoose.model( "Tour", tourSchema );

module.exports = Tour