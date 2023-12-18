import { useContext } from "react"
import AuthContext from "../../contexts/authContext"
import useFormHook from "../../hooks/useFormHook";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password'
}

export default function Register() {
    const {registerSubmitHandler} = useContext(AuthContext);
    const {values, onChange, onSubmit} = useFormHook(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    return (
        <div className="animate__animated animate__fadeIn container register-container">
            <form onSubmit={onSubmit}>
                <h3 className="register-title">Please enter your details:</h3>
                <div className="row">
                    <div className="col-description">
                        <label htmlFor="email">Email:</label>
                    </div>

                    <div className="col-input">
                        <div className="col-field">
                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="example@mail.com" 
                            onChange={onChange}
                            values={values[RegisterFormKeys.Email]}
                            />
                        </div>
                    </div>
                </div>

                 <div className="row">
                    <div className="col-description">
                        <label htmlFor="password">Password:</label>
                    </div>
                    <div className="col-input">
                        <div className="col-field">
                            <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Enter your password" 
                            onChange={onChange}
                            values={values[RegisterFormKeys.Password]}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-description">
                        <label htmlFor="password">Confirm :</label>
                    </div>
                    <div className="col-input">
                        <div className="col-field">
                            <input 
                            type="password" 
                            id="confirm-password" 
                            name="confirm-password" 
                            placeholder="Confirm your password" 
                            onChange={onChange}
                            values={values[RegisterFormKeys.ConfirmPassword]}
                            />
                        </div>
                    </div>
                </div>

                <div className="row button">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>

    )
}