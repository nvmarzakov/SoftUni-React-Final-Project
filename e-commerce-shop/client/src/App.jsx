import { Routes, Route} from 'react-router-dom'
import Navigation from "./components/Navigation"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import Logout from './components/Logout'
import Community from './components/Community'

function App() {

    return (
        <>
            <Navigation/>

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
        </>
    )
}

export default App
