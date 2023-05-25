import { useEffect, useState } from "react";

function About() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        alert('asd');
    }, [count])

    return (
        <>
            <div className="about-content">
                <div className="container">
                    <h2>/About</h2>
                </div>
            </div>
            <div className="about-text container">
                <div className="row">
                    <div className="col-md-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eum ipsam. Illo asperiores, provident expedita quia commodi, quam debitis rem dolorem minus maiores quasi illum natus voluptatum? Quo, vero eius.</p>
                    </div>
                    <div className="col-md-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eum ipsam. Illo asperiores, provident expedita quia commodi, quam debitis rem dolorem minus maiores quasi illum natus voluptatum? Quo, vero eius.</p>
                    </div>
                    <div className="col-md-4">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eum ipsam. Illo asperiores, provident expedita quia commodi, quam debitis rem dolorem minus maiores quasi illum natus voluptatum? Quo, vero eius.</p>
                    </div>
                </div>

                <h1>{count}</h1>
                <button onClick={() => {
                    setCount(count + 1)
                }} className="btn btn-dark my-5">+Increment</button>

            </div>
        </>

    )
}

export default About;