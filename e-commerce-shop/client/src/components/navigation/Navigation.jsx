import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            <p className="site-title">
                <Link to='/'>Recharge</Link>
            </p>
            <nav className="main-nav">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/account'>Account</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
                    <li><Link to='/community'>Community</Link></li>
                    {/* <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li> */}
                </ul>
            </nav>
        </>
    )
}