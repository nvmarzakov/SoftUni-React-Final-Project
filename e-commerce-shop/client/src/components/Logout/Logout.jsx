import { useContext, useEffect } from "react"

import * as authService from '../../services/authService'
import { useNavigate } from "react-router-dom"
import Path from "../../paths";
import AuthContext from "../../contexts/authContext";

export default function Logout() {
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext);
    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutHandler()
                navigate(Path.ExerciseList)
        })
            .catch(() => navigate(Path.ExerciseList));
    })
    return null; 
        // <div>
        //     <h2 className="site-logout">Success Logout! </h2>
        //     <p className="site-message">Thank you for your time! We hope to see you soon again!</p>
        // </div>
        
    
}