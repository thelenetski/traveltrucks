import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {

  return (
    <header className={css.header}>
      <NavLink className={css.logo} to="/">
        <img src="/Logo.png" alt="logo" />
      </NavLink>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          <span>Home</span>
        </NavLink>
        <NavLink
          to={'/catalog'}
          className={buildLinkClass}
        >
          <span>Catalog</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
