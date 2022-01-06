import img from '../images/3.jpg'
import './hero.css'

const HeroLast = () => {
  return (
    <div className="hero-middle">
      <div>
        <img src={img} alt="hey" />
      </div>
      <div>
        <h2>Patricia Outstanding</h2>
        <p>Practical and elegant to match the new band handle.</p>
        <button className="btn">Shop now</button>
      </div>
    </div>
  );
};

export default HeroLast;
