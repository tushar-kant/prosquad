import './HeroBanner.css'
import banner from '../../assets/banner.jpg'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
    return (
        <div className='relative'>
            <img className='z-0 object-cover w-screen lg:w-full h-screen lg:h-[42.8rem]' src={ banner } alt="Banner" />
            <Link to="/games"><button className='absolute top-[50%] left-[30%] md:left-[45%] btn '>Get Started</button></Link>
        </div>
    )
}

export default HeroBanner