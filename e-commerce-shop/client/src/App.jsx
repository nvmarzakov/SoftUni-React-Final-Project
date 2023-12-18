import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from '../src/services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Account from './components/Account';
import Community from './components/community/Community';
import Header from './components/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Login from './components/Login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import Notfound from './components/404/NotFound';
import ExerciseCreate from './components/exercise-create/ExerciseCreate';
import ExerciseList from './components/exercise-list/ExerciseList';
import ExerciseDetails from './components/exercise-details/ExerciseDetails';


function App() {

    const navigate = useNavigate();
    const [auth, setAuth] = useState({})

    // accessToken
    // email
    // username
    // _id
    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
    
        setAuth(result);
        navigate(Path.ExerciseList)
    }

    return (
        <AuthContext.Provider value={{loginSubmitHandler}}>
            <div className='body-container'>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/exercises' element={<ExerciseList />} />
                    <Route path='/create-exercise' element={<ExerciseCreate />} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/exercises/:exerciseId' element={<ExerciseDetails />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/community' element={<Community />} />
                    <Route path='*' element={<Notfound />} />
                </Routes>

                <Footer />
            </div>
        </AuthContext.Provider>
    )
}

export default App
