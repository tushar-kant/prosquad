import React from 'react'
// import { useNavigate } from 'react-router-dom';
import './Card.css'

const Card = ( { img, title } ) => {

    // let naviagte = useNavigate();

    // const handleClick = () => {
    //     localStorage.setItem( 'filterTitle', title );
    //     naviagte( '/filtered-page' );
    // };

    return (
        <section className="library">
            <div className="content">
                <div className="card-container">
                    <div className="card">
                        <div className="bg"></div>
                        <img src={ img }
                            alt="" />
                    </div>
                    <p className='font-semibold text-2xl mt-4 text-slate-100 flex justify-center'>{ title }</p>
                </div>
            </div>
        </section>
    )
}

export default Card