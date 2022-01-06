
import img from '../images/4.jpg'
import './hero.css'

const HeroMiddle = () => {
    return (
        <div className="hero-middle">
            <div>
                <h2>Patricia Outstanding</h2>
                <p>Practical and elegant to match the new band handle.</p>
                <button className="btn">Shop now</button>
            </div>
            <div>
                <img src={img} alt="hey" />
            </div>
        </div>
    )
}

export default HeroMiddle
