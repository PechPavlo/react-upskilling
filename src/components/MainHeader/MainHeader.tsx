import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { modalActions } from '../../store/modal';
import { FormsTypes } from '../../constants/forms-types.enum';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  const dispatch = useDispatch();
  const addButtonHandler = (type: FormsTypes) => {
    dispatch(modalActions.openModal(type));
  };

  return (
    <header className={classes.header}>
      <h2>React Upskilling</h2>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/react-upskilling/stak-map"
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              Stack Map
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/react-upskilling/stak-modules"
              className={(navData) => (navData.isActive ? classes.active : '')}
            >
              Stack Modules
            </NavLink>
          </li>
          <li>
            <button onClick={() => addButtonHandler(FormsTypes.AddStack)}>
              Add Stack
            </button>
          </li>
          <li>
            <button onClick={() => addButtonHandler(FormsTypes.AddModule)}>
              Add Modele
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
