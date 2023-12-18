import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/authContext'

export default function Navigation() {

    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext)

    return (
        <>
            <p className="site-title">
                <Link to='/'>Recharge</Link>
            </p>
            <nav className="main-nav">
                <ul>
                    {isAuthenticated && (
                        <>  
                            <li><Link to={'/create-exercise'}>Create Exercise</Link></li>
                            <li><Link to='/community'>Community</Link></li>
                            <li><Link to='/account'>Account</Link></li>
                            <li><Link to='/logout'>Logout</Link></li>
                            <li>{username}</li>
                        </>
                    )}
                    {!isAuthenticated && (
                        <>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/exercises'>All Exercises</Link></li>

                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                        </>
                    )}




                    {/* <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li> */}
                </ul>
            </nav>
        </>
    )
}