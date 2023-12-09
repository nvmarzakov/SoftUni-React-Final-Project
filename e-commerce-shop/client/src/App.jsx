import { Routes, Route} from 'react-router-dom'

import Login from './components/login/Login'
import Account from './components/Account'
import Community from './components/Community'
import Header from './components/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Logout from './components/logout/Logout'
import Register from './components/register/Register'
import Notfound from './components/404/NotFound'
import ExerciseCreate from './components/exercise-create/ExerciseCreate'


function App() {

    return (
        <div className='body-container'>
            <Header />
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path= '/create-exercise' element={<ExerciseCreate/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />

                <Route path='/logout' element={<Logout/>} />
                <Route path='/account' element={<Account/>} />
                <Route path='/community' element={<Community/>} />
                <Route path='*' element={<Notfound/>} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
