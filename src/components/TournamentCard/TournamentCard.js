import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
const TournamentCard = () => {

    const [ tours, setTours ] = useState( [] )

    const fetchTour = async () => {
        const { data } = await axios.get( '/api/tours' );

        setTours( data );
    }

    useEffect( () => {
        fetchTour()
    }, [] )
    return (
        <div className="flex flex-wrap mt-6 flex-row justify-center">
            <div className="flex flex-row justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
                <Card badge="War" title="Clash Of Clan" img="https://images8.alphacoders.com/782/thumbbig-782650.webp" />
            </div>
            <div className="flex flex-row justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
                <Card badge="Squad" title="Mobile Legends" img="https://images5.alphacoders.com/106/thumbbig-1065050.webp" />
            </div>
            <div className=" flex flex-row justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
                <Card badge="Solo" title="Free Fire" img="https://images3.alphacoders.com/915/thumbbig-915847.webp" />
            </div>
            <div className="flex flex-row justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
                <Card badge="Solo" title="Bgmi" img="https://images5.alphacoders.com/887/thumbbig-887546.webp" />
            </div>
            <div className="flex flex-row justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
                <Card badge="Squad" title="Mobile Legends" img="https://images5.alphacoders.com/106/thumbbig-1065050.webp" />
            </div>
            <div className="flex flex-row justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
                <Card badge="Squad" title="Free Fire" img="https://images3.alphacoders.com/915/thumbbig-915847.webp" />
            </div>
        </div>
    )
}

export default TournamentCard