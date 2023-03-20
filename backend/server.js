const express = require( 'express' );

const app = express()


const PORT = process.env.PORT || 5000;

app.get( "/", ( req, res ) => {
    res.send( "API is Running" );
} );

app.listen( PORT, console.log( `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..` ) );