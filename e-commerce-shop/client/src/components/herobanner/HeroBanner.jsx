import { Link } from "react-router-dom";

export default function HeroBanner() {
    return (
        <div className="site-hero">
            <div className="container">
                <section className="section hero-title">
                    <h2 className="animate__animated animate__heartBeat title">Welcome to Our Training Community </h2>
                    <p className="description">Your one-stop destination for all your needs</p>
                </section>

                <section className="section button">
                    <p className="cta"><Link to="/register" className="button">Make an account</Link></p>
                </section>
            </div>
        </div>
    )
}

