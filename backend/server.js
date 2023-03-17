const express = require( 'express' );
const mongoose = require( 'mongoose' )
const dotenv = require( 'dotenv' );

const app = express()
dotenv.config();

mongoose.connect( process.env.MONGO_URI, { useNewUrlParser: true } ).then( () => {
    console.log( "Mongo Connected" );
} )

const PORT = process.env.PORT || 5000;

app.get( "/", ( req, res ) => {
    res.send( "<h1> Hello World </h1>" );
} );

app.listen( PORT, console.log( `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..` ) );