import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
 
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Famous Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' className={({isActive}) => isActive ? classes.active : ""} >All Quotes</NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' className={({isActive}) => isActive ? classes.active : ""} >Add New Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
