

function Contact() {
    return (
        <>
            <div className="contact-content">
                <div className="container">
                    <h2>/Contact</h2>
                </div>
            </div>
            <div className="contact-form mt-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Enter your email" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Enter your number" />
                        </div>
                        <button className="btn btn-dark mt-3">Submit</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact;