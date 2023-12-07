import { Routes, Route} from 'react-router-dom'

import Login from './components/login/Login'
import Account from './components/Account'
import Community from './components/Community'
import Header from './components/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Logout from './components/Logout/Logout'
import Register from './components/Register/Register'


function App() {

    return (
        <div className='body-container'>
            <Header />
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/account' element={<Account/>} />
                <Route path='/logout' element={<Logout/>} />
                <Route path='/community' element={<Community/>} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
