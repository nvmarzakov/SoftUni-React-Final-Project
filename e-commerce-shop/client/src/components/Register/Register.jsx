export default function Register() {
    return (
        <div className="animate__animated animate__fadeIn container register-container">
            <form>
                <h1 className="register-title">Please enter your details:</h1>
                <div className="row">
                    <div className="col-description">
                        <label htmlFor="fname">Email:</label>
                    </div>

                    <div className="col-input">
                        <div className="col-field">
                            <input type="text" id="fname" name="firstname" placeholder="example@mail.com" />
                        </div>
                    </div>
                </div>

                 <div className="row">
                    <div className="col-description">
                        <label htmlFor="lname">Password:</label>
                    </div>
                    <div className="col-input">
                        <div className="col-field">
                            <input type="password" id="lname" name="lastname" placeholder="Enter your password" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-description">
                        <label htmlFor="lname">Confirm :</label>
                    </div>
                    <div className="col-input">
                        <div className="col-field">
                            <input type="password" id="lname" name="lastname" placeholder="Confirm your password" />
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