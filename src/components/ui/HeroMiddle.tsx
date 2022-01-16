import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../images/4.jpg'
import './hero.css'

const HeroMiddle = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    })
    return (
        <div className="hero-middle">
            <div data-aos="fade-right">
                <h2>Patricia Outstanding</h2>
                <p>Practical and elegant to match the new band handle.</p>
                <button className="btn">Shop now</button>
            </div>
            <div data-aos="fade-left">
                <img src={img} alt="hey" />
            </div>
        </div>
    )
}

export default HeroMiddle
