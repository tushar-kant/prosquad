const User = require( '../models/UserModel' )
const Tour = require( '../models/TourModel' )
const asyncHandler = require( 'express-async-handler' )
const bcrypt = require( 'bcrypt' )
const jwt = require( 'jsonwebtoken' )

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler( async ( req, res ) => {
    // Get all users from MongoDB
    const users = await User.find().select( '-password' ).lean()

    // If no users 
    if ( !users?.length ) {
        return res.status( 400 ).json( { message: 'No users found' } )
    }

    res.json( users )
} )

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler( async ( req, res ) => {
    const { username, email, password, ConfirmPassword } = req.body

    // Confirm data
    if ( !username || !password || !email || !ConfirmPassword ) {
        return res.status( 400 ).json( { message: 'All fields are required' } )
    }
    if ( password !== ConfirmPassword ) {
        return res.status( 400 ).json( { message: 'Password did not match' } )
    }

    // Check for duplicate username
    const duplicate = await User.findOne( { email } ).lean().exec()

    if ( duplicate ) {
        return res.status( 409 ).json( { message: 'Duplicate email' } )
    }

    // Hash password 
    const hashedPwd = await bcrypt.hash( password, 10 ) // salt rounds

    const userObject = { username, email, "password": hashedPwd, ConfirmPassword }

    // Create and store new user 
    const user = await User.create( userObject )

    if ( user ) { //created 
        res.status( 201 ).json( { message: `New user ${username} created` } )
    } else {
        res.status( 400 ).json( { message: 'Invalid user data received' } )
    }
} )

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler( async ( req, res ) => {
    const { id, username, email, password, ConfirmPassword } = req.body

    // Confirm data 
    if ( !username || !password || !email || !ConfirmPassword ) {
        return res.status( 400 ).json( { message: 'All fields except password are required' } )
    }

    // Does the user exist to update?
    const user = await User.findById( id ).exec()

    if ( !user ) {
        return res.status( 400 ).json( { message: 'User not found' } )
    }

    // Check for duplicate 
    const duplicate = await User.findOne( { username } ).lean().exec()

    // Allow updates to the original user 
    if ( duplicate && duplicate?._id.toString() !== id ) {
        return res.status( 409 ).json( { message: 'Duplicate username' } )
    }

    user.username = username
    user.email = email

    if ( password ) {
        // Hash password 
        user.password = await bcrypt.hash( password, 10 ) // salt rounds 
    }

    const updatedUser = await user.save()

    res.json( { message: `${updatedUser.username} updated` } )
} )

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler( async ( req, res ) => {
    const { id } = req.body

    // Confirm data
    if ( !id ) {
        return res.status( 400 ).json( { message: 'User ID Required' } )
    }

    // Does the user still have assigned notes?
    const tour = await Tour.findOne( { user: id } ).lean().exec()
    if ( tour ) {
        return res.status( 400 ).json( { message: 'User has assigned notes' } )
    }

    // Does the user exist to delete?
    const user = await User.findById( id ).exec()

    if ( !user ) {
        return res.status( 400 ).json( { message: 'User not found' } )
    }

    const result = await user.deleteOne()

    const reply = `Username ${result.username} with ID ${result._id} deleted`

    res.json( reply )
} )

const loginUser = asyncHandler( async ( req, res ) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne( { email } );

        if ( !user ) {
            return res.status( 404 ).json( { message: 'User not found' } );
        }

        // Check password
        const isMatch = await bcrypt.compare( password, user.password );

        if ( !isMatch ) {
            return res.status( 400 ).json( { message: 'Invalid credentials' } );
        }

        // Generate JWT token
        const token = jwt.sign( { userId: user._id }, process.env.JWT_SECRET );

        // Send token in response
        res.json( { token } );
    } catch ( err ) {
        console.error( err );
        res.status( 500 ).json( { message: 'Server error' } );
    }
} )


module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    loginUser
}