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
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken'); //преди презареждане изтрива стария токен

        return {};
    })

    // accessToken
    // email
    // username
    // _id
    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
    
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);
        
        navigate(Path.ExerciseList)
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password);
        
        setAuth(result);
        
        localStorage.setItem('accessToken', result.accessToken);
        
        navigate(Path.Login)

    };

    const logoutHandler = () => {
        
        setAuth({});
        
        localStorage.removeItem('accessToken');
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken, //ако имаме запазен юзър , се обръща в bool 
    };


    return (
        <AuthContext.Provider value={values}>
            <div className='body-container'>
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.ExerciseList} element={<ExerciseList />} />
                    <Route path='/create-exercise' element={<ExerciseCreate />} />
                    <Route path={Path.Login} element={<Login/>} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path='/exercises/:exerciseId' element={<ExerciseDetails />} />
                    <Route path={Path.Logout} element={<Logout />} />
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
