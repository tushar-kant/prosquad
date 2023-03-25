const User = require( '../models/UserModel' )
const Tour = require( '../models/TourModel' )
const asyncHandler = require( 'express-async-handler' )

//@desc Get all tours
//@route GET /tours
//@access Private
const getAllTours = asyncHandler( async ( req, res ) => {
    //get all tours from mongodb
    const tours = await Tour.find().select().lean()

    //if no tours
    if ( !tours?.length ) {
        return res.status( 400 ).json( { message: 'No tournament found' } )
    }

    res.json( tours )
} )

// @desc Create new tournament
// @route POST /tournament
// @access Private
const createNewTour = asyncHandler( async ( req, res ) => {
    const { gamename, startDate, startTime, prize, entryfee, category, admin } = req.body

    //Confiem data
    if ( !gamename || !startDate || !startTime || !prize || !entryfee || !category || !admin ) {
        return res.status( 400 ).json( { message: 'All fields are required' } )
    }

    // if ( admin !== req.user._id ) {
    //     return res.status( 401 ).json( { message: 'Unauthorized' } );
    // }

    const tourObject = { gamename, startDate, startTime, prize, entryfee, category, admin }

    //Create and store new tournament
    const tour = await Tour.create( tourObject )

    if ( tour ) {
        res.status( 201 ).json( { message: `New tournament ${gamename} created` } )
    } else {
        res.status( 400 ).json( { message: `Invalid data` } )
    }
} )

// @desc Update a tpur
// @route PATCH /tour
// @access Private
const updatedTour = asyncHandler( async ( req, res ) => {
    const { id, gamename, startDate, startTime, prize, entryfee, category, admin } = req.body

    if ( !gamename || !startDate || !startTime || !prize || !entryfee || !category || !admin ) {
        return res.status( 400 ).json( { message: 'All fields are required' } )
    }

    if ( admin !== req.user._id ) {
        return res.status( 401 ).json( { message: 'Unauthorized' } );
    }

    const tour = await Tour.findById( id ).exec()

    if ( !tour ) {
        return res.status( 400 ).json( { message: 'Tournament not found' } )
    }

    tour.gamename = gamename
    tour.startDate = startDate
    tour.startTime = startTime
    tour.prize = prize
    tour.entryfee = entryfee
    tour.category = category

    const updatedTour = await tour.save()

    res.json( { message: `${updatedTour.gamename} updated` } )
} )

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteTour = asyncHandler( async ( req, res ) => {
    const { id } = req.body

    //Confirm data
    if ( !id ) {
        return res.status( 400 ).json( { message: 'Tour ID required' } )
    }

    // Does the user exist to delete?
    const tour = await User.findById( id ).exec()

    if ( !tour ) {
        return res.status( 400 ).json( { message: 'Tour not found' } )
    }

    const result = await tour.deleteOne()

    const reply = `Tournament ${result.gamename} with ID ${result._id} deleted`

    res.json( reply )

} )

module.exports = {
    getAllTours,
    createNewTour,
    updatedTour,
    deleteTour
}