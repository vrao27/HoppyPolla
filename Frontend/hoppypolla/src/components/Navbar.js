import {Link} from 'react-router-dom'
import HoppyPolla from '../images/HoppyPolla.png'


const Navbar = () => {
  return (
    <header>
      <img className="nav-img" src={HoppyPolla} alt="hoppypolla" />
      <div className="nav-container">
        <h1>HoppyPolla</h1>
        <Link to="/">
            Home
        </Link>
        <Link to="/brew">Brew</Link>
        <Link to="/brewing-101">Brewing 101</Link>
        <Link to="/create-brew">Create Brew</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
};


export default Navbar