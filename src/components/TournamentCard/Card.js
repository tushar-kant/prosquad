import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './TourCard.css'

const Card = ( { img, title, badge } ) => {

    const [ remainingTime, setRemainingTime ] = useState(
        parseInt( localStorage.getItem( "remainingTime" ) ) || 3600 // Set the initial time here
    );
    const [ disabled, setDisabled ] = useState( false ); // Set the initial state of the button here

    let navigate = useNavigate();

    function handleOnClick () {
        navigate( '/form' )
    }

    useEffect( () => {
        const timer = setInterval( () => {
            setRemainingTime( ( prevTime ) => {
                const newTime = prevTime - 1;
                localStorage.setItem( "remainingTime", newTime );
                return newTime;
            } );
        }, 1000 );

        // Clear the interval once the time is up
        if ( remainingTime === 0 ) {
            clearInterval( timer );
            setDisabled( true );
        }

        return () => clearInterval( timer ); // Cleanup function to clear interval
    }, [ remainingTime ] );

    const hours = Math.floor( remainingTime / 3600 );
    const minutes = Math.floor( ( remainingTime % 3600 ) / 60 );
    const seconds = remainingTime % 60;


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border-2 border-white">
            <div className='relative'>
                <img className="w-full " src={ img } alt="gamelogo" />
                <div className=" absolute top-4 left-2 pt-[0.1em] pd-[0.1em] pb-[0.1rem] text-xs px-3 bg-red-200 text-red-800 rounded-full font-extrabold">{ badge }</div>
                <div className=" absolute top-4 right-2 pt-[0.1em] pd-[0.1em] pb-[0.1rem] text-xs px-3 bg-red-200 text-red-800 rounded-full font-extrabold">{hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}</div>

            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ title }</div>
                <div className='text-lg font-semibold'>
                    <div className='flex flex-row justify-between'>
                        <p>Date - 15th March</p>
                        <p>Time - 11.30PM</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p>Prize - $100</p>
                        <p>Entry Fee - $10</p>
                    </div>
                </div>
            </div>
            <button className='button-74 ml-24 mb-2 flex items-center ' disabled={ disabled } onClick={ handleOnClick }>Register</button>
        </div>
    )
}

export default Card