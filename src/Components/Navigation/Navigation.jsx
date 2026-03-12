import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="/images/Cont_logo.png" alt="logo" />
        </div>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation