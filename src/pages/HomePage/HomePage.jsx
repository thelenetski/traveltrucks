import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={css.homePageWrapper}>
            <div className={css.homePageWelcome}>
                <div className={css.homePageSlogan}>
                    <h1>Campers of your dreams</h1>
                    <h4>You can find everything you want in our catalog</h4>
                </div>
                <NavLink to='/catalog'>
                    <button>View Now</button>
                </NavLink>
            </div>
        </div>
    );
}

export default HomePage;