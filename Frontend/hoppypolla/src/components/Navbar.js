import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <header>
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