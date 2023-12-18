export default function Register() {
    return (
        <div className="animate__animated animate__fadeIn container register-container">
            <form>
                <h3 className="register-title">Please enter your details:</h3>
                <div className="row">
                    <div className="col-description">
                        <label htmlFor="email">Email:</label>
                    </div>

                    <div className="col-input">
                        <div className="col-field">
                            <input type="email" id="email" name="email" placeholder="example@mail.com" />
                        </div>
                    </div>
                </div>

                 <div className="row">
                    <div className="col-description">
                        <label htmlFor="password">Password:</label>
                    </div>
                    <div className="col-input">
                        <div className="col-field">
                            <input type="password" id="password" name="password" placeholder="Enter your password" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-description">
                        <label htmlFor="password">Confirm :</label>
                    </div>
                    <div className="col-input">
                        <div className="col-field">
                            <input type="password" id="password" name="password" placeholder="Confirm your password" />
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