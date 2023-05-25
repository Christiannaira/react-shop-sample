import { Outlet, Link, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet'

function Hero() {

    const location = useLocation();

    return (
        <>
            <div>

                <Helmet>
                    {
                        location.pathname === '/' ? (<title>NewStock - Home</title>) : ''
                    }
                    {
                        location.pathname === '/about' ? (<title>NewStock - About</title>) : ''
                    }
                    {
                        location.pathname === '/products' ? (<title>NewStock - Products</title>) : ''
                    }
                    {
                        location.pathname === '/contact' ? (<title>NewStock - Contact</title>) : ''
                    }
                </Helmet>

                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">NewStock</Link>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Outlet />
            </div>

        </>
    )
}

export default Hero;