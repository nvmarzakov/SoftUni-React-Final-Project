import { useContext } from "react";
import useFormHook from "../../hooks/useFormHook"
import AuthContext from "../../contexts/authContext";

const loginformKeys = {
    Email: 'email',
    Password: 'password',
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useFormHook(loginSubmitHandler, {
        [loginformKeys.Email]: '',
        [loginformKeys.Password]: '',
    });

    return (
        <>
            <div className="animate__animated animate__fadeIn container register-container">
                <form id="login" onSubmit={onSubmit}>
                    <h3 className="register-title">Login to your account:</h3>
                    <div className="row">
                        {/* Email-Field */}
                        <div className="col-description">
                            <label htmlFor="email">Email:</label>
                        </div>

                        <div className="col-input">
                            <div className="col-field">
                                <input
                                    type="text"
                                    id="email"
                                    name={loginformKeys.Email}
                                    placeholder="example@mail.com"
                                    onChange={onChange}
                                    value={values[loginformKeys.Email]}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Password-Field */}
                    <div className="row">
                        <div className="col-description">
                            <label htmlFor="password">Password:</label>
                        </div>
                        <div className="col-input">
                            <div className="col-field">
                                <input
                                    type="password"
                                    id="password"
                                    name={loginformKeys.Password}
                                    placeholder="Enter your password"
                                    onChange={onChange}
                                    value={values[loginformKeys.Password]}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Submit-btn */}
                    <div className="row button">
                        <button type="submit">Submit</button>
                    </div>


                </form>
            </div>

        </>
    )
}