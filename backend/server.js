const express = require( 'express' );
const tours = require( './data/tours' )
const dotenv = require( 'dotenv' )

const app = express()
dotenv.config();


app.get( "/", ( req, res ) => {
    res.send( "API is Running" );
} );

app.get( '/api/tours', ( req, res ) => {
    res.json( tours )
} )

app.get( "/api/tours/:id", ( req, res ) => {
    const tour = tours.find( ( t ) => t._id === req.params.id )
    res.send( tour )
} );

const PORT = process.env.PORT || 5000;

app.listen( 5000, console.log( `Server started on PORT ${PORT}` ) )