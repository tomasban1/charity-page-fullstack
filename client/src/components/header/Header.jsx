import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export function Header(){
   const { isLoggedIn, changeLoginStatus, username, role } = useContext(GlobalContext);
   
   
    return (
        <div >
            <nav className={styles.headerContainer}>
                <Link to={'/'}>Home</Link>
                <Link to={'/stories'}>Stories</Link>
                <Link to={'/post'}>Post your story</Link>
                {!isLoggedIn && <div style={{display:"flex", gap:20}}>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/register'}>Register</Link>
                    </div>
                }
                {isLoggedIn && <div>
                    <p>{username} ({role})</p>
                    <button>Logout</button>
                    </div>}
                
            </nav>
        </div>
    );
}