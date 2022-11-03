import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h2>React Upskilling</h2>
      <nav>
        <ul>
          <li>
            <Link to="/react-upskilling/visualization">Stack Map</Link>
          </li>
          <li>
            <Link to="/react-upskilling/listing">Stack Modules</Link>
          </li>
          <li>
            <button>Add Stack</button>
          </li>
          <li>
            <button>Add Modele</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
