import React, { Component } from 'react';
import {H2, HR, P} from './About.style';

class About extends Component {
    render() {
        return (
            <div>
                <div id="about" className="container-fluid" style={{marginTop: "40px", paddingTop: "40px"}}>
                    <div className="row"  >
                        <div className='col-lg-7 col-md-8 col-sm-12 col-xs-12' data-aos="fade-in-up" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="60" data-aos-once="true">
                            <H2>About</H2><br/>
                            <P>This a course project for my Entrepreneurial Leadership Studies. Created at the end of the fall 2018 semester it compiles lessons learned throughout the
                              semester – resulting in a unique resource to guide me as I take on future leadership opportunities.</P>
                        </div>
                        <div className='col-lg-5 col-md-4 col-sm-12 col-xs-12 text-center' data-aos="fade-in-up" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="60" data-aos-once="true">
                        </div>
                    </div>
                </div>
                <HR data-aos="zoom-in" data-aos-delay="500" data-aos-duration="500" data-aos-offset="0" data-aos-once="true"/>
            </div>
        );
    }
}

export default About;
