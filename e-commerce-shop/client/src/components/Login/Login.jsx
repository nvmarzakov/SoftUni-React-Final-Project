export default function Login() {
    return (
        <>
            <div className="animate__animated animate__fadeIn container register-container">
                <form>
                    <h3 className="register-title">Login to your account:</h3>
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

                    <div className="row button">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}