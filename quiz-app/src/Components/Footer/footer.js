import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
class Footer extends React.Component{
    render() {
        return (
            <section className="foot text-muted">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-black">
                            <p className="text-center lead">© All rights Reserved.<a className="ml-2 text-light" href="#" target="_blank">Quiz App</a></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;