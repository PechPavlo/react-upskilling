import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { modulesActions } from '../../store/modules';
import { stacksActions } from '../../store/stacks';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  const dispatch = useDispatch();
  const addStackHandler = () => {
    dispatch(stacksActions.openAddStackModal());
  };
  const addModuleHandler = () => {
    dispatch(modulesActions.openAddModuleModal());
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
            <button onClick={addStackHandler}>Add Stack</button>
          </li>
          <li>
            <button onClick={addModuleHandler}>Add Modele</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
