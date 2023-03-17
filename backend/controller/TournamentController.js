const Tour = require( "../model/Tournament" );
const asyncHandler = require( "express-async-handler" );

const getAllTour = asyncHandler( async ( req, res ) => {
    const notes = await Tour.find( {} );
    res.json( notes );
} );

const createTour = asyncHandler( async ( req, res ) => {
    const { game, date, time, category, prize, entryfee, endTime, pic } = req.body;

    if ( !game || !date || !time || !category || prize || entryfee || endTime || pic ) {
        res.status( 400 )
        throw new Error( "Please fill all the fields" )
    } else {
        const tour = new Tour( { game, date, time, category, prize, entryfee, endTime, pic } );

        const createdTour = await tour.save();
        res.status( 201 ).json( createdTour )
    }
} )

const getTourById = asyncHandler( async ( req, res ) => {
    const tour = await Tour.findById( req.params.id );

    if ( tour ) {
        res.json( tour );
    } else {
        res.status( 404 ).json( { message: "Tournament not found" } );
    }
} )

const UpdateTour = asyncHandler( async ( req, res ) => {
    const { game, date, time, category, prize, entryfee, endTime, pic } = req.body;

    const tour = await Tour.findById( req.params.id );

    // if ( tour.user.toString() !== req.user._id.toString() ) {
    //     res.status( 401 );
    //     throw new Error( "You cannot perform this action" );
    // }

    if ( tour ) {
        tour.game = game;
        tour.date = date;
        tour.time = time;
        tour.category = category;
        tour.prize = prize;
        tour.entryfee = entryfee;
        tour.endTime = endTime;
        tour.pic = pic;

        const updatedTour = await tour.save()
        res.json( updatedTour );
    } else {
        res.status( 404 );
        throw new Error( "Tournament not found" );
    }
} )

const DeleteTour = asyncHandler( async ( req, res ) => {
    const tour = await Tour.findById( req.params.id );


    // if ( tour.user.toString() !== req.user._id.toString() ) {
    //     res.status( 401 );
    //     throw new Error( "You cannot perform this action" );
    // }

    if ( tour ) {
        await tour.remove();
        res.json( { message: "Tournament removed successfully" } )
    } else {
        res.status( 404 );
        throw new Error( "Tournament not found" );
    }
} )

module.exports = { getAllTour, createTour, getTourById, UpdateTour, DeleteTour };