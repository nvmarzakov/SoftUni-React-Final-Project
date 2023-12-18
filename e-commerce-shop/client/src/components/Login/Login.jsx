import useFormHook from "../../hooks/useFormHook"

export default function Login({
    loginSubmitHandler,
}) {
    const { values, onChange, onSubmit } = useFormHook(loginSubmitHandler, {
        email: '',
        password: '',
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
                                    name="email"
                                    placeholder="example@mail.com"
                                    onChange={onChange}
                                    value={values.email}
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
                                    name="password"
                                    placeholder="Enter your password"
                                    onChange={onChange}
                                    value={values.password}
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