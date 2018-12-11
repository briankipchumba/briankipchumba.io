import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row-fluid">
                    <div style={{paddingTop: "7px"}} className="col-lg-6 col-md-6 visible-lg visible-md">
                        <p>Website designed and created by Brian Kipchumba. All rights reserved.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 visible-lg visible-md">
                        <p style={{textAlign: "right"}}>
                            <a href="https://linkedin.com/in/briankipchumba"><i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
                        </p>
                    </div>
                    <div className="col-sm-12 col-xs-12 visible-sm visible-xs">
                        <p style={{textAlign: "center"}}>
                            <a href="https://linkedin.com/in/briankipchumba"><i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
                        </p>
                    </div>
                    <div style={{paddingTop: "7px"}} className="col-sm-12 col-xs-12 visible-sm visible-xs">
                        <p style={{textAlign: "center"}}>Website designed and created by Brian Kipchumba. All rights reserved.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
