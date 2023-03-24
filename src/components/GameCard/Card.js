import React from 'react'
import './Card.css'

const Card = ( { img, title } ) => {

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