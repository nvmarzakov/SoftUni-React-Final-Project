import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import Logout from './components/Logout'
import Community from './components/Community'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

    return (
        <div className='body-container'>
            <Header />
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/account' element={<Account/>} />
                <Route path='/logout' element={<Logout/>} />
                <Route path='/community' element={<Community/>} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
